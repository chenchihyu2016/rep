import { post } from '../index';

export function login(request) {
    return post('/api/Login', request);
}

export function logout(request) {
    return post('/api/logout', request);
}
