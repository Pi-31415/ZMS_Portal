import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

//Add Pages
import SignInSide from './pages/SignIn';

const App = props => {
  return (
    <Router>
      <div>
        <Switch><Route path="/"><SignInSide></SignInSide></Route></Switch>
      </div>
    </Router>
  );
}

export default App;