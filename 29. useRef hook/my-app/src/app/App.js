////29. useRef hook yani userefga ulangan dom elemtni ssilkasini oladi ref atributi bilan yani bitta o'zgaruvchiga dom elemntini (reactda) atribut orqali solib qo'yish//yani component render bo'lganda useRef render bo'lmaydi yani agar component  render bo'lganda useStatelarham o'zgaradi lekin useRef o'zgarmaydi
// import { useState, useRef } from "react";
// import "./App.css";

// const User = () => {
//     const [cardNumber, setCardNumber] = useState(" "); //default holat bo'sh string
//     const [cvcNumber, setCvcNumber] = useState(" "); //default holat bo'sh string
//     ////yani usestate array qaytaradi birinchi parametr cardnumber ikkinchi parametr esa shu cardnumberni set qiladigan use stateni ikkinchi parametri yani usestateni objecti usestateni set objectini birinchi partametri ""bo'sh

//     const cvcRef = useRef(null); //Agar argumentsiz chaqirilsa, qaytarilgan objekt bo'ladi//yani cvcRef o'zgaruvchiga useRef funksiyasi chaqirildi useRef object hissoblanadi
//     const dateRef = useRef(null);

//     const handleInput = (e) => {
//         const val = e.target.value; //yani val nomli o'zgaruvchiga eventni yani hodisani ovoldik  va cardNumber o'zgaruvchida kelgan cardNumber o'zgaruvchini o'zgartiradigan setCardNumberga val o'zgaruvchini ovoldik va ichida event bor(val)setCardNumber o'zgaruvchiga agar cvcRef o'zgaruvchini uzunligi 16ga teng bo'lsa cvcRefni foucus metodi bilan o'zidan keyingi inputga focusni qaratdi yani inputga yozilgann raqamlar 16 ta bo'lgandan keyin foucus pastga qarab tushdi yani useRef()bilan jsxga ref atributi orqali jsxni linkini olib, focus() bilan unga qanchadur qiymat(16) yoki harakat sodir bo'lganda holatni yani focusni boshqa joyga qaratish
//         ////yani (asosiy hulosa) cardNumber qiymatli inputni ichidagi qiyam 16ga teng bo'lganda focusni cvcRef linkiga qarat yani cvcRef linki bor inputga qarat
//         setCardNumber(val);
//         if (val.length === 16) {
//             cvcRef.current.focus();//yani agar valni qiymati 16ga teng bo'lsa focusni cvcrefni currentiga qarat currentni qiymati esa null chunki hali hech narsa yozilmagan
//         }
//         // console.log(val.length);
//         // console.log(dataRef);
//     };

//     const handleInputDate = (e) => {
//         const val = e.target.value;
//         setCvcNumber(val);
//         if (val.length === 3) {
//             dateRef.current.focus();
//         }

//         // console.log(dataRef);
//     };

//     ////COMPONENT ISHGA TUSHGANDA YANI RENDER BO'LGANDA useRef o'zgarmaydi useRefni asosiy vazifasi jsx elemntni havolasi bilan ishlash

//     return (
//         <div className="w-75 mx-auto mt-5 ">
//             <div className="border p-3 mt-3">
//                 <input
//                     type="number"
//                     className="form-control"
//                     placeholder="Card number"
//                     onChange={handleInput}
//                     // onchange yani shu inputni holati o'zgarganda qaysi holati valuedagi holati yani cardNumber o'zgaruvchi o'zgargandagi holati
//                     value={cardNumber}
//                 />

//                 {/* handleInput, cardNumber boshqarib bo'ladigan forma qilish uchun      */}

//                 <input
//                     ref={cvcRef}
//                     type="number"
//                     className="form-control mt-2"
//                     placeholder="Secure number"
//                     onChange={handleInputDate}
//                     value={cvcNumber}
//                 />

//                 {/*/////////// reactda har bir jsx elementda ref nomli atrubut bor bu atribut sabab u bilan ref o'zgaruvchini unga o'tkazish va keyin ushbu elementga kirish mumkin/////yani ref atributi bilan aynan shu inputni havolasini useRef objecti bor cvcRef o'zgaruvchiga jo'natish yani ulab qo'yish shunda aynan shu inputda nimadur sodir bo'lganda umga hodisa ilish mumkun??? /////////////
//                 componentda useState sichqonchani siljitish hodisasi uchun tez yangilanmasligi mumkin, shuning uchun useRef dan foydalangan maqul, chunki u "o'zgaruvchan" va komponentning render aylanishiga bog'liq emas  /////////////
//                 Shuni ta'kidlash kerakki, useState() komponent holatini yangilash va qayta ko'rsatishni ishga tushirish uchun kerak bo'ladi, useRef() esa qayta ko'rinishga olib kelmaydigan qiymatga o'zgaruvchan havolani saqlash kerak bo'lganda ishlatilishi kerak. */}

//                 <input
//                     ref={dateRef}
//                     type="number"
//                     className="form-control mt-2"
//                     placeholder="Year / Month"
//                 />
//             </div>
//         </div>
//     );
// };

// const App = () => {
//     return <User />;
// };

// export default App;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { useState, useRef } from "react";
import "./App.css";
const User = () => {
    const [cardNumber, setCardNumber] = useState(" ");
    const cvcRef = useRef(null);
    const handleInput = (e) => {
        const val = e.target.value;
        setCardNumber(val);
        if (val.length === 16) {
            cvcRef.current.focus();
        }
    };
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
                <input
                    ref={cvcRef}
                    type="number"
                    className="form-control mt-2"
                    placeholder="Secure number"
                />
            </div>
        </div>
    );
};
////yani bu holatdad cardNumber nomli default holati bo'sh string bo'lgan state yaratib uni setCardNumber nomli useStae qaytaradigan funksiya bilan ishlashni aytdik va cvcRef nomli yangi o;zgaruvchi yaratib unga useRef hookini chaqirdik useRefni parametrida doim null bo'ladi sababi bu nulga yangi qiymatlar tushadi va shunda null holatidan chiqadi va bo'sh hissoblangan cardNumber o'zgaruvchini birinchi inputga value atributi bilan chaqirdik shunda endi birinchi inputga setCardNumberni qiymati tushadi yani bo'sh qiymat va ikkinchi inputga esa ref atributi bilan cvcRef o'zgaruvchida chaqirilgan useRef hookini chaqirdik va birinchi inputga handleInput nomli funskyani onchange bo'lganda ishlashi uchun chaqirdik va handleInput funksiyasida eventniparametrda chaqirib val nomli o'zgaruvchiga eventni ovoldik va buvalni yani eventi setCardNumberfunksiyaga argument qilib chaqirdik va agar valni yani val o'zgaruvchiga chaqirilgan eventni uzunligi 16 bo'lsa ikkinchi inputda ref atributi bilan chaqirilgan cvcRefga focusni qarat deyildi bunga sabab ref atributi yani handleInput funsksiyasi bilan ikkinchi inputni bu holatda ref atributi ulab berepti va handleInput funsksiyasi esa if else bilan valni qiymati 16ga yetganda focusni cvcRefga qaratishni aytepti shunda birinchi inputni uzunligi 16ga yetganda handleInput funskiyasi foucusni pastdagi linki chaqirilgan inputga qaratadi
const App = () => {
    return <User />;
};

export default App;
