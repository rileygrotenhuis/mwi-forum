import React, { useEffect } from 'react';
import { checkUnauthenticated } from '../helpers/authenticationHelper';
import { useRouter } from 'next/router';
import NavigationBar from '../components/NavigationBar';

export default function Home() {
    const router = useRouter();

    useEffect(() => {
        if (checkUnauthenticated()) {
            router.push('/login');
        }
    });

    return (
        <div>
            <NavigationBar />
            <h1>Testing</h1>
        </div>
    );
}
