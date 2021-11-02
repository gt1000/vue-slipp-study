import axios from "axios";
import { setInterceptors } from "./common/interceptors";

function createInstance() {
    const basicInstance = axios.create({
        baseURL: process.env.VUE_APP_API_URL
    })

    return setInterceptors(basicInstance);
}

const instance = createInstance();

function loginUser(userData) {
    return instance.post('login', userData);
}

export { loginUser }