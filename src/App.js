import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

//Add Pages
import SignInSide from './pages/SignIn';

const App = props => {
  return (
    <Router>
      <div>
        <Link to="/">Sign In</Link>
        <Switch><Route path="/"><SignInSide></SignInSide></Route></Switch>
      </div>
    </Router>
  );
}

export default App;