import { createContext, useEffect, useReducer } from "react";

const initialState = {
    user: null,
};

const StateContext = createContext();

const contextReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return { ...state, ...action.payload };
        case "LOGOUT":
            return { ...state, user: null };
        default:
            return state;
    }
};

export const StateProvider = ({ children }) => {
    const [state, dispatch] = useReducer(contextReducer, initialState);

    //* for initial state after refresh or new enter
    useEffect(() => {
        const state = window.localStorage.getItem("state");
        if (state) {
            dispatch({ type: "LOGIN", payload: JSON.parse(state) });
        }
    }, []);


    return <StateContext.Provider value={{ state, dispatch }}>{children}</StateContext.Provider>;
};

export default StateContext;
