import useUserRole from "../hooks/useUserRole";
import logo from "../assets/logo.png"
import { GiMoneyStack, GiPayMoney, GiReceiveMoney, GiTakeMyMoney } from "react-icons/gi";
import { Link } from "react-router-dom";
import { FaMoneyCheckAlt, FaUsers } from "react-icons/fa";

const DashboardHome = () => {

    const [userRole] = useUserRole();

    return (
        <div>
            <div className="flex justify-center md:min-h-screen items-center">
                <div className="lg:w-[30%] shadow-xl p-5">
                    {
                        userRole.role === "Regular User" &&
                        <div>
                            <div className="bg-green-500 text-white p-10 font-bold rounded-b-2xl">
                                <div className=" flex justify-between items-center">
                                    <div >
                                        <p>{userRole.name}</p>
                                        <p>{userRole.email}</p>
                                        <p>{userRole.number}</p>
                                    </div>
                                    <div>
                                        <Link to='/home'><img className="w-[50px]" src={logo} alt="" /></Link>
                                    </div>
                                </div>

                                <p className="text-center mt-5 text-xl">Balance: {userRole?.balance}</p>
                            </div>
                            <div className="bg-white flex justify-between mt-10 p-8 gap-5 rounded-t-2xl">
                                <Link to='/dashboard/sendMoney'>
                                    <div className="flex flex-col items-center">
                                        <GiPayMoney className="text-3xl" />
                                        <p>Send Money</p>
                                    </div>
                                </Link>
                                <Link to='/dashboard/cashOut'>
                                    <div className="flex flex-col items-center">
                                        <GiTakeMyMoney className="text-3xl" />
                                        <p>Cash out</p>
                                    </div>
                                </Link>
                                <Link>
                                    <div className="flex flex-col items-center">
                                        <GiReceiveMoney className="text-3xl" />
                                        <p>Cash in</p>
                                    </div>
                                </Link>
                            </div>
                            <div className="flex justify-center bg-white pb-8">
                                <Link>
                                    <div className="flex flex-col items-center">
                                        <GiMoneyStack className="text-3xl" />
                                        <p>Transaction</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    }
                    {
                        userRole.role === 'Agent' &&
                        <div>
                            <div className="bg-green-500 text-white p-10 font-bold rounded-b-2xl">
                                <div className=" flex justify-between items-center">
                                    <div >
                                        <p>{userRole.name}</p>
                                        <p>{userRole.email}</p>
                                        <p>{userRole.number}</p>
                                    </div>
                                    <div>
                                        <Link to='/home'><img title="click me to go home" className="w-[50px]" src={logo} alt="" /></Link>
                                    </div>
                                </div>

                                <p className="text-center mt-5 text-xl">Balance: {userRole?.balance}</p>
                            </div>
                            <div className="bg-white flex justify-between mt-10 p-8 rounded-t-2xl">
                                <div className="flex flex-col items-center  text-center">
                                    <FaMoneyCheckAlt className="text-3xl" />
                                    <p>Transaction management</p>
                                </div>
                                <div className="flex flex-col items-center text-center">
                                    <GiTakeMyMoney className="text-3xl" />
                                    <p>Transaction history</p>
                                </div>

                            </div>

                        </div>
                    }
                    {
                        userRole.role === 'admin' &&
                        <div>
                            <div className="bg-green-500 text-white p-10 font-bold rounded-b-2xl">
                                <div className=" flex justify-between items-center">
                                    <div >
                                        <p>{userRole.name}</p>
                                        <p>{userRole.email}</p>
                                        <p>{userRole.number}</p>
                                    </div>
                                    <div>
                                        <Link to='/home'><img title="click me to go home" className="w-[50px]" src={logo} alt="" /></Link>
                                    </div>
                                </div>


                            </div>
                            <div className="bg-white flex gap-5 justify-between mt-10 p-8 rounded-t-2xl">

                                <Link to='/dashboard/userManagement'>
                                    <div className="flex flex-col items-center  text-center">
                                        <FaUsers className="text-3xl" />
                                        <p>User management</p>
                                    </div>
                                </Link>

                                <Link to='/dashboard/transections'>
                                    <div className="flex flex-col items-center text-center">
                                        <GiTakeMyMoney className="text-3xl" />
                                        <p>Transaction monitoring</p>
                                    </div>
                                </Link>

                            </div>

                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;