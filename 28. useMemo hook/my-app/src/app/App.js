////28. useMemo hook
import { useState, useMemo } from "react";
import "./App.css";

const bigCountNumber = (number) => {
    console.log("Render"); //agar useMemo ishlatilmasa increase buttongaham toggle buttongaham bosilganda bu render consoli ishlayapti yani saytdagi yani ona component hissoblangan app.jsdagi hamma funksiya render bo'lib ketepti

    let i = 0;
    //        100 mellon       //lekin 1 milard qilsak useMemodaham baribir qotib ishladi
    while (i < 100000000) i++; //yani bu useMemosiz render bo'lguncha sayt qotib sekin ishlepti

    return number * 2;
};

28. useMemo hook darsini qaytadan commentlar bilan qil

const User = () => {
    const [counter, setCount] = useState(0);
    const [active, setActive] = useState(true);

    const onIncrement = () => setCount((prevState) => prevState + 1);

    const onToggle = () => setActive((prevState) => !prevState);
    //ontoggle funksiyasi chaqirilgan buttonga klik bo'lganda yani active o'zgaruvchini oldingi holati nima bo'lsa o'shani teskarisiga o'zgartiradi>>(!)

    const colors = {
        fontWeight: "bold",
        color: active ? "green" : "red",
        //yani agar active o'zgaruvchi true bo'lsa green qil yokida false bo'lsa red qil bu holatda red turadi chunki activeni default qiymati false bo'lib turipti
    };

    // const number = bigCountNumber(counter);//useMemosiz holatda

    const number = useMemo(() => bigCountNumber(counter), [counter]); //useMemo bilan ishlagan holatda yani useMemoham ikkita parametr qabul qiladi birinchisi funksiya ikkinchi useMemo kimga qaram bo'lishi yani dependeses yani usememo faqatgina counter o'zgargandagina ishga tushadi

    return (
        <div className="w-75 mx-auto mt-5 ">
            <div className="border p-3 mt-3">
                <button className="btns" style={colors}>
                    User activeted = {number}
                </button>

                <div className="d-flex justify-content-center">
                    <button
                        className="btn btn-success w-25"
                        onClick={onIncrement}
                    >
                        Increase
                    </button>

                    <button
                        className="btn btn-warning mx-3 w-25"
                        onClick={onToggle}
                    >
                        Toggle
                    </button>
                </div>
            </div>
        </div>
    );
};

const App = () => {
    return <User firstName="Nur" lastName="Yorov" link="youtube.com" />;
};

export default App;
