import axios from "axios";

const getCsrfToken = async () => {
    const { data } = await axios.get("/api/csrf-token");
    console.log("CSRF", data);
    axios.defaults.headers["X-CSRF-Token"] = data.csrfToken;
};

export const postMethod = async (url, body) => {
    await getCsrfToken();
    return axios.post(url, body);
}

export const getMethod = async (url) => {
    await getCsrfToken();
    return axios.get(url);
}

export const putMethod = async (url, body) => {
    await getCsrfToken();
    return axios.put(url, body);
}

export const deleteMethod = async (url, body) => {
    await getCsrfToken();
    return axios.delete(url, body);
}

export default {getMethod, postMethod, putMethod, deleteMethod};