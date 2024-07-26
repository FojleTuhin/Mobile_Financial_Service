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

    if (isLoading) {
        return (
            <div className="flex min-h-screen justify-center items-center">
                <div>
                    <span className="loading loading-ring loading-xs"></span>
                    <span className="loading loading-ring loading-sm"></span>
                    <span className="loading loading-ring loading-md"></span>
                    <span className="loading loading-ring loading-lg"></span>
                </div>
            </div>
        )

    }
    return (
        <div>
            users: {allUser.length}
        </div>
    );
};

export default UserManagement;