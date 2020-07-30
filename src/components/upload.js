import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
//import axios from "axios";

class Upload extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Card>
                    <CardContent align="center">
                        <label htmlFor="upload-photo">
                            <input
                                id="upload-photo"
                                name="upload-photo"
                                type="file"
                            />

                            <Button color="secondary" variant="contained" component="span">
                                Upload
                            </Button>
                        </label>
                    </CardContent>
                </Card>
            </React.Fragment>
        );
    }
}
export default Upload;