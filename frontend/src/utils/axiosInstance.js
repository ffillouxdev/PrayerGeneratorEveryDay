import axios from "axios";
import * as jwt_decode from 'jwt-decode';
import dayjs from "dayjs";

const accessToken = localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : "";
const refreshToken = localStorage.getItem('refresh_token') ? JSON.parse(localStorage.getItem('refresh_token')) : "";

const baseURL = 'http://localhost:8000/api/';

const AxiosInstance = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-type': 'application/json',
        'Authorization': accessToken ? `Bearer ${accessToken}` : "",
    },
});

AxiosInstance.interceptors.request.use(async req => {
    if (accessToken) {
        req.headers.Authorization = `Bearer ${accessToken}`;
        const user = jwt_decode(accessToken);
        const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

        if (!isExpired) return req;

        try {
            const resp = await axios.post(`${baseURL}auth/token/refresh/`, {
                refresh: refreshToken
            });

            localStorage.setItem('token', JSON.stringify(resp.data.access));
            req.headers.Authorization = `Bearer ${resp.data.access}`;
            return req;
        } catch (error) {
            console.error('Error refreshing token:', error);
            return Promise.reject(error);
        }
    } else {
        req.headers.Authorization = accessToken ? `Bearer ${accessToken}` : "";
        return req;
    }
});

export default AxiosInstance;
