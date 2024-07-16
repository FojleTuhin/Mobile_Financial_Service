import { useState } from "react";
import { FaPhoneFlip } from "react-icons/fa6";
import { MdEmail, MdOutlineDriveFileRenameOutline, MdOutlineFiberPin } from "react-icons/md";
import { Link } from "react-router-dom";

const Register = () => {

    const [error, setError] = useState('')

    const handleSubmit=(e)=>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const number = e.target.number.value;
        const pin = e.target.pin.value;
        if(!/^\d{5}$/.test(pin)){
            setError('Password must be 5 digit')
            return 
        }


        const newAccount={
            name,
            email,
            number,
            pin
        }
        setError('')

        console.log(newAccount);


    }
    return (
        <div className="flex items-center justify-center min-h-screen p-5">
            <div className="md:w-[30%] w-full shadow-lg p-5">

                <div>

                    <div className="flex flex-col items-center">
                        <p className="font-bold text-xl text-center ">Register now</p>
                        <hr className="mb-5 border-2 border-green-500 w-[50%] " />
                    </div>

                    <form onSubmit={handleSubmit}>

                        <p className="text-gray-500">Name</p>
                        <div className="flex gap-5 items-center">
                            <MdOutlineDriveFileRenameOutline className="text-green-500" />
                            <input className="p-3 border-b-2  border-green-500 w-full" name="name" type="text" placeholder="Enter your Name" required/>
                        </div>


                        <p className="text-gray-500 mt-8">Email</p>
                        <div className="flex gap-5 items-center">
                            <MdEmail className="text-green-500" />
                            <input className="p-3 border-b-2  border-green-500 w-full" name="email" type="email" placeholder="Enter your Email" required/>
                        </div>



                        <p className="text-gray-500 mt-8">ACCOUNT NUMBER</p>
                        <div className="flex gap-5 items-center">
                            <FaPhoneFlip className="text-green-500" /><input className="p-3 border-b-2  border-green-500 w-full" type="text" name="number" placeholder="Enter your account number" required/>
                        </div>

                        <p className="text-gray-500 mt-8">MFS PIN</p>
                        <div className="flex gap-5 items-center">
                            <MdOutlineFiberPin className="text-green-500" /><input className="p-3 border-b-2 border-green-500 w-full" type="password" placeholder="Enter MFS PIN" name="pin"  required/>
                        </div>

                        <br />

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