import { useNavigate } from "react-router-dom";

const Home = () => {


    const navigate = useNavigate();


    const handleLogout = async () => {
        localStorage.removeItem('access-token');
        navigate('/');

    }
    return (
        <div>

            <button onClick={handleLogout} className="btn">Logout</button>
        </div>
    );
};

export default Home;