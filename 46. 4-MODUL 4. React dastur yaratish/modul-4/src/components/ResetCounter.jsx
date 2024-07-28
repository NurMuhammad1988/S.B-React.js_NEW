const ResetCounter = ({resetHandler}) => {
    return (
        <button onClick={resetHandler} className="btn btn-danger">
            Reset
        </button>
    );
};

export default ResetCounter;
