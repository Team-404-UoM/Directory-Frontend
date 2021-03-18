
import Axios from "axios";
import { firebaseAuth } from "../config/FirebaseConfig";

const HOST = "http://localhost";
const PORT = "4000";

export const BASE_URL = `${HOST}:${PORT}`;

const axiosInstance = Axios.create(
    {
        baseURL: BASE_URL,
        timeout: 60000,
    }
);

// Adds Authorization header for each request
axiosInstance.interceptors.request.use(
    async (config) => {
        const accessToken = await firebaseAuth.currentUser?.getIdToken();
        console.log("Token is " + accessToken);
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    }
);


export { axiosInstance };












