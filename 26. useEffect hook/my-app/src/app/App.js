////26. useEffect hook
import { useState, useEffect } from "react";
import "./App.css";
const User = ({ firstName, lastName, link }) => {
    const [counter, setCount] = useState(0);
    const [isLogin, setIslogin] = useState(false);

    const clickHandlerPlus = () => {
        setCount((prevCounter) => prevCounter + 1);
    };
    const clickHandlerMinus = () => {
        setCount((prevCounter) => prevCounter - 1);
    };
    const clickHandlerRestart = () => {
        setCount(0);
    };
    const onToggleLogin = () => {
        setIslogin((prevState) => !prevState);
    };

    ////useEffect hooki yani function  ikkita parametr qabul qiladi birinchi parametr effekt callback yani user saytga kirib nimadur harakat qilganda nimadur qilish kerak bo'lsa shuni qiladi ikkinchisi deps(dependeses) yani qaramlik saytda nima o'zgarganda useeffect ishga tushsin degan buyruq
    // useEffect(() => {
    //     console.log("Effect");
    //     document.title = `Counter: ${counter}`; //htmldagi titleni o'rniga counter o'zgaruvchini qiymatini qo'yildi
    // });////reactda useEffect funksiyasi function componentlarda ishlaydi va class componentlardagi componentDidMount va componentDidUpdate funksiyalarini vazifasini bir o'zi bajaradi

    useEffect(() => {
        console.log("Effect");
        document.title = `Counter: ${counter}`
    }, [isLogin])//yani bu holatda useeffectni ikkinchi parametriga faqat islogin ishlaganda hodisani ushlab qol boshqa joyda hodisalarga teginma deyildi yani useeffect functionni ikkinchi parametri deps(dependeses) aynan nima ishlatish kerak bo'lsa o'shani qabul qiladi//yani counter useeffectda chaqirilgan bo'lsaham ckicklarda hech narsani ushlab qolamadi


    return (
        <div className="w-75 mx-auto ">
            <div className="border p-3 mt-3">
                <h1>
                    Mening ismim - {firstName}, sharifim - {lastName},
                </h1>
                <a href={link}>Youtube kanalim</a>
                <button className="btns">{counter}</button>
                <div className="d-flex justify-content-center">
                    <button
                        className="btn btn-success w-25"
                        onClick={clickHandlerPlus}
                    >
                        +
                    </button>
                    <button
                        className="btn btn-danger w-25 mx-2"
                        onClick={clickHandlerMinus}
                    >
                        -
                    </button>
                </div>

                <div className="d-flex justify-content-center">
                    <button
                        className="btn btn-outline-danger w-25 mt-2"
                        onClick={clickHandlerRestart}
                    >
                        Restart
                    </button>
                </div>

                <div className="d-flex justify-content-center">
                    {isLogin ? (
                        <button className=" btn btn-outline-light w-25 mt-2">
                            LOGIN
                        </button>
                    ) : null}

                    <button
                        onClick={onToggleLogin}
                        className="btn btn-outline-primary w-25 mt-2 mx-2"
                    >
                        TOGGLE
                    </button>
                </div>

                <div className="d-flex justify-content-center m-2"></div>
            </div>
        </div>
    );
};

const App = () => {
    const [isDisplay, setIsDisplay] = useState(true);
    const deleteDisplayHnadler = () => {
        setIsDisplay(false);
    };
    return (
        <div>
            <div className="w-100 d-flex justify-content-center ">
                <button
                    className="btn btn-danger mx-3 w-25 mt-3"
                    onClick={deleteDisplayHnadler}
                >
                    Display
                </button>
            </div>
            {isDisplay && (
                <User firstName="Nur" lastName="Yorov" link="youtube.com" />
            )}
            {/* appni ichidagi componentgaham alohida appni o'zida hodisa ilish */}
        </div>
    );
};

export default App;
