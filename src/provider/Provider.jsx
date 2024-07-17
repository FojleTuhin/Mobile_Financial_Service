import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null)

const Provider = ({ children }) => {

    const [user, setUser] = useState(null);



    useEffect(() => {
        // Retrieve user from localStorage when the component mounts
        const userJSON = localStorage.getItem('user');
        if (userJSON) {
          const userData = JSON.parse(userJSON);
          setUser(userData);
        }
      }, []);


    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export default Provider;