const MinusCounter = ({minusHandler}) => {
    return (
        <button onClick={minusHandler} className="btn btn-secondary">
            Minus
        </button>
    );
};

export default MinusCounter;
