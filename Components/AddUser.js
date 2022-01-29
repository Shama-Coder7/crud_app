import React, { useState } from 'react';
import {
  FormGroup,
  FormControl,
  Input,
  InputLabel,
  makeStyles,
  Typography,
  Button,
} from '@material-ui/core';
import { addUser } from '../Service/api';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  container: {
    width: '50%',
    marginTop: '5%',
    marginLeft: '6rem',
    '& > *': {
      marginTop: 20,
    },
  },
});

const initialValues = {
  first_name: '',
  last_name: '',
  email: '',
};

const AddUser = () => {
  const [data, setUser] = useState(initialValues);
  const { first_name, last_name, email, avatar } = data;
  const classes = useStyles();
  const history = useHistory();

  const onValueChange = (e) => {
    console.log(e.target.value);
    setUser({ ...data, [e.target.name]: e.target.value });
  };

  const addUserDetails = async () => {
    const response = await addUser(data);
    history.push('/');
  };

  return (
    <FormGroup className={classes.container}>
      <Typography variant="h4"> Add User</Typography>

      <FormControl>
        <InputLabel htmlFor="my-input">First_Name</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="first_name"
          value={first_name}
          id="my-input"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Last_Name</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="last_name"
          value={last_name}
          id="my-input"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Email</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="email"
          value={email}
          id="my-input"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="file">Images</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="avatar"
          value={avatar}
          id="my-input"
        />
        <Button style={{ marginLeft: '1%' }}>
          <form action="." method="post" encType="multipart/form-data">
            <input type="file" name="fileToUpload" id="fileToUpload" />
          </form>
        </Button>
      </FormControl>
      <FormControl>
        <Button
          variant="contained"
          color="primary"
          style={{ marginLeft: '3', width: '40%' }}
          onClick={() => addUserDetails()}
        >
          Submit
        </Button>
      </FormControl>
    </FormGroup>
  );
};

export default AddUser;
