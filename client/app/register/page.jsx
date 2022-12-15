"use client";

import { Button, Grid, TextField, Typography } from "@mui/material";
import { Formik } from 'formik';
import registrationValidators from "../../validators/registrationValidators";

export default function Register() {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Typography variant="h3">Registration</Typography>
            </Grid>
            <Grid item xs={12}>
                <Formik
                    initialValues={{
                        name: '',
                        email: '',
                        password: '',
                        password_confirmation: ''
                    }}
                    validationSchema={registrationValidators}
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
                        isSubmitting,
                        isValid
                    }) => (
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        type="text"
                                        name="name"
                                        label="Name"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.name}
                                    />
                                </Grid>
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
                                    <TextField
                                        fullWidth
                                        type="password"
                                        name="password_confirmation"
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
                                        disabled={isSubmitting || !isValid}
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
};