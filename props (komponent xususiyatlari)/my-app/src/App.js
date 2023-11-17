// //properts

// const User = (props) => {
//     console.log(props);
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

// Disruption

const User = ({ firstName, lastName, link }) => {
    //agar malumotlar ko'p bo'lsa tashqarida props bilan qilingan maqul lekin 5 10 tagacha shu holatda disturubsatsa qilingani yahshi
    return (
        <div
            style={{ backgroundColor: "black", margin: "20px", color: "wheat" }}
        >
            <h1>
                Mening ismim - {firstName.name} ,sharifim - {lastName()}
            </h1>
            <a href={link}>Youtube kanalim</a>
        </div>
    );
};

const App = () => {
    return (
        <div>
            <User
                firstName={{ name: "Nur" }}
                lastName={() => "Yorov"} //last name bu joyd funksiya (manashuni ichiga yozilmadi chunku bu qavusni ichida hech narsa ko'rinmaganbilan aslida ichida default holatida return bo'ladi ) //yani agar kerak bo'lsa bu joyda lasnameham firstnameham  funksiya qilib yozilib jsxda manabunday holatda {lastName ()} chaqirilib ishlatiladi (jsx codlarga qaralsin)
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
