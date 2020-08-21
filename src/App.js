import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from 'react-router-dom';


/*

<Route path="/portal/signup"><SignUp></SignUp></Route>
            <Route path="/portal/accountcreated"><AccountCreated></AccountCreated></Route>
            <Route path="/portal/dashboard/home"><Dashboard></Dashboard></Route>
            <Route path="/portal/dashboard/schedule"><Schedule></Schedule></Route>
            <Route path="/portal/dashboard/notif"><Notifications></Notifications></Route>
            <Route path="/portal/dashboard/syllabus"><Syllabus></Syllabus></Route>
            <Route path="/portal/terms"><Terms></Terms></Route>
            <Route path="/portal/privacy"><Privacy></Privacy></Route>
            <Route path="/portal/classroom"><Classroom></Classroom></Route>
            <Route path="/portal"><SignInSide></SignInSide></Route>
*/

const App = props => {
  return (
    <Router>
      <div>
        <div style={{ padding: '0', margin: '0' }}>
          <Switch>
            

          </Switch>
        </div>

      </div>
    </Router>
  );
}

export default App;