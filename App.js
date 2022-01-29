import { BrowserRouter, Route, Switch } from 'react-router-dom';
import UserDetails from './Components/UserDetails';
import AddUser from './Components/AddUser';
import EditUser from './Components/EditUser';
import NotFound from './Components/NotFound';
import User from './view/User';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={UserDetails} />
        <Route exact path="/add" component={AddUser} />
        <Route exact path="/edit/:id" component={EditUser} />
        <Route exact path="/view/:id" component={User} />

        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
