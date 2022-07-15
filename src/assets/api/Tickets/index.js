import { get, post, put, del } from '../index';

export function getTickets() {
    // return get('/api/Ticket/Get?page=1&size=30');
    return get('/api/GetDemo');
}

export function postSingleTicket(request) {
    return post('/api/Ticket/CreateTicket', request);
}

export function putSingleTicket(request) {
    return put('/api/Ticket/UpdateTicket', request);
}

export function deleteSingleTicket(request) {
    return del('/api/Ticket/DeleteTicket', request);
}

export function leaveMessageTicket(request) {
    return del('/api/Ticket/Post', request);
}
