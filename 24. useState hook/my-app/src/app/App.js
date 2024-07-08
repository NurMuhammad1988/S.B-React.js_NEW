// import { Component } from "react";
// import "./App.css";

// class User extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             counter: 10,
//             age: "",
//         };
//     }

//     clickHandlerPlus = () => {
//         this.setState((prevState) => ({
//             counter: prevState.counter + 1,
//         }));
//     };

//     clickHandlerMinus = () => {
//         this.setState((prevState) => ({
//             counter: prevState.counter - 1,
//         }));
//     };

//     clickHandlerRestart = () => {
//         this.setState(() => ({
//             counter: 0,
//         }));
//     };

//     ChangeHandler = (e) => {
//         this.setState({
//             age: e.target.value,
//         });
//     };

//     render() {
//         const { firstName, lastName, link } = this.props;
//         const { age, counter } = this.state;
//         return (
//             <div className="w-50 mx-auto ">
//                 <div className="border p-3 mt-5">
//                     <h1>
//                         Mening ismim - {firstName}, sharifim - {lastName},
//                         yoshim {age}
//                     </h1>

//                     <a className="text-decoration-none " href={link}>
//                         Youtube kanalim
//                     </a>

//                     <div className="mt-3">
//                         <button
//                             onClick={this.clickHandlerPlus}
//                             className="btn btn-success"
//                         >
//                             Increment
//                         </button>

//                         <button
//                             onClick={this.clickHandlerMinus}
//                             className="btn btn-danger mx-3"
//                         >
//                             Decrement
//                         </button>

//                         <button
//                             onClick={this.clickHandlerRestart}
//                             className="btn btn-info"
//                         >
//                             Restart
//                         </button>

//                         <p>{counter}</p>
//                     </div>

//                     <form>
//                         <span>Yoshingiz</span>

//                         <input
//                             type="number"
//                             className="form-control"
//                             onChange={this.ChangeHandler}
//                         />
//                     </form>
//                 </div>
//             </div>
//         );
//     }
// }

// const App = () => {
//     return (
//         <div>
//             <User firstName="Nur" lastName="Yorov" link="youtube.com" />
//             <User firstName="Firdavs" lastName="Yorov" link="youtube.com" />
//             <User firstName="Doston" lastName="Yorov" link="youtube.com" />
//         </div>
//     );
// };

// export default App;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//// useState hook
// import { useState } from "react";
// import "./App.css";
// const User = ({ firstName, lastName, link }) => {
//     const [counter, setCount] = useState(0); //useState function hissoblanadi shu sabab chaqirilishi kerak() functon componentlardagi useState hooki ikkita massiv qaytaradi massivdagi birinchi element undefind yani bo'sh bo'ladi ikkinchi element esa callback function (classdagi this.setstate desaham bo'ladi) bo'ladi masalan>>>const counter = useState(0)yani boshlang'ich qiymat yani undefind endi 0 ga teng bo'ladi
//     ////[counter, setCount] = useState(0)yani counter massiv o'zgaruvchi distruptatsa qilindi bu counter useStateni birinchi undefined hissoblangan elementi yani[0] ikkinchisi setCount esa seStateni ikkinchi elementi hissoblangan callback function yani[1] yani endi setState hookida keletgan ikkinchi element yani callback function bilan setState hookiga berilgan birinchi element yani counter massivini o'zgartrish uchun useState(0)bu holatdagi 0 qiymati useStateni 0 chi elementi yani undefind.
//     ////massivni birinchi elementi biz yozgan 0 qiymati ikkinchi element yani function birinchi qiymatni o'zgartiradigan hook function

//     ////ikkinchi massivga setCount deb yozilishini sababi dasturchilar bir birini loyihasini ko'rganda tushunish uchun masalan counterni qisaqa qilib count deyildi yani setCount shunda countniset qilish yani countni setStateda set qilish tushuniladi yani o'zgarish kerak bo'lgan qiymat bilab shuni o'zgartiradigan qiymatni nomi o'hshash bo'lsa loyihani boshqa dasturchiham ko'rganda tushunish oson bo'ladi masalan>>>const  [age, setAge] = useState(21);
//     //// console.log(counter);//setState hookida nima borligini ko'rish uchun yozildi
//     const [age, setAge] = useState(35);

