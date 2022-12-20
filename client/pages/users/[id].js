import React, { useEffect } from 'react';
import { Grid, Typography } from '@mui/material';
import PostsTable from '../../components/PostsTable';
import { checkUnauthenticated } from '../../helpers/authenticationHelper';
import UserInformation from '../../components/UserInformation';
import AuthenticatedLayout from '../../layouts/authenticatedLayout';
import { useRouter } from 'next/router';
const axios = require('axios');

export async function getServerSideProps(context) {
    if (context.req.cookies['token']) {
        const response = await axios.get(
            `http://127.0.0.1:8000/api/users/${context.params.id}`,
            {
                headers: {
                    Authorization: `Bearer ${context.req.cookies['token']}`,
                },
            }
        );

        const data = response.data;

        return {
            props: {
                user: data,
            },
        };
    }

    return {
        props: {
            user: {},
        },
    };
}

export default function Profile({ user }) {
    const router = useRouter();

    useEffect(() => {
        if (checkUnauthenticated()) {
            router.push('/login');
        }
    });

    return (
        <AuthenticatedLayout>
            {Object.keys(user).length > 0 ? (
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <UserInformation data={user.user} />
                    </Grid>
                    <Grid item xs={12}>
                        <PostsTable data={user.posts} />
                    </Grid>
                </Grid>
            ) : (
                <></>
            )}
        </AuthenticatedLayout>
    );
}
