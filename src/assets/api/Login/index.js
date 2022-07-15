import api from '../index';

export function login(request) {
    return api.post('/login', request);
}

export function logout(request) {
    return api.post('/logout', request);
}
