import Head from "next/head";
import { useRouter } from "next/router";
import { useStateContext } from "../custom-hooks/useStateContext";
import configAxios from "../services/configAxios";
export default function Home() {
    //* with this line can access to states and after update state automatically save in local storage
    const [state, dispatch] = useStateContext();

    const router = useRouter();
    const handleLogout = () => {
        router.replace("/logout");
    }

    const handleLogin = async () => {
        const {data} = await configAxios.postMethod("/api/login", { email: "user@gmail.com", password: "user1234" });
        console.log(data);
        
        await dispatch({type: "LOGIN", payload: {user: data.data}});
    };
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <button onClick={handleLogin}>login</button>
            <button onClick={handleLogout}>logout</button>
            {state && state.user && <p>name: {state.user.name}</p>}
        </div>
    );
}
