import { useContext, useState } from "react";
import { FaPhoneFlip } from "react-icons/fa6";
import { MdEmail, MdOutlineDriveFileRenameOutline, MdOutlineFiberPin } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import useAxiosPublic from "./hooks/UseAxiosPublic";
import Swal from "sweetalert2";
import { AuthContext } from "./provider/Provider";

const Register = () => {

    const [error, setError] = useState('');
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const { saveUser } = useContext(AuthContext);
    



    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const number = e.target.number.value;
        const role = e.target.role.value;
        const pin = e.target.pin.value;

        if (!/^\d{5}$/.test(pin)) {
            setError('Password must be 5 digit')
            return
        }

        const status = 'pending';



        const newAccount = {
            name,
            email,
            number,
            pin,
            role,
            status
        }
        setError('');
        console.log(newAccount);


        axiosPublic.post('/user', newAccount)
            .then(data => {
                console.log(data);
                setError(data.data.message);
                if (data.data.insertedId) {
                    navigate('/home');


                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Sign Up Successfull",
                        showConfirmButton: false,
                        timer: 1500
                    });
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

        setError('');











    }
    return (
        <div className="flex items-center justify-center min-h-screen p-5 ">
            <div className="md:w-[30%] w-full shadow-lg p-5 bg-white">

                <div>

                    <div className="flex flex-col items-center">
                        <p className="font-bold text-xl text-center ">Register now</p>
                        <hr className="mb-5 border-2 border-green-500 w-[50%] " />
                    </div>

                    <form onSubmit={handleSubmit}>

                        <p className="text-gray-500">Name</p>
                        <div className="flex gap-5 items-center">
                            <MdOutlineDriveFileRenameOutline className="text-green-500" />
                            <input className="p-3 border-b-2  border-green-500 w-full" name="name" type="text" placeholder="Enter your Name" required />
                        </div>


                        <p className="text-gray-500 mt-8">Email</p>
                        <div className="flex gap-5 items-center">
                            <MdEmail className="text-green-500" />
                            <input className="p-3 border-b-2  border-green-500 w-full" name="email" type="email" placeholder="Enter your Email" required />
                        </div>



                        <p className="text-gray-500 mt-8">ACCOUNT NUMBER</p>
                        <div className="flex gap-5 items-center">
                            <FaPhoneFlip className="text-green-500" /><input className="p-3 border-b-2  border-green-500 w-full" type="text" name="number" placeholder="Enter your account number" required />
                        </div>

                        <p className="text-gray-500 mt-8">MFS PIN</p>
                        <div className="flex gap-5 items-center">
                            <MdOutlineFiberPin className="text-green-500" /><input className="p-3 border-b-2 border-green-500 w-full" type="password" placeholder="Enter MFS PIN" name="pin" required />
                        </div>

                        <br />

                        <div className="flex items-center gap-5 mb-12">
                            <p className="text-gray-500">ROLE</p>
                            <select name="role" className="p-2 border-b-2 border-green-500">
                                <option >Regular User</option>
                                <option >Agent</option>

                            </select>

                        </div>


                        <p className="mb-2 text-red-500 text-center">{error}</p>

                        <div className="flex justify-center">
                            <button className="btn border-green-500 border-2 px-10 py-2 rounded-full " type="submit">REGISTER</button>
                        </div>
                        <div className="text-center mt-5">
                            <p> registered yet?</p>
                            <Link to='/'><p className="font-bold">LOGIN</p></Link>
                        </div>

                    </form>



                </div>

            </div>
        </div>
    );
};

export default Register;