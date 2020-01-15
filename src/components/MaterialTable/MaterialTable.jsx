import MaterialTable from 'material-table';
import React, { useState } from 'react';

export default function UserList() {
  const columns = [
    { title: 'Username', field: 'username' },
    { title: 'Email Address', field: 'email' },
    { title: 'Phone Number', field: 'phoneNumber' },
    { title: 'Skillsets', field: 'skillsets' },
    { title: 'Hobby', field: 'hobby' },
  ];

  const [data, setData] = useState([
    { username: 'chris', email: 'chris@gmail.com', phoneNumber: '0198765432', skillsets: 'Web Developer', hobby: 'Reading', },
    { username: 'topher', email: 'topher@gmail.com', phoneNumber: '0123456789', skillsets: 'Mobile Developer', hobby: 'Cycling' },
  ]);

  return (
    <MaterialTable
      title="Users"
      columns={columns}
      data={data}
      style={{ padding: 30 }}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            resolve();
            setData([...data, newData]);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            resolve();
            if (oldData) {
              setData(prevState => {
                const data = prevState;
                data[data.indexOf(oldData)] = newData;
                return [...data];
              });
            }
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            resolve();
            setData(data.filter(i => i !== oldData));
          }),
      }}
    />
  );
}