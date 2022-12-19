import { Grid, Typography } from '@mui/material';
import PostsTable from '../components/PostsTable';
import UserInformation from '../components/UserInformation';
import AuthenticatedLayout from '../layouts/authenticatedLayout';
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
            me: data,
        },
    };
}

export default function Profile({ me }) {
    return (
        <AuthenticatedLayout>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <UserInformation data={me.user} />
                </Grid>
                <Grid item xs={12}>
                    <PostsTable data={me.posts} />
                </Grid>
            </Grid>
        </AuthenticatedLayout>
    );
}
