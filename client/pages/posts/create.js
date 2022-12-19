import React, { useEffect } from 'react';
import {
    Button,
    Grid,
    MenuItem,
    Select,
    TextField,
    Typography,
} from '@mui/material';
import { Formik } from 'formik';
const axios = require('axios');
import Cookies from 'js-cookie';
import { checkUnauthenticated } from '../../helpers/authenticationHelper';
import { useRouter } from 'next/router';
import AuthenticatedLayout from '../../layouts/authenticatedLayout';
import postValidators from '../../validators/postValidators';

export default function PostCreate() {
    const router = useRouter();

    useEffect(() => {
        if (checkUnauthenticated()) {
            router.push('/login');
        }
    });

    return (
        <AuthenticatedLayout>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant="h3">New Post</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Formik
                        initialValues={{
                            title: '',
                            content: '',
                            tag: 'engineering',
                        }}
                        validationSchema={postValidators}
                        onSubmit={(values, { setSubmitting }) => {
                            axios
                                .post(
                                    'http://127.0.0.1:8000/api/posts',
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
                                    router.push(`/posts/${response.data.id}`);
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
                                            type="text"
                                            name="title"
                                            label="Title"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.title}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Select
                                            fullWidth
                                            name="tag"
                                            label="Tag"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.tag}
                                        >
                                            <MenuItem value={'engineering'}>
                                                Engineering
                                            </MenuItem>
                                            <MenuItem value={'design'}>
                                                Design
                                            </MenuItem>
                                            <MenuItem
                                                value={'project management'}
                                            >
                                                Project Management
                                            </MenuItem>
                                            <MenuItem value={'marketing'}>
                                                Marketing
                                            </MenuItem>
                                            <MenuItem value={'leadership'}>
                                                Leadership
                                            </MenuItem>
                                        </Select>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            multiline
                                            rows={2}
                                            type="text"
                                            name="content"
                                            label="Content"
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
                                        >
                                            Create
                                        </Button>
                                    </Grid>
                                </Grid>
                            </form>
                        )}
                    </Formik>
                </Grid>
            </Grid>
        </AuthenticatedLayout>
    );
}
