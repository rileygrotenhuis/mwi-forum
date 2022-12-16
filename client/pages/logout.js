import React, { useEffect } from 'react';
const axios = require('axios');
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

export default function Logout() {
    const router = useRouter();

    useEffect(() => {
        axios
            .post('http://localhost:8000/logout', {
                Authorization: `Bearer ${Cookies.get('token')}`,
            })
            .then((response) => {
                Cookies.remove('token');
                router.push('/login');
            })
            .catch((error) => {
                Cookies.remove('token');
                router.push('/login');
            });
    });

    return <></>;
}
