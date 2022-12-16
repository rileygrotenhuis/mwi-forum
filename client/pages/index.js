import React, { useEffect } from 'react';
import { checkUnauthenticated } from '../helpers/authenticationHelper';
import { useRouter } from 'next/router';
import NavigationBar from '../components/NavigationBar';
import PostsTable from '../components/PostsTable';
const axios = require('axios');

export async function getServerSideProps(context) {
    const postsResponse = await axios.get('http://127.0.0.1:8000/api/posts', {
        headers: {
            'Authorization': `Bearer ${context.req.cookies['token']}`
        }
    });

    const postsData = postsResponse.data;

    return {
        props: {
            posts: postsData
        }
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
        <div>
            <NavigationBar />
            <PostsTable data={posts} />
        </div>
    );
}
