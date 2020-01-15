import axios from 'axios';

class BaseApi {
    http = axios.create({
        baseURL: 'https://cdnfreelancer-server.herokuapp.com',
        headers: {
            'Cache-Control': 'no-cache',
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        },
    });

    requests = [];

    https() {
        return this.http;
    }
    call(request) {
        this.requests = [request];
        return this;
    }
    then(callback) {
        this.request()
            .then(response => this.onThen(response, callback))
            .catch((e) => this.onCatch(e, callback));
    }
    onThen(response, callback = {}) {
        const { success, fail, complete } = callback;
        if (response.data) {
            if (success)
                success(response);
        }
        else if (fail) {
            fail(response);
        }
        if (complete)
            complete(response);
    }
    onCatch(e, callback = {}) {
        const { error, complete } = callback;
        if (error)
            error(e)
        if (complete)
            complete(null, e);
    }
    request() {
        return this.requests[0];
    }
}

export default BaseApi;
