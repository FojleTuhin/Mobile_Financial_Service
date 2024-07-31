import useUserRole from "../../hooks/useUserRole";

const SendMoney = () => {

    const [userRole] = useUserRole();

    const handleSendMoney = (e) =>{
        e.preventDefault();
        

    }
    return (
        <div className="md:w-[30%] w-full shadow-lg p-5 mx-auto">
            


            <form onSubmit={handleSendMoney}>
                <p>Enter number</p>
                <input type="text" name="number" id="number" placeholder="Enter number" className="w-full"/>

                <hr />

                <p>Amount</p>

                <input type="number" name="money" placeholder="0" className="w-full"/>

                <p>Available Balance: {userRole.balance}</p>




                <input type="password" name="password" className="w-full"/>
                <br />
                <button type="submit" className="w-full">Proceed</button>

            </form>
        </div>
    );
};

export default SendMoney;