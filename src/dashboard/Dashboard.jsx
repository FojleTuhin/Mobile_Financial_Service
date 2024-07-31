import { Link, Outlet } from "react-router-dom";



const Dashboard = () => {


    return (
        <div className="bg-[#EBFBE5] min-h-screen">




            <div>
                <div className="flex justify-end px-5 py-5 lg:px-[100px]">
                    <Link to='/home'>
                        <button className="btn border bg-green-500 text-white font-bold">
                            Home
                        </button>
                    </Link>
                </div>
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Dashboard;