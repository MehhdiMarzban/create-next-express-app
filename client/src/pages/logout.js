import { useRouter } from "next/router";
import { useStateContext } from "../custom-hooks/useStateContext";
import { useEffect } from "react";
const LogoutPage = () => {
    const router = useRouter();
    const [state, dispatch] = useStateContext();

    useEffect(() => {
        fetch("api/logout");
        dispatch({ type: "LOGOUT", payload: {user: null} });
        router.replace("/");
    }, []);

    return (
        <>
            <p>logging out ...</p>
        </>
    );
};

export default LogoutPage;
