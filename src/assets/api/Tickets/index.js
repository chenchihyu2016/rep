import api from '../index';

export function getTickets() {
    return api.get('/tickets');
}

export function getSingleTicket({ id }) {
    return api.get(`/tickets/${id}`);
}

export function postSingleTicket(request) {
    return api.post('/ticket', request);
}

export function putSingleTicket(request) {
    return api.put('/ticket', request);
}

export function deleteSingleTicket(request) {
    return api.delete('/ticket', request);
}
