import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import axios from "axios";


export default function Upload() {
    const [file, setFile] = React.useState();
    const [lessonid, setLessonid] = React.useState("");

    const onChange = (e) => {
        console.log(e.target.files[0]);
        setFile(e.target.files[0]);
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const query = {
            "LESSON_ID": "TEST LESSON",
            "FILE": file
        };
        axios.post('https://zmsedu.com/api/student/homework/upload', query)
            .then(response => console.log(response.data.RESULT))
            .catch(error => {
                console.log(error)
            });
    }

    return (
        <React.Fragment>
            <Card>
                <CardContent align="center">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="upload-photo">
                            <input
                                id="upload-photo"
                                name="upload-photo"
                                type="file"
                                onChange={onChange}
                            />

                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                            >
                                Upload
                    </Button>
                        </label>
                    </form>
                </CardContent>
            </Card>
        </React.Fragment>
    );
}