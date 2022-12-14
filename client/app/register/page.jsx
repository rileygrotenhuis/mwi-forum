'use client';

import { Button, Grid, TextField, Typography } from '@mui/material';
import { Formik } from 'formik';
import Cookies from 'js-cookie';

export default function Register() {
    return (
        <Grid
            container
            gap={3}
            style={{
                width: '60%',
                margin: 'auto',
            }}
        >
            <Grid item xs={12}>
                <Typography variant="h3">Registration</Typography>
            </Grid>
            <Grid item xs={12}>
                <Formik
                    initialValues={{
                        name: '',
                        email: '',
                        password: '',
                        password_confirmation: '',
                    }}
                    onSubmit={async (values, { setSubmitting }) => {
                        await fetch('http://localhost:8000/api/register', {
                            method: 'POST',
                            body: JSON.stringify(values),
                            headers: {
                                'Content-Type': 'application/json',
                                'Accept': 'application/json',
                            },
                        })
                            .then((res) => res.json())
                            .then((json) => {
                                Cookies.set('token', json.token);
                            });

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
                        isSubmitting,
                    }) => (
                        <form onSubmit={handleSubmit}>
                            <Grid container gap={3}>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        type="text"
                                        name="name"
                                        placeholder="John Doe"
                                        label="Name"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.name}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        type="email"
                                        name="email"
                                        placeholder="johndoe@test.com"
                                        label="Email Address"
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
                                        placeholder="password"
                                        label="Password"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.password}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        type="password"
                                        name="password_confirmation"
                                        placeholder="password confirmation"
                                        label="Confirm Password"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.password_confirmation}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button
                                        variant="contained"
                                        type="submit"
                                        disabled={isSubmitting}
                                    >
                                        Register
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
