import React from 'react';
import MaterialTable from 'material-table';

export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Username', field: 'username' },
      { title: 'Email Address', field: 'email' },
      { title: 'Phone Number', field: 'phoneNumber' },
      { title: 'Skillsets', field: 'skillsets' },
      { title: 'Hobby', field: 'hobby' },
    ],
    data: [
      { username: 'chris', email: 'chris@gmail.com', phoneNumber: '0198765432', skillsets: 'Web Developer', hobby: 'Reading', },
      { username: 'topher', email: 'topher@gmail.com', phoneNumber: '0123456789', skillsets: 'Mobile Developer', hobby: 'Cycling' },
    ],
  });

  return (
    <MaterialTable
      title="Users"
      columns={state.columns}
      data={state.data}
      style={{padding: 30}}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState(prevState => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
}