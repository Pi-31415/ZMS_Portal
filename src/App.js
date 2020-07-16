import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

//Add Pages
import Launch from './pages/launch'
import SignInSide from './pages/SignIn';
import SignUp from './pages/SignUp';

const App = props => {
  return (
    <Router>
      <div>
        <ul>
        <b>List of Pages - For Development Purposes Only</b>
        <li><Link to="/">Home</Link></li>
          <li><Link to="/signin">Log In</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
        </ul>
        <div style={{padding: 0 }}>
          <Switch>
            <Route path="/"><Launch></Launch></Route>
            <Route path="/signup"><SignUp></SignUp></Route> 
            <Route path="/signin"><SignInSide></SignInSide></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;