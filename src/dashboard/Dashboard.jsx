import { useContext } from "react";
import { AuthContext } from "../provider/Provider";

const Dashboard = () => {

    const {user} = useContext(AuthContext);
    console.log(user);
    return (
        
        <div className="text-center">
            i am from Dashboard for {user?.number}
        </div>
    );
};

export default Dashboard;