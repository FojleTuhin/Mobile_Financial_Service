import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/UseAxiosPublic";
import useUserRole from "../../hooks/useUserRole";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const TransectionManagement = () => {

    const axiosPublic = useAxiosPublic();
    const [userRole] = useUserRole();
    const agentNumber = userRole.number;
    const [error, setError] = useState('');
    const navigate = useNavigate();

    // console.log(agentNumber);

    const { data: cashInRequest = [], isLoading, refetch } = useQuery({
        queryKey: ['cashInRequest'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/cashInRequest/${agentNumber}`);
            return res.data;
        }
    })


    //patch confirm for cash in request
    const handleConfirmCashin = async (id) => {
        axiosPublic.patch(`/ConfirmCashIn/${id}`)
            .then(data => {
                if(data.status === 200){
                    refetch();
                    navigate('/dashboard')
                }
            }).catch(err => {
                // console.log(err);
                setError(err.response.data.message);
            })
    }

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

    if (cashInRequest.length < 1) {
        return (
            <p className="text-center font-semibold text-2xl">No cash in request come</p>
        )
    }

    return (
        <div>
            <div className="overflow-x-auto bg-white min-h-screen">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr className="font-bold text-xl text-black">
                            <th></th>
                            <th>Number</th>
                            <th>Money</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cashInRequest.map((transection, index) =>
                                <tr key={transection._id}>
                                    <th>{index + 1}</th>
                                    <td>{transection.receiver}</td>
                                    <td>{transection.money}</td>
                                    <td><span className="rounded-full font-bold text-white px-4 py-1 bg-pink-500">{transection.status}</span></td>
                                    <td><span className="rounded-full font-bold text-white px-4 py-1 bg-green-500"><button onClick={() => handleConfirmCashin(transection._id)}>Confirm</button></span></td>
                                </tr>
                            )
                        }



                    </tbody>
                </table>

                <p className="text-center mt-10 text-red-500">{error}</p>
            </div>
        </div>
    );
};

export default TransectionManagement;