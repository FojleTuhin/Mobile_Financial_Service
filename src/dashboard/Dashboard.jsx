import { useContext } from "react";
import { AuthContext } from "../provider/Provider";
import useUserRole from "../hooks/useUserRole";

const Dashboard = () => {

    const [userRole] = useUserRole();
    return (
        <div >

        </div>
    );
};

export default Dashboard;