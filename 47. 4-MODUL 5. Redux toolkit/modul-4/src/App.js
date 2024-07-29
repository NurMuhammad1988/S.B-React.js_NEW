import { useState } from "react";
import Counter from "./components/Counter";

// Redux toolkit 05:33 minutda qoldi

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

    //plusHandler, minusHandler, resetHandler funksylar endi reducers papkadagi count.js fileda redux toolkidni createSlice reducer funksiya yaseydigan metodi bilan yozib qo'yildi yani asosiy app fileda funksiya kameydi va bu funskyalar tashqariga chaqirilda va user kirib bu funkiyalarga click qilganda endi bu funksiylar app.jsx filedan boshqa filelarga props bilan borob qayta qayta render boa'l,asdan bittada asosiy count.js dan kelib ishlayveradi shunda bu holatdagiga o'hshab boshqa boshqa componentlar aro porops bo'lib yhurmasdan saytni qatomasdan ishlashiga hizmat qiladi

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
