import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/UseAxiosPublic";
import useUserRole from "../../hooks/useUserRole";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const TransectionsForUser = () => {


    const axiosPublic = useAxiosPublic();
    const [userRole] = useUserRole();
    const userNumber = userRole.number;
    console.log(userNumber);


    const { data: cashIn = [] } = useQuery({
        queryKey: ['cashIn',userNumber],
        queryFn: async () => {
            const res = await axiosPublic.get(`/CashInTransection/${userNumber}`);
            return res.data;
        }
    })

    const { data: cashOut = [] } = useQuery({
        queryKey: ['cashOut',userNumber],
        queryFn: async () => {
            const res = await axiosPublic.get(`/CashOutTransection/${userNumber}`);
            return res.data;
        }
    })

    const { data: sendMoney = [] } = useQuery({
        queryKey: ['sendMoney',userNumber],
        queryFn: async () => {
            const res = await axiosPublic.get(`/SendMoneyTransection/${userNumber}`);
            return res.data;
        }
    })



    return (
        <div>
            <div className="px-4 md:px-[70px] lg:px-[100px] text-center bg-white min-h-screen py-5">

                <Tabs>
                    <TabList>
                        <Tab>Cash in</Tab>
                        <Tab>Cash out</Tab>
                        <Tab>Send Money</Tab>
                    </TabList>


                    {/* cashIn */}
                    <TabPanel>
                        <div className="overflow-x-auto bg-white min-h-screen">
                            <table className="table table-zebra">
                                {/* head */}
                                <thead>
                                    <tr className="font-bold text-xl text-black">
                                        <th></th>
                                        <th>Agent</th>
                                        <th>Receiver</th>
                                        <th>Money</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        cashIn.map((transection, index) =>
                                            <tr key={transection._id}>
                                                <th>{index + 1}</th>
                                                <td>{transection.agent}</td>
                                                <td>{transection.receiver}</td>
                                                <td>{transection.money}</td>
                                                <td><span className="rounded-full font-bold text-white px-4 py-1 bg-pink-500">{transection.status}</span></td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>

                        </div>
                    </TabPanel>





                    {/* cashOut */}
                    <TabPanel>
                        <div className="overflow-x-auto bg-white min-h-screen">
                            <table className="table table-zebra">
                                {/* head */}
                                <thead>
                                    <tr className="font-bold text-xl text-black">
                                        <th></th>
                                        <th>Agent</th>
                                        <th>Sender</th>
                                        <th>Money</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        cashOut.map((transection, index) =>
                                            <tr key={transection._id}>
                                                <th>{index + 1}</th>
                                                <td>{transection.receiver}</td>
                                                <td>{transection.sender}</td>
                                                <td>{transection.money}</td>
                                                <td><span className="rounded-full font-bold text-white px-4 py-1 bg-pink-500">{transection.status}</span></td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>

                        </div>
                    </TabPanel>



                    {/* send money */}
                    <TabPanel>
                        <div className="overflow-x-auto bg-white min-h-screen">
                            <table className="table table-zebra">
                                {/* head */}
                                <thead>
                                    <tr className="font-bold text-xl text-black">
                                        <th></th>
                                        <th>Receiver</th>
                                        <th>Sender</th>
                                        <th>Money</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        sendMoney.map((transection, index) =>
                                            <tr key={transection._id}>
                                                <th>{index + 1}</th>
                                                <td>{transection.receiver}</td>
                                                <td>{transection.sender}</td>
                                                <td>{transection.money}</td>
                                                <td><span className="rounded-full font-bold text-white px-4 py-1 bg-pink-500">{transection.status}</span></td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>

                        </div>
                    </TabPanel>
                </Tabs>

            </div>
        </div>
    );
};

export default TransectionsForUser;