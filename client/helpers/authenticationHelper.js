import Cookies from 'js-cookie';

export function checkAuthenticated() {
    const token = Cookies.get('token');

    if (token) {
        window.location.replace('/');
    }
}

export function checkUnauthenticated() {
    const token = Cookies.get('token');

    if (!token) {
        window.location.replace('/login');
    }
}
