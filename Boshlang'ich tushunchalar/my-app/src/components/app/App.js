import "./App.css";
//qatttiy rejim yani StrictModeni alohida componenetda ishlatish
import { StrictMode } from "react";
import Header from "../header/Header";
import { Field } from "../filed/Field";
import Button from "../button/Button";
// const Header = () => {
//     //component doim bosh harfi katta hariflar bilan yoziladi

//     const getText = (text) => {
//         //bu component emas bu funcsiya shu uchun bosh harfi mayda harif bilan yozilgan
//         return (
//             <div>
//                 <h1>Hello {text}</h1>
//                 <p>
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                     Culpa, numquam ipsum. Ipsa earum praesentium labore,
//                     possimus a rem corporis libero!
//                 </p>
//             </div>
//         );
//     };

//     return <div className="green">{getText("Nur")}</div>;
// };

// const Field = () => {
//     const placeholder = "Typing...";
//     return (
//         <div>
//             <input type="text" placeholder={placeholder} />
//         </div>
//     );
// };

// const Button = () => {
//     const user = false;
//     const login = "login";
//     return (
//         <div>
//             <button>{user ? "logout" : login}</button>
//             {/* {user ? "logout" : login} terminalni operator */}
//         </div>
//     );
// };

function App() {
    return (
        <div className="App">
            {/* yani bu yerda StrictMode bilan Header component o'rab olindi endi stric mod agar dasturchi hohlasa faqat shu Header papkada ishlaydi */}
            <StrictMode>
                <Header />
            </StrictMode>

            <Field />
            <Button />
            {/* <Header /> */}
            {/* <Header /> */}
            {/* <Header /> */}
            {/* bu joyda qaysi component birinchichaqirilsa o'sha brawserda birinchi ko'rinadi */}
        </div>
    );
}

export default App;
