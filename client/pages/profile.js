import { Grid, Typography } from '@mui/material';
import NavigationBar from '../components/NavigationBar';
const axios = require('axios');

export async function getServerSideProps(context) {
    const response = await axios.get('http://127.0.0.1:8000/api/users/me', {
        headers: {
            Authorization: `Bearer ${context.req.cookies['token']}`,
        },
    });

    const data = response.data;

    return {
        props: {
            me: data
        }
    };
}

export default function Profile({ me }) {
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