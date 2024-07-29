import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/UseAxiosPublic";
import { useState } from "react";

const UserManagement = () => {


    const axiosPublic = useAxiosPublic();
    const [searchText, setSearchtext]= useState('');


    const { data: allUser = [], refetch, isLoading } = useQuery({
        queryKey: ['allUser'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/allUser?search=${searchText}`);
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

    const handleActive = async (id) => {
        // console.log("active", id);
        await axiosPublic.patch(`/activeUser/${id}`)
            .then(data => console.log(data));
        refetch();

    }

    const handleBlock = async (id) => {
        // console.log("block");
        await axiosPublic.patch(`/blockUser/${id}`)
            .then(data => console.log(data));
        refetch();
    }

    const handleSearch = (e) => {
        e.preventDefault();
        const searchText = e.target.searchText.value;
        setSearchtext(searchText);

        
    }




    return (
        <div className="p-4 md:px-[70px] lg:px-[100px] bg-white min-h-screen">

            <div className="font-bold text-3xl text-center py-5">
                User Management
            </div>

            <div className="flex gap-4 justify-end mb-10">
                <form onSubmit={handleSearch} className="flex gap-4">
                    <input type="text" placeholder="Search by name" name="searchText" className=" border-2 px-4 py-2 rounded-xl" />
                    <button className="border-2 px-4 py-2 rounded-xl">Search</button>
                </form>

            </div>



            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr className="font-bold text-xl text-black">
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
                                    <th>{index + 1}</th>
                                    <td>{users.name}</td>
                                    <td>{users.number}</td>
                                    <td>{users.role}</td>
                                    <td>
                                        <span className={`rounded-full font-bold text-white px-4 py-1
                                            ${users.status === 'active' && 'bg-green-500'}
                                            ${users.status === 'pending' && 'bg-pink-500'}
                                            ${users.status === 'block' && 'bg-red-500'}
                                    `}>{users.status}
                                        </span>
                                    </td>



                                    {
                                        users.role !== 'admin' &&
                                        <td>
                                            {
                                                users.status === 'pending' &&
                                                <span className="flex gap-5">
                                                    <button onClick={() => handleActive(users._id)} className="font-bold py-1 px-4 rounded-full bg-green-500 text-white">Active</button>
                                                    <button onClick={() => handleBlock(users._id)} className="font-bold py-1 px-4 rounded-full bg-red-500 text-white">Block</button>

                                                </span>

                                            }
                                            {
                                                users.status === 'active' &&
                                                <button onClick={() => handleBlock(users._id)} className="font-bold py-1 px-4 rounded-full bg-red-500 text-white">Block</button>
                                            }
                                            {
                                                users.status === 'block' &&
                                                <button onClick={() => handleActive(users._id)} className="font-bold py-1 px-4 rounded-full bg-green-500 text-white">Active</button>
                                            }
                                        </td>
                                    }
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