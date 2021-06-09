import React, { useState, useContext, useEffect } from "react";
import API from "../utils/API";
import { useAuth } from "../components/authentication/context/AuthContext";

const UserContext = React.createContext();

export function useUser() {
    return useContext(UserContext);
}

export function UserProvider({ children }) {
    const { currentUser } = useAuth();
    const [user, setUser] = useState({});

    const getUser = async () => {
        try {
            const userRes = await API.getUser(currentUser.uid);
            setUser(userRes.data || {});
        } catch (error) {
            //User hasn't been saved before
        }
    };

    const upsertUser = async ({ bookGoal, pageGoal, currentBook }) => {
        const updatedUser = await API.upsertUser({
            userId: currentUser.uid,
            bookGoal: bookGoal || user.bookGoal,
            pageGoal: pageGoal || user.pageGoal,
            currentBook: currentBook || user.currentBook
        });
        setUser(updatedUser.data || {});
    };

    useEffect(() => {
        const load = async () => {
            await getUser();
        }
        load();
    }, []);

    return (
        <UserContext.Provider value={{
            getUser,
            upsertUser,
            user
        }} >
            {children}
        </UserContext.Provider>
    );
}

export default UserContext;