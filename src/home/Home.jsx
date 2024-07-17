import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import logo from "../assets/logo.png"
import { useContext } from "react";
import { AuthContext } from "../provider/Provider";


const Home = () => {
    
    const {user} = useContext(AuthContext);
    console.log(user);
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
                <p className="font-bold mt-8 text-xl">Go to <span className="text-green-500"><Link to='/dashboard'>Dashboard</Link></span></p>
            </div>
        </div>
    );
};

export default Home;

