import { createContext, useReducer } from "react";

const initialValue = {
    //initialValue yani boshlang'ich qiymat//
    data: [],
    term: "",
    filter: "all",
};

export const Context = createContext();

const reducer = (state = initialValue, action) => {
    const { type, payLoad } = action;

    switch (type) {
        case"GET_DATA":
        return {...state, data: payLoad}
        case "ON_DELETE":
            const deleteArr = state.data.filter((c) => c.id !== payLoad);
            return { ...state, data: deleteArr };

        default:
            return { state };
    }
};

const Provider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer,initialValue) 

    return <Context.Provider value={{state,dispatch}}>{children}</Context.Provider>;
};

export default Provider;
