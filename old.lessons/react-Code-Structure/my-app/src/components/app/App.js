import "./App.css";
import Header from "../header/Header";
import Buti from "../buti/Buti";
import Field from "../field/Field";

function App() {
    return (
        <div className="App">
            <Header />
            <Field />
            <Buti />
        </div>
    );
}
export default App;













////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Companents = 1
// const Header = () => {
//     // const text = "Hello1 Nur";
//     //getText kichkina harf yani bu component emas bu oddiy funksiya agar component bo'lsa boshi katta harf bilan yoziladi
//     const getText = (text) => {
//         return (
//             <div>
//                 <h1>Hello {text}</h1>
//                 <p>
//                     Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                     Ratione, voluptas! Sapiente nobis facilis ipsa rerum quaerat
//                     officia molestiae excepturi expedita!
//                 </p>
//             </div>
//         );
//     };

//     return <div>{getText("Nur")}</div>;//textni shu joyga chaqirishxam mumkun edi
// };

//Companents = 2
// const Field = () => {
//     const placeholder = "Typing...";
//     const typeInput = "text";
//     return <input type={typeInput} placeholder={placeholder} />;
// };

//Companents = 3
// const Buti = () => {
//     const user = true; //false bo'lsa login, true bo'lsa logout
//     const login = "login";

//     return <button>{user ? "logout" : login}</button>; //yani terminalni operatorni reactda yozilishi
// };
