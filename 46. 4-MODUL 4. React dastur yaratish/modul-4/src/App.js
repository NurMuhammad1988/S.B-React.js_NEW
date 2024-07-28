import { useState } from "react";
import Counter from "./components/Counter";

// uchta funksiya appda yozildi va props orqali Counter componentga jo'natildi va Counterdan yana boshqa uchta componentga yana props bilan jo'natildi bu real loyihalarda propsilar componentlar judaham ko'payib ketganda loyihani sekin ishlashiga sabab bo'ladi shu sabab Redux ishlatiladi Redux kutubhona hissoblanadi npm qilib yuklab olinadi package.json fileda turadi

const App = () => {
    const [count, setCount] = useState(0);

    const plusHandler = () => {
        setCount((prev) => prev + 1);
    };

    const minusHandler = () => {
        setCount((prev) => prev - 1);
    };

    const resetHandler = () => {
        setCount(0);
    };

    return (
        <div className="container text-white">
            <h1>Counter: {count}</h1>

            <Counter
                plusHandler={plusHandler}
                minusHandler={minusHandler}
                resetHandler={resetHandler}
            />
        </div>
    );
};

export default App;
