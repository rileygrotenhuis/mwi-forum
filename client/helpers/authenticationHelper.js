import Cookies from 'js-cookie';

export function checkAuthenticated() {
    const token = Cookies.get('token');

    if (token) {
        return true;
    }

    return false;
}

export function checkUnauthenticated() {
    const token = Cookies.get('token');

    if (!token) {
        return true;
    }

    return false;
}
