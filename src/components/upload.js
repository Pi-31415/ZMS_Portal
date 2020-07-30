import React from 'react';
import Typography from '@material-ui/core/Typography';
import axios from "axios";

class Upload extends React.Component {
    render() {
        return (
            <Typography variant="body2" color="textSecondary" align="center">
                {'Copyright © ZMS Education & Technology '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        );
    }
}
export default Upload;