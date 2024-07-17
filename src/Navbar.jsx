import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './provider/Provider';

const Navbar = () => {
  
    const navigate = useNavigate();
    const {logout, user} = useContext(AuthContext);



    const handleLogout = async () => {
        logout();
        navigate('/');

    }
    return (
        <div>
           {
            user &&  <button onClick={handleLogout} className="btn border-green-500 border-2 px-10 py-2 rounded-full " >Logout</button>
           }
        </div>
    );
};

export default Navbar;