import http from './core/http';

/**
 * Backend service for managing messages
 */
export default new class MessageService {
    all() {
        return http.get('/rest/messages');
    }
    byId(id) {
        return http.get('/rest/messages/'+id);
    }
    sendMessage(message) {
        return http.post('/rest/messages', message);
    }
    deleteMessage(id) {
        return http.delete('/rest/messages/'+id);
    }
}