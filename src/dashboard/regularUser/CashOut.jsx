import { useState } from "react";
import useUserRole from "../../hooks/useUserRole";
import useAxiosPublic from "../../hooks/UseAxiosPublic";
import { useNavigate } from "react-router-dom";

const CashOut = () => {

    const [userRole, refetch] = useUserRole();

    const [error, setError] = useState('')
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleCashOut = (e) => {
        e.preventDefault();
        const sender = userRole.number;
        const receiver = e.target.number.value;
        let money = e.target.money.value;
        money = parseInt(money);

        money = (money / 100) * 1.5 + money;



        if (money > userRole.balance) {
            setError('Insufficient balance');
            return
        }
        setError('');


        const password = e.target.password.value;
        const cashOut = {
            sender,
            receiver,
            money,
            password
        }


        console.log(cashOut);

        axiosPublic.post('/cashOut', cashOut)
            .then(data => {
                console.log(data);
                if(data.status === 200){
                    navigate('/dashboard')
                    refetch();
                }
            })
            .catch(err=>{
                console.log(err.response.data.message);

                setError(err.response.data.message)
            })

        e.target.reset();

    }
    return (
        <div className="md:w-[30%] w-full shadow-lg p-5 mx-auto">



            <form onSubmit={handleCashOut}>
                <p>Enter number</p>
                <input type="text" name="number" id="number" required placeholder="Enter number" className="w-full px-5 py-2" />

                <hr />

                <p className="mt-2">Amount</p>

                <input type="text" name="money" placeholder="0" required className="w-full py-10 text-center text-xl" />

                <p className="text-center mt-4 mb-4"><span className="text-gray-600">Available Balance:</span> {userRole.balance}</p>




                <input type="password" name="password" required placeholder="Enter your password" className="w-full px-5 py-2 mt-2" />
                <br />
                <p className="text-red-500 mt-5 text-center">{error}</p>
                <button type="submit" className="w-full btn mt-5 bg-green-500 text-white font-bold text-xl">Proceed</button>

            </form>
        </div>
    );
};

export default CashOut;