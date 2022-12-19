import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import AuthenticatedLayout from '../../layouts/authenticatedLayout';

export async function getServerSideProps(context) {
    const postResponse = await axios.get(
        `http://127.0.0.1:8000/api/posts/${context.params.id}`,
        {
            headers: {
                Authorization: `Bearer ${context.req.cookies['token']}`,
            },
        }
    );

    const postData = postResponse.data;

    return {
        props: {
            post: postData,
        },
    };
}

export default function PostId({ post }) {
    const router = useRouter();

    const { id } = router.query;

    return <AuthenticatedLayout>{JSON.stringify(post)}</AuthenticatedLayout>;
}
