import "../styles/globals.css";
import PublicLayout from "../layout/PublicLayout";
function MyApp({ Component, pageProps }) {
    return (
        <PublicLayout>
            <Component {...pageProps} />
        </PublicLayout>
    );
}

export default MyApp;
