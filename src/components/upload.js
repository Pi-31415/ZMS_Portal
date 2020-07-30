import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
//import axios from "axios";

class Upload extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Card>
                    <CardContent align="center">
                        <Typography variant="body2" color="textSecondary" align="center">
                            {'Upload'}
                        </Typography>
                    </CardContent>
                </Card>
            </React.Fragment>
        );
    }
}
export default Upload;