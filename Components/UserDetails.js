import { useEffect, useState } from 'react';
import {
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Button,
  makeStyles,
  Toolbar,
} from '@material-ui/core';

import { getUsers, deleteUser, viewUser } from '../Service/api';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  header: {
    marginTop: 20,
    borderRadius: ' 1rem 2rem',
    height: '10%',
    width: '25%',
    marginLeft: '4rem',
  },
  h2: {
    marginRight: 20,
    fontSize: 35,
    textAlign: 'center',
    color: '#004d40',
  },
  table1: {
    background: '#fffde7',
  },
  table2: {
    margin: '50px 0 0 50px',
    background: '#fcf6f5f',
  },
  thead: {
    '& > *': {
      fontSize: 23,
      background: '#005555',
      color: '#FFFFFF',
    },
  },
  row: {
    '& > *': {
      fontSize: 20,
    },
  },
});

const UserDetails = () => {
  const [users, setUsers] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    getUserDetails();
  }, []);

  const deleteUserData = async (id) => {
    await deleteUser(id);
    getUserDetails();
  };

  const getUserDetails = async () => {
    const response = await getUsers();
    setUsers(response.data);
  };

  

  return ( 
    <Table className={classes.table1}>
      <Toolbar className={classes.header}>
        <h2 className={classes.h2}>User Details</h2>
      </Toolbar>
      <Table>
        <Table className={classes.table2}>
          <TableHead>
            <TableRow className={classes.thead}>
              <TableCell>Id</TableCell>
              <TableCell>First_Name</TableCell>
              <TableCell>Last_Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Images</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow className={classes.row} key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.first_name}</TableCell>
                <TableCell>{user.last_name}</TableCell>
                <TableCell>{user.email}</TableCell>

                <TableCell>
                  <img src={user.avatar} />
                </TableCell>
                <TableCell>
                  <Button
                    color="primary"
                    variant="contained"
                    style={{ marginRight: 10 }}
                    component={Link}
                    to={`/edit/${user.id}`}
                  >
                    Edit
                  </Button>
                  <Button
                    color="primary"
                    variant=""
                    style={{ marginRight: 10, background: 'skyblue' }}
                    component={Link}
                    to={`/view/${user.id}`}
                  >
                    View
                  </Button>
                  <Button
                    color="secondary"
                    variant="contained"
                    onClick={() => deleteUserData(user.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </Table>
        <Button
          variant="contained"
          color="primary"
          style={{
            margin: 50,
            marginBottom: 5,
            display: 'flex',
            width: '20%',
            marginLeft: '5rem',
          }}
          component={Link}
          to={`/add/`}
        >
          Add New User
        </Button>
      </Table>
  );
};

export default UserDetails;
