import { Grid, Typography } from '@mui/material';
import NavigationBar from '../components/NavigationBar';

export default function Profile() {
    return (
        <>
            <NavigationBar />
            <Grid container>
                <Grid item xs={12}>
                    <Typography variant="h3">Profile</Typography>
                </Grid>
            </Grid>
        </>
    )
}