"use client";

import { Button, Grid, TextField, Typography } from "@mui/material";
import { Formik } from 'formik';

export default function Login() {
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
                    onSubmit={(values, { setSubmitting }) => {
                        alert(JSON.stringify(values));

                        setSubmitting(false);
                    }}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting
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
                                    <Button variant="contained" type="submit">
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