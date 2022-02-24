import { useEffect, useState } from "react";
import { useUserSession } from "../custom-hooks/useUserSession";

const DashboardPage = () => {
    const [user, setUser] = useState(null);
    useEffect(async () => {
        const [status, user] = await useUserSession();
        console.log(status, user)
        setUser(user);
    }, []);
    return (
        <>
            {user ? (
                <>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                    <p>{user.role[0]}</p>
                </>
            ) : (
                "loading ..."
            )}
        </>
    );
};

export default DashboardPage;
