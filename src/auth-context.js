import React, { createContext, useState, useEffect } from "react";
import api from "./resources/api";

const AuthContext = createContext({});

const AuthProvider = (props) => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoggedIn(localStorage.getItem('token'));
        setLoading(false);
    }, []);

    const login = (user) => {
        api.post('user/login', user).then(res => {
            if(res.status === 200) {
                setLoggedIn(true);
                localStorage.setItem('token', res.data.token)
            }
        })
    };

    const logout = () => {
        setLoggedIn(false);
        localStorage.removeItem('token')
    };

    const authContextValue = {
        login,
        loading,
        loggedIn,
        logout
    };

    return <AuthContext.Provider value={authContextValue} {...props} />;
};

const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };