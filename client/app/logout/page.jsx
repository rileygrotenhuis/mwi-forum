"use client";

import React, { useEffect } from 'react';
const axios = require('axios');
import Cookies from 'js-cookie';

export default function Logout() {
    useEffect(() => {
        axios.post('http://localhost:8000/logout', {
            'Authorization': `Bearer ${Cookies.get('token')}`
        }).then((response) => {
            Cookies.remove('token');
            window.location.replace('/login');
        }).catch((error) => {
            Cookies.remove('token');
            window.location.replace('/login');
        });
    });

    return <></>;
};