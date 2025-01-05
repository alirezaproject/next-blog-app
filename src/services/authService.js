const { default: http } = require("./httpService");

export async function signUpApi(data) {
    return await http.post("/user/signup", data).then(({ data }) => data.data);
}

export async function loginApi(data) {

    return await http.post("/user/signin", data).then(({ data }) => data.data);
}

export async function getUserApi() {
    return await http.get("/user/profile").then(({ data }) => data.data);
}