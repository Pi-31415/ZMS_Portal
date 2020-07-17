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
import Dashboard from './pages/dashboard';

const App = props => {
  return (
    <Router>
      <div>
        <div style={{ background: '#009688', padding: 10, color:'#fff' }}>
          <b>(Development Mode) Completed Pages : </b> 
          <Link to="/portal" style={{color:'#fff'}}>Log In</Link>
          {' | '} 
          <Link to="/portal/signup" style={{color:'#fff'}}>Sign Up</Link>
          {' | '} 
          <Link to="/portal/dashboard" style={{color:'#fff'}}>Dashboard</Link>
        </div>
        <div style={{ padding: 0 }}>
          <Switch>

            <Route path="/portal/signup"><SignUp></SignUp></Route>
            <Route path="/portal"><SignInSide></SignInSide></Route>
            <Route path="/portal/dashboard"><Dashboard></Dashboard></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;