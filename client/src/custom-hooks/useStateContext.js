import StateContext from "../context/index";
import {useContext} from "react";
export const useStateContext = () => {
    const {dispatch, state} = useContext(StateContext);
    const dispathAndSaveInLocalStorage = (object) => {
        dispatch(object);
        window.localStorage.setItem("state", JSON.stringify({...state, ...object.payload}));
    }
    return [state, dispathAndSaveInLocalStorage];
}

