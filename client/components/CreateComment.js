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
    TextField,
} from '@mui/material';
import moment from 'moment';
import Link from 'next/link';
import { Formik } from 'formik';
const axios = require('axios');
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import commentValidators from '../validators/commentValidators';

export default function CreateComment({ postId }) {
    const router = useRouter();

    return (
        <Grid container style={{ marginTop: '25px' }}>
            <Grid item xs={12}>
                <Formik
                    initialValues={{
                        content: '',
                    }}
                    validationSchema={commentValidators}
                    onSubmit={(values, { setSubmitting }) => {
                        axios
                            .post(
                                `http://127.0.0.1:8000/api/comments/${postId}`,
                                values,
                                {
                                    headers: {
                                        Authorization: `Bearer ${Cookies.get(
                                            'token'
                                        )}`,
                                    },
                                }
                            )
                            .then((response) => {
                                setSubmitting(false);
                                router.reload();
                            })
                            .catch((error) => {
                                console.log(error);
                                setSubmitting(false);
                            });
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
                                            float: 'right',
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
