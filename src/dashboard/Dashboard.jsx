import { Outlet } from "react-router-dom";



const Dashboard = () => {


    return (
        <div className="bg-[#EBFBE5] min-h-screen">

            <div>
                <div className="flex justify-end px-5 py-5 lg:px-[100px]">
                   
                </div>
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Dashboard;