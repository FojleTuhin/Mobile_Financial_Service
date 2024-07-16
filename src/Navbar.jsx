import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  
    const navigate = useNavigate();


    const handleLogout = async () => {
        localStorage.removeItem('access-token');
        navigate('/');

    }
    return (
        <div>
            <button onClick={handleLogout} className="btn border-green-500 border-2 px-10 py-2 rounded-full " >Logout</button>
        </div>
    );
};

export default Navbar;