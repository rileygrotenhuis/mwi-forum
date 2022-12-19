import {
    Grid,
    Typography,
    TableContainer,
    Paper,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Badge,
    Box,
    Button,
    TextField
} from '@mui/material';
import moment from 'moment';
import Link from 'next/link';
import { Formik } from 'formik';
const axios = require('axios');
import Cookies from 'js-cookie';

export default function CreateComment() {
    return (
        <Grid container style={{ marginTop: '25px' }}>
            <Grid item xs={12}>
                <Formik
                    initialValues={{
                        content: '',
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        alert(JSON.stringify(values));
                    }}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                        isValid,
                    }) => (
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        multiline
                                        rows={2}
                                        maxRows={4}
                                        type="text"
                                        name="content"
                                        label="Comment"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.content}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button
                                        variant="contained"
                                        type="submit"
                                        disabled={isSubmitting || !isValid}
                                        style={{
                                            float: 'right'
                                        }}
                                    >
                                        Comment
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    )}
                </Formik>
            </Grid>
        </Grid>
    );
}
