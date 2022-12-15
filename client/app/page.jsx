"use client";

import React, { useEffect } from 'react';
import { Grid, Typography } from "@mui/material";
import Cookies from 'js-cookie';

export default function Home() {
    useEffect(() => {
        const token = Cookies.get('token');

        if (!token) {
            window.location.replace('/login');
        }
    });
    
    return (
        <Grid container>
            <Grid item xs={12}>
                <Typography variant="h3">MWI Serve</Typography>
            </Grid>
        </Grid>
    );
}
