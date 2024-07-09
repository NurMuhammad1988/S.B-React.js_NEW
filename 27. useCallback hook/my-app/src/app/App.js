////26. useEffect hook
import { useState } from "react";
import "./App.css";
const User = () => {
    const [counter, setCount] = useState(0);

    const onIncrement = () => setCount((prevState) => prevState + 1);

    return (
        <div className="w-75 mx-auto ">
            <div className="border p-3 mt-3">
                <h1></h1>
                <button className="btns">{counter}</button>
                <div className="d-flex justify-content-center">
                    <button
                        className="btn btn-success w-25"
                        onClick={onIncrement}
                    >
                        +
                    </button>
                </div>
            </div>
        </div>
    );
};

const App = () => {
    return (
        <div>
            <User firstName="Nur" lastName="Yorov" link="youtube.com" />
        </div>
    );
};

export default App;
