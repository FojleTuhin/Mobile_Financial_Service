import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import logo from "../assets/Untitled design.png"


const Home = () => {
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
                <p className="font-bold mt-8 text-xl">Go to <span className="text-green-500"><Link>dashboard</Link></span></p>
            </div>
        </div>
    );
};

export default Home;

