import React, { useEffect, useState } from 'react';
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  makeStyles,
  Typography,
  Button,
} from '@material-ui/core';
import { getUsers } from '../Service/api';

import { useHistory, useParams } from 'react-router-dom';

const useStyles = makeStyles({
  container: {
    width: '60%',
    marginTop: '10%',
    marginLeft: '8rem',
    '& > *': {
      marginTop: 20,
    },
  },
});

const initialValues = {
  first_name: '',
  last_name: '',
  email: '',
  avatar: '',
};

const User = () => {
  const [data, setUser] = useState(initialValues);
  const { first_name, last_name, email, avatar } = data;

  const { id } = useParams();
  const classes = useStyles();

  const history = useHistory();

  useEffect(() => {
    loadUserDetails();
  }, []);

  const loadUserDetails = async () => {
    const response = await getUsers(id);
    setUser(response.data);
  };

  const viewUserDetails = async () => {
    history.push('/');
  };

  return (
    <FormGroup className={classes.container}>
      <Typography variant="h3"> User Information:</Typography>
      <FormControl>
        <InputLabel>First_Name</InputLabel>
        <Input value={first_name} />
      </FormControl>
      <FormControl>
        <InputLabel>Last_Name</InputLabel>
        <Input value={last_name} />
      </FormControl>
      <FormControl>
        <InputLabel>Email:</InputLabel>
        <Input value={email} />
      </FormControl>

      <FormControl>
        <InputLabel>Image</InputLabel>
        <Input value={avatar} />
      </FormControl>
      <FormControl>
        <Button
          variant="contained"
          style={{ background: 'yellow' }}
          onClick={() => viewUserDetails()}
        >
          Ok
        </Button>
      </FormControl>
    </FormGroup>
  );
};

export default User;
