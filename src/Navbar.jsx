import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './provider/Provider';

const Navbar = () => {
  
    const navigate = useNavigate();
    const {setUser} = useContext(AuthContext);



    const handleLogout = async () => {
        localStorage.removeItem('access-token');
        localStorage.removeItem('user');
        navigate('/');
        setUser(null)

    }
    return (
        <div>
            <button onClick={handleLogout} className="btn border-green-500 border-2 px-10 py-2 rounded-full " >Logout</button>
        </div>
    );
};

export default Navbar;