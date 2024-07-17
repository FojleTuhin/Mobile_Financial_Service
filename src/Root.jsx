import { Outlet } from "react-router-dom";


const Root = () => {

    return (
        <div className="bg-[#EBFBE5] min-h-screen">
           
            <Outlet></Outlet>
        </div>
    );
};

export default Root;