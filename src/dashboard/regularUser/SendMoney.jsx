
const SendMoney = () => {

    const handleSendMoney = (e) =>{
        e.preventDefault();
        

    }
    return (
        <div>
            i am from send Money


            <form onSubmit={handleSendMoney}>
                <input type="text" name="number" id="number" placeholder="Enter number"/>

                <hr />

                <p>Amount</p>

                <input type="number" name="money" placeholder="0" />

                <p>Available Balance: </p>




                <input type="password" name="password" />
                <br />
                <button type="submit">Proceed</button>

            </form>
        </div>
    );
};

export default SendMoney;