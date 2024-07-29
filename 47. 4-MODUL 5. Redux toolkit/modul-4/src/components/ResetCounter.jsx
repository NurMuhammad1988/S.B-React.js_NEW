import { useDispatch } from "react-redux";
import { resetCounterSlice } from "../reducers/countSlice";


const ResetCounter = () => {

    const dispatch = useDispatch()

    return (
        <button className="btn btn-danger" onClick={() => dispatch(resetCounterSlice())}>
            Reset
        </button>
    );
};

export default ResetCounter;
