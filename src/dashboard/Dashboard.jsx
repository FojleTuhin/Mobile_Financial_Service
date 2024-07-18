import { Outlet } from "react-router-dom";



const Dashboard = () => {


    return (
        <div className="bg-[#EBFBE5] min-h-screen">

         
            <div className="">
                <div>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;