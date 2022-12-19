import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import AuthenticatedLayout from '../../layouts/authenticatedLayout';
import PostView from '../../components/PostView';
import CreateComment from '../../components/CreateComment';
import CommentList from '../../components/CommentList';

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

    return (
        <AuthenticatedLayout>
            <PostView data={post} />
            <CreateComment postId={post.id} />
            <CommentList comments={post.comments} />
        </AuthenticatedLayout>
    );
}
