import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Copyright from '../components/copyright';

class AccountCreated extends React.Component {
    render() {
        return (
            <>
            <br></br><br></br><br></br><br></br>
            <Typography variant="body2" color="textSecondary" align="center">
                {'Your account has been successfully created.'}
                <br></br>
                {'Thank you very much for signing up.'}
            </Typography>
            <br></br>
            <div alighn="center">
            <Typography variant="body2" color="textSecondary" align="center">
            <Link to="/portal/" className="custom-link">{"Click here to go back and Sign In."}</Link>
            <br></br><br></br>
            <Copyright></Copyright>
            </Typography>
            </div>
            </>
        );
    }
}
export default AccountCreated;