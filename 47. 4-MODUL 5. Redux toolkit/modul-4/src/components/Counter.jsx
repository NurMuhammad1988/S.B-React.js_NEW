import MinusCounter from "./MinusCounter";
import PlusCounter from "./PlusCounter";
import ResetCounter from "./ResetCounter";

const Counter = () => {
    return (
        <div className="btn-group">
            <PlusCounter />
            <MinusCounter />
            <ResetCounter />
        </div>
    );
};

export default Counter;
