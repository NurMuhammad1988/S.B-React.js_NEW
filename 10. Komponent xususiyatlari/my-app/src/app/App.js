// // Props (propertiesni qisqartrilgani)
// import "./App.css";
// const User = (props) => {
//     // console.log(props);//propertiesni qisqartrilgani props //props bo'sh object hissoblanadi shu asbab bu User componenti App fileda chaqirilganda bu objectga qiymat berish mumkun yani hohlagancha qiymat berib qayta qayta ishlatish mumkun chunki props bo'sh object qaytaradi uni Appda chaqiriganda objectga qiymatlar beriladi//bu uchun props component o'zgaruvchini parametrida chaqirilgan bo'lishi kerak
//     return (
//         <div>
//             {/* <h1>Mening ismim - Nur, sharifim - Yorov</h1> <<<props ishlatilmagan holati// pastda props ishlatilgan holati */}
//             <h1>
//                 Mening ismim - {props.firsName}, sharifim - {props.lastName}
//             </h1>

//             {/* <a href="youtube.com">Youtube kanalim</a> props bilan linklardaham ishlash mumkun yani User Appda yokida boshqa joydaham import qilib chaqirib ishlaganda linkka jingalak qavus bilan chaqirilganda ishlayveradi*/}
//             <a href={props.link}>Youtube kanalim</a>
//         </div>
//     );
// };

// const App = () => {
//     return (
//         <div>
//             <User firsName="Nur" lastName="Yorov" link="youtube.com" />
//             <User firsName="Firdavs" lastName="Yorov" link="youtube.com" />
//             <User firsName="Doston" lastName="Yorov" link="youtube.com" />
//             {/* yani yuqoridagi User componentni qayta qayta ishlatish mumkun har hil datalar bilan yangi malumotlar bilan va har doim componentga shunday child ochilganda stylelari bir hil bo'ladi  */}
//         </div>
//     );
// };
// export default App;
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ////DISTRUPTATSA propsni distruptatsa bilan ishlatish agar App fileda chaqiriladigan componentni hususiyatlari juda ko'payib ketsa Userni parametriga (props)ni yozib ishlagan maqul lekin uch to'rtta qiymat beriladigan bo'lsa distruptatsa bilan ishlagan maqul pastdagiday
// ////component App jsda chaqirilganda object qilish
// import "./App.css";
// const User = ({firsName, lastName, link}) => {
//     // console.log(props);//propertiesni qisqartrilgani props //props bo'sh object hissoblanadi shu sabab bu User componenti App fileda chaqirilganda bu objectga qiymat berish mumkun yani hohlagancha qiymat berib qayta qayta ishlatish mumkun chunki props bo'sh object qaytaradi uni Appda chaqiriganda objectga qiymatlar beriladi//bu uchun props component o'zgaruvchini parametrida chaqirilgan bo'lishi kerak
//     return (
//         <div>

//             <h1>
//               {/* jsxni ichida object chaqirish mumkun emas faqat massiv chaqirish mumkun lekin bu holatda Appni ichida chaqiriletgan User componentlar object hissoblanadi shu sabab firstName.name deb yozish kerak bu holatda name Appda chaqirilgan Userni firstName qiymatida name nomli object bor yozilish sintaksizi {{}} ikkita jingalak qavus chunki  bu returnni ichi esa jsx file hissoblanadi yani js bilan htmlni birlashtirilgani>>>(JavaScript XML) (lekin pastdagi link objectga olinmadi etibor berilmasin!!!)*/}
//                 Mening ismim - {firsName.name}, sharifim - {lastName}
//             </h1>

//             {/* <a href="youtube.com">Youtube kanalim</a> props bilan linklardaham ishlash mumkun yani User Appda yokida boshqa joydaham import qilib chaqirib ishlaganda linkka jingalak qavus bilan chaqirilganda ishlayveradi*/}
//             <a href={link}>Youtube kanalim</a>
//         </div>
//     );
// };

// const App = () => {
//     return (
//         <div>
//           {/* {{name: "Nur"}} bu object hissoblanadi yani {{}} ikkita component chaqirilganda hususiyatlari ikkita jingalak qavusni ichida chaqirilsa demak bu object hissoblanadi  */}
//             <User firsName={{name: "Nur"}} lastname={{lastName: "Yorov"}} link="youtube.com" />
//             <User firsName={{name: "Firdavs"}} lastname={{lastName: "Yorov"}} link="youtube.com" />
//             <User firsName={{name: "Doston"}} lastname={{lastName: "Yorov"}} link="youtube.com" />
//             {/* yani yuqoridagi User componentni qayta qayta ishlatish mumkun har hil datalar bilan yangi malumotlar bilan va har doim componentga shunday child ochilganda stylelari bir hil bo'ladi  */}
//         </div>
//     );
// };
// export default App;
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//PROPSLARGA yani App jsga chaqiriladigan componentlar ichiga funksiyalar berish (callback)
import "./App.css";
const User = ({ firstName, lastName, link }) => {
    return (
        <div>
            <h1>
                Mening ismim - {firstName()}, sharifim - {lastName()}
            </h1>

            <a href={link}>Youtube kanalim</a>
        </div>
    );
};

const App = () => {
    return (
        <div>
            {/* firstName va lastNamelar callback funksiya bilan yozildi App fileni ichiga COMPONENTNI CHILDLARI CHAQIRILGANDA ICHIGA FUNKSIYALARHAM YOZISH MUMKUN bu holatda jsx filelarga firstName va lastNamelarni object ekanligini ()yozib aytish kerak >>>{firstName()},{lastName()}  */}

            <User
                firstName={() => "Nur"}
                lastName={() => "Yorov"}
                link="youtube.com"
            />
            <User
                firstName={() => "Firdavs"}
                lastName={() => "Yorov"}
                link="youtube.com"
            />
            <User
                firstName={() => "Doston"}
                lastName={() => "Yorov"}
                link="youtube.com"
            />
        </div>
    );
};

export default App;


