import { useState } from "react";
import useUserRole from "../../hooks/useUserRole";

const SendMoney = () => {

    const [userRole] = useUserRole();

    const [error, setError] = useState('')

    const handleSendMoney = (e) => {
        e.preventDefault();
        const number = e.target.number.value;
        let money = e.target.money.value;
        money = parseInt(money);





        if(money <50){
            setError('Minimum transection 50 tk')
            return
        }
        setError('');

        if (money > 100) {
            money += 5;
        }

        if (money > userRole.balance) {
            setError('Insufficient balance');
            return
        }
        setError('');


        const password = e.target.password.value;
        const sendMoney = {
            number,
            money,
            password
        }


        console.log(sendMoney);

    }
    return (
        <div className="md:w-[30%] w-full shadow-lg p-5 mx-auto">



            <form onSubmit={handleSendMoney}>
                <p>Enter number</p>
                <input type="text" name="number" id="number" placeholder="Enter number" className="w-full px-5 py-2" />

                <hr />

                <p>Amount</p>

                <input type="text" name="money" placeholder="00000" className="w-full px-32 py-10" />

                <p className="text-center mt-2"><span className="text-gray-600">Available Balance:</span> {userRole.balance}</p>




                <input type="password" name="password" placeholder="Enter your password" className="w-full px-5 py-2 mt-2" />
                <br />
                <p className="text-red-500 mt-5 text-center">{error}</p>
                <button type="submit" className="w-full btn mt-10 bg-green-500 text-white font-bold text-xl">Proceed</button>

            </form>
        </div>
    );
};

export default SendMoney;