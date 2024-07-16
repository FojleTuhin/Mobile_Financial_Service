import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";

const Root = () => {
    const location = useLocation()
    const isLogin = location.pathname.includes('/login') || location.pathname.includes('/register')
    return (
        <div>
           {isLogin ||  <Navbar></Navbar>}
            <Outlet></Outlet>
        </div>
    );
};

export default Root;