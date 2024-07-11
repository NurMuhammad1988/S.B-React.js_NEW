import { useEffect, useState } from "react";
import "./counter-item.css";

const CounterItem = ({ counterCenerate }) => {
    const [item, setItem] = useState([]); //bu holatda item massiv o'zgaruvchi hissoblanadi //bo'sh massiv qaytaradi deb aytib qo'yildi>>[]
    ////counterCenerateni boshlang'ich qiymati bo'sh katak yani bo'sh massiv agar useStatega []bo'sh massiv useEffectsiz qo'yilganda bosh massiv map qilingan bo'lardi shu sabab useEffect yozildi endi massiv bo'sh bo'maydi yani massivdagi elementlar map qilinadi yani intrigatsa

    useEffect(() => {
        const newItem = counterCenerate(); //useEffect hook functionini ichida newItem nomli o'zgaruvchi taratib unga app.jsdan keletgan counterCenerate funksiyasi teng qilib qo'yildi yani bu holatda newItem o'z ichiga counterCenerate funksiyani yani ichiuda Array va fill sabab massivlari bor funksyani o'ziga nusxalab oladi
        setItem(newItem); //va Array(arrayda counter o'zgaruvchini qiymatlari masssiv bo'lib tushadi) va fillni natijalarini o'zida nusxalab olgan newItemni set qilish uchun useState ikkinchi parametriga chaqirib olindi
        console.log("Render");
    }, [counterCenerate]); //yani app.jsdan keletgan ichida Array va fill sabab massivlari bor counterCenerateni dependesesga qo'yildi chunki useEffect shu counterCeneratega qaram bo'lishi kerak    ///////////////////yani qachonki counterCenerate ishga tushganda useeffect ishga tushadi
    ////yani qachonki counterCenerate ishga tushganda yani bo'sh massiv yaratganda mapdan intrigatsa bo'lgan yangi itemni olib (counterCeneratedan) setItemga qo'ygin deyildi setItemda esa map bo'lgandagi elementlar bo'ladi yani bo'sh massivga tushadi va map ul li da map qilinib stylelar bilan qo'yildi

    return (
        <div className="text-white">
            <h1>Counter Items</h1>

            <ul>
                {item.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default CounterItem;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////countlar 8 dan boshlanishi uchun
// import { useEffect, useState } from "react";
// import "./counter-item.css";

// const CounterItem = ({ counterCenerate }) => {
//     const [item, setItem] = useState([]);

//     useEffect(() => {
//         const newItem = counterCenerate(8);
//         setItem(newItem);
//         console.log("Render");
//     }, [counterCenerate]);

//     return (
//         <div className="text-white">
//             <h1>Counter Items</h1>

//             <ul>
//                 {item.map((item) => (
//                     <li key={item}>{item}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default CounterItem;
