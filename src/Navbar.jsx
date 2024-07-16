import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  
    const navigate = useNavigate();


    const handleLogout = async () => {
        localStorage.removeItem('access-token');
        navigate('/login');

    }
    return (
        <div>
            <button onClick={handleLogout} className="btn">Logout</button>
        </div>
    );
};

export default Navbar;