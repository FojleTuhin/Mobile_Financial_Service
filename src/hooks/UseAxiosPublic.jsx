import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://mobile-financial-service-server-mauve.vercel.app'
})
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;