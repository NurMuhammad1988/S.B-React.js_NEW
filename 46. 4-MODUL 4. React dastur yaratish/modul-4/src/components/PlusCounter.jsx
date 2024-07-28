const plusCounter = ({ plusHandler }) => {
    return (
        <button onClick={plusHandler} className="btn btn-success">
            Plus
        </button>
    );
};

export default plusCounter;
