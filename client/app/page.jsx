"use client";

import React, { useEffect } from 'react';
import { Grid, Typography } from "@mui/material";
import { checkUnauthenticated } from '../helpers/authenticationHelper';

export default function Home() {
    useEffect(() => {
        checkUnauthenticated();
    });
    
    return (
        <Grid container>
            <Grid item xs={12}>
                <Typography variant="h3">MWI Serve</Typography>
            </Grid>
        </Grid>
    );
}