//     const clickHandlerPlus = () => {
//         //class componentlardan funsction componentlarni yana bir farqi function componentlarda qiymatni o'zgartirish uchun har qanday funksiya ishlatiolaveradi masalan class componentlarda asosan callback yoki qo'lda yoziladigan metod functionlar bilan ishlanardi function componentda esa buni farqi yo'q emush//counter useStateni nolinchi qiymatni huddi class componentlardagiday to'g'ridan to'g'ri o'zgartirib bo'lmaydi o'zgartirish uchun function componentdaham alohida function bilan o'zgartirish kerak va jsx ichiga kerakli joyga functionni chaqirib qo'yish kerak

//         setCount(10);// setCount yani setStateni nolinchi qiymati hissoblangan counterni o'zgartirish uchun yaratilgan setCount birinchi qiymati bu holatda 10(default)

//         setCount(counter + 1); // setCount yani setStateni nolinchi qiymati hissoblangan counterni o'zgartirish uchun yaratilgan setCountni parametrida birinchi kerakli qiymat yani kerakli o'zgaruvchi keladi bu holatda counter chaqirilib + qo'yildi endi clickHandlerPlus funskiyasi jsxda onclick funskiyasi bilan chaqirilgan buttonga click qilinganda default qiymati 0 bo'lib turgan counterga pilus qo'shilib boraveradi clickHandlerMinus funksiyasiham huddi shu commentdagiday holat faqat click bo'lganda minusga ishlaydi clickHandlerRestart funskyasiham shu faqat click bo'lganda 0 qilib qo'yadi

//         setCount(prevState => prevState + 1);//bu oldingi holat uchun yani button tez bosilganda yoki qotib qolganda birortaham klickni o'tkizvormasdan hammasini saqlab qoladi prevState

//     };

//     const clickHandlerMinus = () => {
//         setCount(counter - 1);
//         setCount(prevState => prevState - 1)//bu oldingi holat uchun yani button tez bosilganda yoki qotib qolganda birortaham klickni o'tkizvormasdan hammasini saqlab qoladi prevState

//     };

//     const clickHandlerRestart = () => {
//         setCount(0);
//     };

//     return (
//         <div className="w-75 mx-auto ">
//             <div className="border p-3 mt-5">
//                 <h1>
//                     Mening ismim - {firstName}, sharifim - {lastName}, Yoshim -{" "}
//                     {age}
//                 </h1>

//                 <a href={link}>Youtube kanalim</a>
//                 <button className="btns">{counter}</button>
//                 <div className="d-flex justify-content-center">
//                     <button
//                         className="btn btn-success w-25"
//                         onClick={clickHandlerPlus}
//                     >
//                         +
//                     </button>
//                     <button
//                         className="btn btn-danger w-25 mx-2"
//                         onClick={clickHandlerMinus}
//                     >
//                         -
//                     </button>
//                 </div>

//                 <div className="d-flex justify-content-center">
//                     <button
//                         className="btn btn-outline-danger w-25 mt-2"
//                         onClick={clickHandlerRestart}
//                     >
//                         Restart
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// const App = () => {
//     return (
//         <div>
//             <User firstName="Nur" lastName="Yorov" link="youtube.com" />
//             <User firstName="Firdavs" lastName="Yorov" link="youtube.com" />
//         </div>
//     );
// };

// export default App;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
// import { useState } from "react";
// import "./App.css";
// const User = ({ firstName, lastName, link }) => {
//     const [counter, setCount] = useState(0);

//     const [age, setAge] = useState(35);

// const clickHandlerPlus = () => {
//     setCount((prevCounter) => prevCounter + 1); //yani bu holatda counterni oldingi holati ikki martta + 1 bilan chaqirilgani uchun har clickda ikkitdan qo'shiladi yani setCount bu holatda o'zidan oldingi holatga qareydi
//     setCount((prevCounter) => prevCounter + 1); //yani bu holatda counterni oldingi holati ikki martta + 1 bilan chaqirilgani uchun har clickda ikkitdan qo'shiladi yani setCount bu holatda o'zidan oldingi holatga qareydi  o'garuvchidagi oldingi holatlar muhum bo'ladigan holatlarda prevCounter qilib ishlash mumkun ???prevCounterdagi C harfi nima uchun katta harifda kelepti???
// };

//     const clickHandlerMinus = () => {
//         setCount((prevCounter) => prevCounter - 1); //yani bu holatda counterni oldingi holati ikki martta - 1 bilan chaqirilgani uchun har clickda ikkitdan ayriladi yani setCount bu holatda o'zidan oldingi holatga qareydi
//         setCount((prevCounter) => prevCounter - 1); //yani bu holatda counterni oldingi holati ikki martta - 1 bilan chaqirilgani uchun har clickda ikkitdan ayriladi yani setCount bu holatda o'zidan oldingi holatga qareydi  o'garuvchidagi oldingi holatlar muhum bo'ladigan holatlarda prevCounter qilib ishlash mumkun ???prevCounterdagi C harfi nima uchun katta harifda kelepti???
//     };

