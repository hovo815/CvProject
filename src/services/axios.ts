import axios from "axios";
import {Storage} from "./storage";

const AXIOS = axios.create({
    baseURL:"https://iw3880.herokuapp.com/"
});

AXIOS.interceptors.request.use(
    (config) => {

        const token = Storage.getDataInLocalStorageByName("authToken");
        if (token) {
            config.headers["token"] = token;
        }
        config.headers['accept'] = 'application/json, form-data'
        return config;
    },
    (error) => {
        Promise.reject(error)
    }
);


AXIOS.interceptors.response.use((response) => {
    return response.data
})

export default AXIOS;