import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import UserApi from "api/User";
import MaterialTable from 'material-table';
import React, { useEffect, useState } from 'react';

export default function UserList() {
  const columns = [
    { title: 'Username', field: 'username' },
    { title: 'Email Address', field: 'email' },
    { title: 'Phone Number', field: 'phoneNumber' },
    { title: 'Skillsets', field: 'skillsets' },
    { title: 'Hobby', field: 'hobby' },
  ];

  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [severe, setSevere] = useState(true);

  const getUsers = () => {
    UserApi.getUsers().then({
      complete: (res, e) => {
        if (e)
          console.log(e);
        else
          setData(res.data)
      }
    });
  };

  useEffect(() => {
    if (!data.length) {
      getUsers();
    }
  }, [data]);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <MuiAlert elevation={6} variant="filled" onClose={handleClose} severity={severe ? "error" : "success"}>
          {message}
        </MuiAlert>
      </Snackbar>
      <MaterialTable
        title="Users"
        columns={columns}
        data={data}
        style={{ padding: 30 }}
        editable={{
          onRowAdd: newData =>
            new Promise((resolve, reject) => {
              UserApi.create(newData).then({
                complete: (res, e) => {
                  if (e) {
                    setMessage(e.response.data.message);
                    setSevere(true);
                    reject();
                  }
                  else {
                    setMessage('User created!');
                    setSevere(false);
                    setData([...data, res.data]);
                    resolve();
                  }
                  setOpen(true);
                }
              });
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              if (oldData) {
                UserApi.update(oldData._id, newData).then({
                  complete: (res, e) => {
                    if (e) {
                      setMessage(e.response.data.message);
                      setSevere(true);
                      reject();
                    }
                    else {
                      setMessage('User updated!');
                      setSevere(false);
                      setData(prevState => {
                        const data = prevState;
                        data[data.indexOf(oldData)] = newData;
                        return [...data];
                      });
                      resolve();
                    }
                    setOpen(true);
                  }
                });
              }
            }),
          onRowDelete: oldData =>
            new Promise((resolve, reject) => {
              UserApi.delete(oldData._id).then({
                complete: (res, e) => {
                  if (e) {
                    setMessage(e.response.data.message);
                    setSevere(true);
                    reject();
                  }
                  else {
                    setMessage('User deleted!');
                    setSevere(false);
                    setData(data.filter(i => i !== oldData));
                    resolve();
                  }
                  setOpen(true);
                }
              });
            }),
        }}
      />
    </React.Fragment>
  );
}