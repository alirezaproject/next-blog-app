const { default: axios } = require("axios");

const app = axios.create({
    baseURL: process.env.PUBLIC_BASE_URL,
    withCredentials: true,
})

app.interceptors.response.use((res) => res, async (error) => {
    const originalConfig = error.config;
    if (error.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;
        try {
            const { data } = await axios.get(`${process.env.PUBLIC_BASE_URL}/user/refresh-token`, {
                withCredentials: true,
            });


            if (data) {
                return app(originalConfig);
            }
        } catch (error) {
            return Promise.reject(error);
        }
    }
    return Promise.reject(error);
});

const http = {
    get: app.get,
    post: app.post,
    put: app.put,
    delete: app.delete,
    patch: app.patch,
}
export default http;