import { MdOutlineFiberPin } from "react-icons/md";
import logo from "../src/assets/logo.png"
import { FaPhoneFlip } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import useAxiosPublic from "./hooks/UseAxiosPublic";
import Swal from "sweetalert2";
import { useContext, useState } from "react";
import { AuthContext } from "./provider/Provider";
import useUserRole from "./hooks/useUserRole";
const Login = () => {

    const [error, setError] = useState('')
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const { user, saveUser } = useContext(AuthContext);






    const handleSubmit = (e) => {
        e.preventDefault();

        const number = e.target.number.value;
        const pin = e.target.pin.value;
        if (!/^\d{5}$/.test(pin)) {
            setError("Password must be 5 digit");
            return
        }



        const newAccount = {

            number,
            pin
        }
        setError('');


        console.log(newAccount);
        axiosPublic.post('login', newAccount)
            .then(data => {
                console.log(data);
                if (data.status === 200) {
                    navigate('/home')
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Log in Successfull",
                        showConfirmButton: false,
                        timer: 1500
                    });



                }
                else {
                    // setError('Password or number dont match');
                    // setError(data.response.data.message);
                    console.log('something wrong');
                }

                axiosPublic.post('/jwt', number)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token);
                            localStorage.setItem('user', JSON.stringify(newAccount));
                            saveUser(newAccount);
                        }
                    })


            })

            .catch(error => {
                // setError(error.response.data.message);
                console.log(error);
            });








    }








    return (
        <div className="flex items-center justify-center min-h-screen ">
            <div className="md:w-[30%] w-full shadow-lg p-5 bg-white">
                <div className="flex  items-center flex-col">
                    <img className="w-[100px]" src={logo} alt="" />
                    <p className="font-bold text-2xl">Welcome</p>
                </div>
                <div>

                    <p className="font-bold text-xl">Log In</p>
                    <p className="text-xl mb-8">to your MFS account</p>

                    <form onSubmit={handleSubmit}>
                        <p className="text-gray-500">ACCOUNT NUMBER</p>
                        <div className="flex gap-5 items-center">
                            <FaPhoneFlip className="text-green-500" />
                            <input className="p-3 border-b-2  border-green-500 w-full" required type="text" name="number" placeholder="Enter your account number" />
                        </div>

                        <p className="text-gray-500 mt-8">MFS PIN</p>
                        <div className="flex gap-5 items-center">
                            <MdOutlineFiberPin className="text-green-500" />
                            <input className="p-3 border-b-2 border-green-500 w-full" required type="password" placeholder="Enter MFS PIN" name="pin" />
                        </div>

                        <br />
                        <p className="mb-2 text-red-500 text-center">{error}</p>

                        <div className="flex justify-center">
                            {

                                <button className="btn border-green-500 border-2 px-10 py-2 rounded-full " type="submit">LOGIN</button>


                            }
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