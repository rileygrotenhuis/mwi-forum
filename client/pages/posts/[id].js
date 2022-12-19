import React, { useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import AuthenticatedLayout from '../../layouts/authenticatedLayout';
import { checkUnauthenticated } from '../../helpers/authenticationHelper';
import PostView from '../../components/PostView';
import CreateComment from '../../components/CreateComment';
import CommentList from '../../components/CommentList';

export async function getServerSideProps(context) {
    if (context.req.cookies['token']) {
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

    return {
        props: {
            post: {}
        }
    };
}

export default function PostId({ post }) {
    const router = useRouter();

    useEffect(() => {
        if (checkUnauthenticated()) {
            router.push('/login');
        }
    });

    return (
        <AuthenticatedLayout>
            {Object.keys(post).length > 0 ? <><PostView data={post} /><CreateComment postId={post.id} /><CommentList comments={post.comments} /></> : <></>}
        </AuthenticatedLayout>
    );
}
