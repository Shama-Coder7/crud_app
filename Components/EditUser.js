import { useState, useEffect } from 'react';
import {
  FormGroup,
  FormControl,
  Input,
  InputLabel,
  makeStyles,
  Typography,
  Button,
} from '@material-ui/core';
import { getUsers, editUser } from '../Service/api';
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
};

const EditUser = () => {
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

  const editUserDetails = async () => {
    await editUser(id, data);
    history.push('/');
  };

  const onValueChange = (e) => {
    console.log(e.target.value);
    setUser({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <FormGroup className={classes.container}>
      <Typography variant="h3"> Edit User</Typography>
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
          aria-describedby="my-helper-text"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Email</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="email"
          value={email}
          id="my-input"
          aria-describedby="my-helper-text"
        />
      </FormControl>

      <FormControl>
        <InputLabel htmlFor='="my-input'>Images:</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="avatar"
          value={avatar}
          id="my-input"
          aria-describedby="my-helper-text"
        />
        <Button>
          <form action="upload.js" method="post" encType="file">
            <input type="file" name="fileToUpload" id="fileToUpload" />
          </form>
        </Button>
      </FormControl>
      <FormControl>
        <Button
          variant="contained"
          style={{color: 'white', background: 'lightgreen'}}
          onClick={() => editUserDetails()}
        >
          Update User
        </Button>
      </FormControl>
    </FormGroup>
  );
};

export default EditUser;
