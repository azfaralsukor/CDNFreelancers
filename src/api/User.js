import BaseApi from './Base';

class UserApi{
    static user = "user";

    static get(id) {
        const api = new BaseApi();
        api.call(api.https().get(`${UserApi.user}/${id}`));
        return api;
    }

    static create(body) {
        const api = new BaseApi();
        api.call(api.https().post(UserApi.user, body));
        return api;
    }

    static update(id, body) {
        const api = new BaseApi();
        api.call(api.https().put(`${UserApi.user}/${id}`, body));
        return api;
    }

    static delete(id) {
        const api = new BaseApi();
        api.call(api.https().delete(`${UserApi.user}/${id}`));
        return api;
    }

    static getUsers() {
        const api = new BaseApi();
        api.call(api.https().get(UserApi.user));
        return api;
    }
}

export default UserApi;
