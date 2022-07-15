import { get } from '../index';

export function getParams() {
    return get('/api/Ticket/GetTicketOptions');
}
