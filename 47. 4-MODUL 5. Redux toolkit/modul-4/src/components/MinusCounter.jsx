import { useDispatch } from "react-redux";
import { minusCounterSlice } from "../reducers/countSlice";


const MinusCounter = () => {

    const dispatch = useDispatch()

    return (
        <button className="btn btn-secondary" onClick={() => dispatch(minusCounterSlice())}>
            Minus
        </button>
    );
};

export default MinusCounter;
