import React, { useEffect } from 'react';
import { checkUnauthenticated } from '../helpers/authenticationHelper';
import { useRouter } from 'next/router';
import PostsTable from '../components/PostsTable';
const axios = require('axios');
import AuthenticatedLayout from '../layouts/authenticatedLayout';

export async function getServerSideProps(context) {
    if (context.req.cookies['token']) {
        const postsResponse = await axios.get(
            'http://127.0.0.1:8000/api/posts',
            {
                headers: {
                    Authorization: `Bearer ${context.req.cookies['token']}`,
                },
            }
        );

        const postsData = postsResponse.data;

        return {
            props: {
                posts: postsData,
            },
        };
    }

    return {
        props: {
            posts: [],
        },
    };
}

export default function Home({ posts }) {
    const router = useRouter();

    useEffect(() => {
        if (checkUnauthenticated()) {
            router.push('/login');
        }
    });

    return (
        <AuthenticatedLayout>
            {posts.length > 0 ? <PostsTable data={posts} /> : <></>}
        </AuthenticatedLayout>
    );
}
