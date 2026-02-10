import axios from "axios";
import useAuth from "./useAuth";

const axiosInstance = axios.create({
    baseURL: `${import.meta.env.VITE_server}`
})
const useAxiosSecure = () => {
    const {user, logOut} = useAuth();
    axiosInstance.interceptors.request.use(config => {
        config.headers.authorization = `Bearer ${user?.accessToken}`;
        return config;
    })
    axiosInstance.interceptors.response.use(res => res, err => {
        if(err.response.status === 401 || err.response.status === 403){
            logOut();
        }
        return Promise.reject(err);
    })
    return axiosInstance
};

export default useAxiosSecure;