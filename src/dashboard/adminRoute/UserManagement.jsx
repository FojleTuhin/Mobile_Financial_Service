import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/UseAxiosPublic";
// import useAxiosSecure from "../../hooks/UseAxiosSecure";

const UserManagement = () => {


    const axiosPublic = useAxiosPublic();
    // const axiosSecure = useAxiosSecure();

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

    const handleActive = async(id)=>{
        console.log("active", id);
       await axiosPublic.patch(`/activeUser/${id}`)
       .then(data=>console.log(data));
       refetch();

    }

    const handleBlock = ()=>{
        // console.log("block");
    }




    return (
        <div className="p-4 md:px-[70px] lg:px-[100px] bg-white min-h-screen">

            <div className="font-bold text-3xl text-center py-5">
                User Management
            </div>
           


            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Number</th>
                            <th>Role</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allUser.map((users, index) =>
                                <tr key={users._id}>
                                    <th>{index+1}</th>
                                    <td>{users.name}</td>
                                    <td>{users.number}</td>
                                    <td>{users.role}</td>
                                    <td>{users.status}</td>
                                    <td>
                                       {
                                        users.status === 'pending' && 
                                         <span className="flex gap-5">
                                            <button onClick={()=>handleActive(users._id)} className="font-bold py-1 px-4 rounded-full bg-green-500 text-white">Active</button>
                                            <button onClick={()=>handleBlock(users._id)} className="font-bold py-1 px-4 rounded-full bg-red-500 text-white">Block</button>
                                         </span>

                                       }
                                    </td>
                                </tr>
                            )
                        }

                      

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserManagement;