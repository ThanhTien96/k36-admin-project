import clientAxios from "../http/client";

export default class UserRequester {
    static async singup(payload) {
        return await clientAxios({
            url: "/user",
            method: "POST",
            data: payload,
        })
    };

    static async listUser() {
        return await clientAxios({
            url: "/user",
            method: "GET"
        });
    }

}