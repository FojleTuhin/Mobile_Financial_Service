import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/UseAxiosPublic";

const UserManagement = () => {


    const axiosPublic = useAxiosPublic();

    const { data: allUser = [], refetch, isLoading } = useQuery({
        queryKey: ['allUser'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/allUser`);
            return res.data;
        }
    })
    
    return (
        <div>
            users: {allUser.length}
        </div>
    );
};

export default UserManagement;