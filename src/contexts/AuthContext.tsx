import React, { createContext, useContext, useEffect } from "react";
import { User } from "../Services/authService";

interface AuthContextProps {
    authenticated: boolean;
    user: User;
    login: (user: User) => void;
    logout: () => void;
    isLoading: boolean;
};

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC = ({ children }) => {
    const [authenticated, setAuthenticated] = React.useState(false);
    const [user, setUser] = React.useState({} as User);
    const [isLoading, setIsLoading] = React.useState(true);

useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
        setUser(JSON.parse(storedUser));
        setAuthenticated(true);
    }
    setIsLoading(false);
}, []);

const login =  (loggedinUser: User) => {
    setUser(loggedinUser);
    setAuthenticated(true);
    localStorage.setItem("user", JSON.stringify(loggedinUser));
};

const logout = () => {
    setUser({} as User);
    setAuthenticated(false);
    localStorage.removeItem("user");
};

    return (
        <AuthContext.Provider value={{ authenticated, user, login, logout, isLoading }}>
            {children}
        </AuthContext.Provider>
    );

}