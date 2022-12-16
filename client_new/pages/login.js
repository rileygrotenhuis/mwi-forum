import React, { useEffect } from 'react';
import { Button, Grid, TextField, Typography } from "@mui/material";
import { Formik } from 'formik';
import loginValidators from "../validators/loginValidators";
const axios = require('axios');
import Cookies from 'js-cookie';
import { checkAuthenticated } from '../helpers/authenticationHelper';
import { useRouter } from 'next/router';

export default function Login() {
    const router = useRouter();

    useEffect(() => {
        if(checkAuthenticated()) {
            router.push('/');
        }
    });

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Typography variant="h3">Login</Typography>
            </Grid>
            <Grid item xs={12}>
                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                    }}
                    validationSchema={loginValidators}
                    onSubmit={(values, { setSubmitting }) => {
                        axios.post('http://localhost:8000/api/login', values)
                            .then((response) => {
                                Cookies.set('token', response.data.token);
                                setSubmitting(false);
                                router.push('/');
                            }).catch((error) => {
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
                        isValid
                    }) => (
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        type="text"
                                        name="email"
                                        label="Email"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                    /> 
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        type="password"
                                        name="password"
                                        label="Password"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.password}
                                    /> 
                                </Grid>
                                <Grid item xs={12}>
                                    <Button 
                                        variant="contained" 
                                        type="submit"
                                        disabled={isSubmitting || !isValid}
                                    >
                                        Login
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    )}
                </Formik>
            </Grid>
        </Grid>
    );
};