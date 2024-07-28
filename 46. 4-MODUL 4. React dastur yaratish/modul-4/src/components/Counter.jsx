import MinusCounter from "./MinusCounter";
import PlusCounter from "./PlusCounter";
import ResetCounter from "./ResetCounter";

const Counter = ({ plusHandler, minusHandler, resetHandler }) => {
    return (
        <div className="btn-group">
            <PlusCounter plusHandler={plusHandler} />
            <MinusCounter minusHandler={minusHandler}/>
            <ResetCounter resetHandler={resetHandler}/>
        </div>
    );
};

export default Counter;
