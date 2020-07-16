import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

//Add Pages
import SignInSide from './pages/SignIn';
import SignUp from './pages/SignUp';

const App = props => {
  return (
    <Router>
      <div>
        <ul>
          <b>List of Pages - For Development Purposes Only</b>
          
          <li><Link to="/portal">Log In</Link></li>
          <li><Link to="/portal/signup">Sign Up</Link></li>
        </ul>
        <div style={{ padding: 0 }}>
          <Switch>
            
            <Route path="/portal/signup"><SignUp></SignUp></Route>
            <Route path="/portal"><SignInSide></SignInSide></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;