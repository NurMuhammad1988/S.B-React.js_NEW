////29. useRef hook
import { useRef, useState } from "react";
import "./App.css";

const User = () => {
    const [cardNumber, setCardNumber] = useState("");
    const [cvcNumber, setCvcNumber] = useState("");


    const cvcRef = useRef(null); //null doim boshlang'ich qiymat hissoblanadi???<<Agar argumentsiz chaqirilsa, qaytarilgan objekt bo'ladi//yani cvcRef o'zgaruvchiga useRef funksiyasi chaqirildi useRef object hissoblanadi
    const dataRef = useRef(null); 

    const handleInput = (e) => {
        const val = e.target.value;
        setCardNumber(val);
        if (val.length === 16) {
            cvcRef.current.focus();
        }
        // console.log(val.length);
    };


   const handleInputCvc = (e) => {
        const val = e.target.value;
        setCvcNumber(val);
        if (val.length === 3) {
            dataRef.current.focus();
        }
    }

    return (
        <div className="w-75 mx-auto mt-5 ">
            <div className="border p-3 mt-3">
                <input
                    type="number"
                    className="form-control"
                    placeholder="Card number"
                    onChange={handleInput}
                    value={cardNumber}
                />

                {/* handleInput, cardNumber boshqarib bo'ladigan forma qilish uchun      */}

                <input
                    ref={cvcRef}
                    type="number"
                    className="form-control mt-2"
                    placeholder="Secure number"
                    onChange={handleInputCvc}
                    value={cvcNumber}


                />

                {/* reactda har bir jsx elementda ref nomli atrubut bor bu atribut sabab u bilan ref o'zgaruvchini unga o'tkazish va keyin ushbu elementga kirish mumkin/////yani ref atributi bilan aynan shu inputni havolasini useRef objecti bor cvcRef o'zgaruvchiga jo'natish yani ulab qo'yish shunda aynan shu inputda nimadur sodir bo'lganda umga hodisa ilish mumkun??? */}

                <input
                    ref={dataRef}
                    type="number"
                    className="form-control mt-2"
                    placeholder="Year / Month"
                />

            </div>
        </div>
    );
};

const App = () => {
    return <User firstName="Nur" lastName="Yorov" link="youtube.com" />;
};

export default App;
