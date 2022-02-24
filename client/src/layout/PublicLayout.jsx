import {StateProvider} from "../context/index";
const PublicLayout = ({children}) => {
    return <>
        <StateProvider>
            {children}
        </StateProvider>
    </>
}

export default PublicLayout;