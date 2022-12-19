import React, { useEffect } from 'react';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { Formik } from 'formik';
const axios = require('axios');
import Cookies from 'js-cookie';
import { checkUnauthenticated } from '../../helpers/authenticationHelper';
import { useRouter } from 'next/router';
import AuthenticatedLayout from '../../layouts/authenticatedLayout';

export default function PostCreate() {
    const router = useRouter();

    useEffect(() => {
        if (checkUnauthenticated()) {
            router.push('/login');
        }
    });

    return (
        <AuthenticatedLayout>
            <Grid container>
                <Grid item xs={12}>
                    <Typography>Create</Typography>
                </Grid>
            </Grid>
        </AuthenticatedLayout>
    );
}