//     const clickHandlerRestart = () => {
//         setCount(0);
//     };

//     return (
//         <div className="w-75 mx-auto ">
//             <div className="border p-3 mt-5">
//                 <h1>
//                     Mening ismim - {firstName}, sharifim - {lastName}, Yoshim -{" "}
//                     {age}
//                 </h1>

//                 <a href={link}>Youtube kanalim</a>
//                 <button className="btns">{counter}</button>
//                 <div className="d-flex justify-content-center">
//                     <button
//                         className="btn btn-success w-25"
//                         onClick={clickHandlerPlus}
//                     >
//                         +
//                     </button>
//                     <button
//                         className="btn btn-danger w-25 mx-2"
//                         onClick={clickHandlerMinus}
//                     >
//                         -
//                     </button>
//                 </div>

//                 <div className="d-flex justify-content-center">
//                     <button
//                         className="btn btn-outline-danger w-25 mt-2"
//                         onClick={clickHandlerRestart}
//                     >
//                         Restart
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// const App = () => {
//     return (
//         <div>
//             <User firstName="Nur" lastName="Yorov" link="youtube.com" />
//             <User firstName="Firdavs" lastName="Yorov" link="youtube.com" />
//         </div>
//     );
// };

// export default App;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
// import { useState } from "react";
// import "./App.css";
// const User = ({ firstName, lastName, link }) => {
//     const [counter, setCount] = useState(0);
//     const [isLogin, setIslogin] = useState(false);

//     const clickHandlerPlus = () => {
//         setCount((prevCounter) => prevCounter + 1);
//         setCount((prevCounter) => prevCounter + 1); //???prevCounterdagi C harfi nima uchun katta harifda kelepti???
//     };

//     const clickHandlerMinus = () => {
//         setCount((prevCounter) => prevCounter - 1);
//         setCount((prevCounter) => prevCounter - 1); //???prevCounterdagi C harfi nima uchun katta harifda kelepti???
//     };

//     const clickHandlerRestart = () => {
//         setCount(0);
//     };

//     const onToggleLogin = () => {
//         ////setIslogin(!isLogin)//oldongi holatisiz yozilishi

//         setIslogin((prevState) => !prevState); //yani toggle texti bor buttonga onclick bo'lganda isloginni oldingi holati yani false holati bor bo'lsa udalit qil yo'q bo'lsa paydo qil//yani toggle texti bor buttonga click bo'lganda isLogin o'zgaruvchini useStatesidagi default holati false bo'lsa true qil true bo'lsa false qil>>>! va login buttonidaham if else ishlatildi agar islogin o'zgaruvchini setsatedagi default holati true bo'lsa login buttonini qo'sh false bo'lsa null qil deyildi//bu holatda ikkala button bir biriga bo'glab qo'yildi
//     };

//     return (
//         <div className="w-75 mx-auto ">
//             <div className="border p-3 mt-5">
//                 <h1>
//                     Mening ismim - {firstName}, sharifim - {lastName},
//                 </h1>
//                 <a href={link}>Youtube kanalim</a>
//                 <button className="btns">{counter}</button>
//                 <div className="d-flex justify-content-center">
//                     <button
//                         className="btn btn-success w-25"
//                         onClick={clickHandlerPlus}
//                     >
//                         +
//                     </button>
//                     <button
//                         className="btn btn-danger w-25 mx-2"
//                         onClick={clickHandlerMinus}
//                     >
//                         -
//                     </button>
//                 </div>

//                 <div className="d-flex justify-content-center">
//                     <button
//                         className="btn btn-outline-danger w-25 mt-2"
//                         onClick={clickHandlerRestart}
//                     >
//                         Restart
//                     </button>
//                 </div>

//                 <div className="d-flex justify-content-center">
//                     {isLogin ? (
//                         <button className=" btn btn-outline-light w-25 mt-2">
//                             LOGIN
//                         </button>
//                     ) : null}
//                     {/* if else reactda qisqartirib ? va : bilan yozilishi//// yani isLogin o'zgaruvchi true bo'lsa Login texti bor buttonni ko'rsat yoki null yani yo'q qilib qo'y bu holatda isLogin o'zgaruvchi yuqorida useStateda false holatda bo'lgani uchun LOGIN buttoni nul holatda agar  isLogin o'zgaruvchi true bo'lsa LOGGIN buttonni ekranda ko'rinadi  */}

