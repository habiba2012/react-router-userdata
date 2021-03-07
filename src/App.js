import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Home from './components/Home/Home';

import NotFound from './components/NotFound/NotFound';
import UserDetails from './components/Userdetails/UserDetails';


function App() {
  
  return (
  <Router>
    <Switch>
      <Route path="/home">
        <Home></Home>
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/user/:userId">
        <UserDetails></UserDetails>
      </Route>
      <Route path="/*">
        <NotFound></NotFound>
      </Route>
    </Switch>
  </Router>
  );
}

export default App;
