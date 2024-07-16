import { MdOutlineFiberPin } from "react-icons/md";
import logo from "../src/assets/Untitled design.png"
import { FaPhoneFlip } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Login = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="md:w-[30%] w-full shadow-lg p-5">
                <div className="flex  items-center flex-col">
                    <img className="w-[100px]" src={logo} alt="" />
                    <p className="font-bold text-2xl">Welcome</p>
                </div>
                <div>

                    <p className="font-bold text-xl">Log In</p>
                    <p className="text-xl mb-8">to your MFS account</p>

                    <form>
                        <p className="text-gray-500">ACCOUNT NUMBER</p>
                        <div className="flex gap-5 items-center">
                            <FaPhoneFlip className="text-green-500" /><input className="p-3 border-b-2  border-green-500 w-full" type="text" placeholder="Enter your account number" />
                        </div>

                        <p className="text-gray-500 mt-8">MFS PIN</p>
                        <div className="flex gap-5 items-center">
                            <MdOutlineFiberPin className="text-green-500" /><input className="p-3 border-b-2 border-green-500 w-full" type="text" placeholder="Enter MFS PIN" name="" id="" />
                        </div>

                        <br />

                        <div className="flex justify-center">
                            <button className="btn border-green-500 border-2 px-10 py-2 rounded-full " type="submit">LOGIN</button>
                        </div>
                        <div className="text-center mt-5">
                            <p>Not registered yet?</p>
                            <Link to='/register'><p className="font-bold">Open new account</p></Link>
                        </div>

                    </form>



                </div>

            </div>
        </div>
    );
};

export default Login;