//                     <button
//                         onClick={onToggleLogin}
//                         className="btn btn-outline-primary w-25 mt-2 mx-2"
//                     >
//                         TOGGLE
//                     </button>
//                 </div>

//                 <div className="d-flex justify-content-center m-2"></div>
//             </div>
//         </div>
//     );
// };

// const App = () => {
//     return (
//         <div>
//             <User firstName="Nur" lastName="Yorov" link="youtube.com" />
//             <User firstName="Firdavs" lastName="Yorov" link="youtube.com" />
//         </div>
//     );
// };

// export default App;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { useState } from "react";
import "./App.css";
const User = ({ firstName, lastName, link }) => {
    const [state, setState] = useState({
        counter: 0,//useState ichiga object yaratish
        isLogin: false,//useState ichiga object yaratish
    });

    console.log(state);//yani object yani useStatega ichingdagi narsalarni object ko'rinishiga ol deyildi//logdagi stateda  counter: 0, isLogin: false,<<bular bor yani state useStateni 0 chi elemntiga object{}bo'l deyildi

    const clickHandlerPlus = () => {
        // setState(prevState => ({counter:prevState.counter + 1}))//setStae yangi object qaytaradi//yani clickHandlerPlus funksiyaga clickHandlerPlus functonlik button click bo'lganda {ichida} counterni chaqirib prevState bilan oldingi holatiniham saqlab click qilinganda isLogin qiymati o'chib ketdi yani function componentda statega yani useStateni ichidagi objectlarni biriga vazifa berilsa boshqasigaham tasir qilib o'chib ketadi //lekin class coponentlarda bunday emas this kalit so'zi bilan aynan qaysi qiymatni o'zgartirish yoki hodisa qo'shish yokida udalit qilish kerak bo'lsa this qilib kerakli qiymatni nomi berilib aynan kerakli qiymatga tasir qilinadi

        setState(prevState => ({...prevState, counter:prevState.counter + 1}))//agar function componentda useStateda qiymatlar bir nechta bir nechta bo'lsa va bitta qiymatga ishlov berilsaham qolgan qiymatlarniham spread operator bilan qolgan qiymatlarniham oldingi default holatini bu yangi objectga nusxalab olish kerak bo'ladi ...prevState shunda huddiki class componentlardagi kabi faqat kerakli qiymatga tasir qilinadi shu sabab bunday holatda juda zarur bo'lmasa ishlash kerakmas
    };

    const clickHandlerMinus = () => {};//bu yerdaham jsxdaham bu functionlarga etibor berilmasin

    const clickHandlerRestart = () => {};//bu yerdaham jsxdaham bu functionlarga etibor berilmasin

    const onToggleLogin = () => {};//bu yerdaham jsxdaham bu functionlarga etibor berilmasin

    return (
        <div className="w-75 mx-auto ">
            <div className="border p-3 mt-5">
                <h1>
                    Mening ismim - {firstName}, sharifim - {lastName},
                </h1>
                <a href={link}>Youtube kanalim</a>
                <button className="btns">{state.counter}</button>
                {/* counter useStateni 0chi elementi state sabab object ekanligi uchun state.counter qilib chaqirildi */}
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
                    {state.isLogin ? (
                        <button className=" btn btn-outline-light w-25 mt-2">
                            LOGIN
                        </button>
                    ) : null}
                    {/* counter useStateni 0chi elementi state sabab object ekanligi uchun state.isLogin qilib chaqirildi //yani satae object ichida ikki qiymat  bor ikkalasiham object hissoblanadi yani 0 va 1 */}
                    {/* if else reactda qisqartirib ? va : bilan yozilishi//// yani isLogin o'zgaruvchi true bo'lsa Login texti bor buttonni ko'rsat yoki null yani yo'q qilib qo'y bu holatda isLogin o'zgaruvchi yuqorida useStateda false holatda bo'lgani uchun LOGIN buttoni nul holatda agar  isLogin o'zgaruvchi true bo'lsa LOGGIN buttonni ekranda ko'rinadi  */}

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
    return (
        <div>
            <User firstName="Nur" lastName="Yorov" link="youtube.com" />
            <User firstName="Firdavs" lastName="Yorov" link="youtube.com" />
        </div>
    );
};

export default App;
