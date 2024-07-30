import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import logo from "../assets/logo.png"
import { useContext } from "react";
import { AuthContext } from "../provider/Provider";
import useUserRole from "../hooks/useUserRole";


const Home = () => {

    const { user } = useContext(AuthContext);

    console.log(user);
    const [userRole] = useUserRole();
    console.log(userRole);


    return (
        <div className="p-5 ">
            <div className="flex justify-between items-center">
                <div className="flex gap-5 items-center">
                    <img className="w-[50px]" src={logo} alt="" />
                    <p className="font-bold text-2xl">Mobile Financial Service (MFS)</p>
                </div>
                <Navbar />
            </div>




            <div className="text-center mt-10">
                <p className="font-bold text-xl">Welcome to <br />Mobile Financial Service (MFS)</p>
                {
                    userRole.status === 'active' ?
                        <p className="font-bold mt-8 text-xl">Go to <span className="text-green-500"><Link to='/dashboard'>Dashboard</Link></span></p>
                        :
                        <p className={`font-bold mt-8 text-xl`}>Status:
                            <span className={`${userRole.status === 'block' && "text-red-600"}`}> {userRole.status}</span> </p>
                }
                {

                }
            </div>
        </div>
    );
};

export default Home;

