import { Grid, Typography } from "@mui/material";
import AuthenticatedLayout from '../../layouts/authenticatedLayout';

export default function PostCreate() {
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