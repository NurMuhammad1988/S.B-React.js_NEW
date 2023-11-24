import "./App.css";

// //properts
// const User = (props) => {
//     console.log(props);//propslar object ko'rinishida chiqadi
//     return (
//         <div
//             style={{ backgroundColor: "black", margin: "20px", color: "wheat" }}
//         >
//             <h1>
//                 Mening ismim - {props.firstName} ,sharifim - {props.lastName}{" "}
//             </h1>
//             <a href={props.link}>Ijtimoiy tarmog'i</a>
//         </div>
//     );
// };

// const App = () => {
//     return (
//         <div>
//             <User firstName="Nur" lastName="Yorov" link="https://youtube.com" />

//             <User
//                 firstName="Firdavs"
//                 lastName="Yorov"
//                 link="https://facebook.com"
//             />

//             <User
//                 firstName="Muso"
//                 lastName="Yorov"
//                 link="https://twitter  .com"
//             />
//         </div>
//     );
// };

// export default App;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//// Disruption

const User = ({ firstName, lastName, link }) => {
    //agar malumotlar ko'p bo'lsa tashqarida props bilan qilingan maqul lekin 5 10 tagacha shu holatda disturubsatsa qilingani yahshi
    return (
        <div className="propss1"
           
        >
            {/*  style={{ backgroundColor: "black", margin: "20px", color: "wheat" }} divga htmlni o'zida style berish */}
            <h1>
                Mening ismim - {firstName.name} ,sharifim - {lastName()}
                {/*jsxni ichiga object berib bo'lmaydi yani bu joyda firstname object bu objectni o'qitish uchun manabunday yoziladi =>{firstName.name} va manabunday qilib chaqiriladi =>{lastName()} yani bu joyda last name funcsiya hissoblanadi*/}
            </h1>
            <a href={link}>Youtube kanalim</a>
        </div>
    );
};

const App = () => {
    return (
        <div className="propss2">
            <User
                firstName={{ name: "Nur" }}
                lastName={() => "Yorov"} //last name bu joyda funksiya (manashuni ichiga yozilmadi chunku bu qavusni ichida hech narsa ko'rinmagani bilan aslida ichida default holatida return bo'ladi ) //yani agar kerak bo'lsa bu joyda lastnameham firstnameham  funksiya qilib yozilib jsxda manabunday holatda {lastName ()} chaqirilib ishlatiladi (jsx codlarga qaralsin)
                link="https://youtube.com"
            />

            <User
                firstName={{ name: "Firdavs" }}
                lastName={() => "Yorov"}
                link="https://facebook.com"
            />

            <User
                firstName={{ name: "Muso" }}
                lastName={() => "Yorov"}
                link="https://twitter.com"
            />
        </div>
    );
};

export default App;
