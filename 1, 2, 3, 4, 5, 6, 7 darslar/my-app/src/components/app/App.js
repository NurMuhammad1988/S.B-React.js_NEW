import "./App.css";
import Header from "../header/Header"; //import qilishni birinchi yo'li faqatgina bitta componentni import qiladi
import { Field } from "../field/Field"; //import qilishni ikkinchi yo'li jingalak qavusni ichiga bitta faildan bir nechta componentni yoki funksiyalarni import qiladi
import Button from "../button/Button"; //agar chaqirilgan component faqat bitta componentni o'zidan iborat bo'lsa importni shu yo'lidan foydalangan maqul
// import { StrictMode } from "react"; //qattiy rejimni alohida componentda ishlatish  <StrictMode> <Header/> </StrictMode>

function App() {
    return (
        <div className="App">
            {/* <StrictMode> qattiy rejimni faqat bitta componentga ishlatish */}
            <Header />
            {/* </StrictMode> qattiy rejimni faqat bitta componentga ishlatish */}
            <Field />
            <Button />
        </div>
    );
}

export default App;
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
// import "./App.css";

// const Header = () => {
//     //react component reactda componentni bosh harfi doim katta hariflar bilan yozilishi kerak
//     const textx = "Hello React-1";
//     // return <h1>{text}</h1>; //returni ichiga jsx yoziladi
//     const getText = (text) => {
//         //boshi kichkina harifligi component emas componentni ichidagi oddiy funksiya ekanligini bildiradi
//         return (
//             <div>
//                 <h1>Hello React-2 {text}</h1>
//                 <p>
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                     Veritatis aspernatur, incidunt non quam eum fuga facilis
//                     repudiandae dolores dolor voluptatum!
//                 </p>
//             </div>
//         );
//     };
//     return <div>{getText(textx)}</div>;
// };

// const Field = () => {
//     const placeholder = "Typing....................";
//     const typeInput = "text";
//     // return <input type="text" placeholder="Typing..." />;
//     return <input type={typeInput} placeholder={placeholder} />;
// };

// const Button = () => {
//     const user = true;
//     const login = "login";
//     // return <button>Click</button>;
//     return <button>{user ? "logout" : login}</button>; //yani terminalni operator if elsni qisqartirib ishlatish lekin jsxni ichiga if elsni jsda yozganday yozib bo'meydi shu qisqartirilgan sintaksizsdan foydalansa bo'ladi//agar user true bo'lsa logout yani saytdan chiqish yokida false bo'lsa yani saytga kirmagan bo'lsa login yani saytga kir
// };

// function App() {
//     return (
//         <div className="App">
//             <Header />
//             <Field />
//             <Button />
//         </div>
//     );
// }

// export default App;
