// // import { useState } from "react";
// import Counter from "./components/Counter";
// import { useSelector } from "react-redux"; //bu react redux kutubhonasidan  chaqirilgan hook bu useselector statelarni qaytaradi

// const App = () => {
//     // const [count, setCount] = useState(0);
//     // const plusHandler = () => {
//     //     setCount((prev) => prev + 1);
//     // };
//     // const minusHandler = () => {
//     //     setCount((prev) => prev - 1);
//     // };
//     // const resetHandler = () => {
//     //     setCount(0);
//     // };
//     //plusHandler, minusHandler, resetHandler funksylar endi reducers papkadagi count.js fileda redux toolkidni createSlice reducer funksiya yaseydigan metodi bilan yozib qo'yildi yani asosiy app fileda funksiya kameydi va bu funskyalar tashqariga chaqirilda va user kirib bu funkiyalarga click qilganda endi bu funksiylar app.jsx filedan boshqa filelarga props bilan borob qayta qayta render boa'l,asdan bittada asosiy count.js dan kelib ishlayveradi shunda bu holatdagiga o'hshab boshqa boshqa componentlar aro porops bo'lib yurmasdan saytni qatomasdan ishlashiga hizmat qiladi

//     const state = useSelector(state => state.count);//react-reduxni useselector hooki boshlang'ich qiymatlarni olib beradi birinchi parametri stateni qabul qiladi shu stateni qayerdan qabul qilishni qayerdan biladi???? UseSelector bilan holatni olish Redux storedan kerakli malumotlarni qanday chiqarishni biladigan selektor funksiyasini yozishni o'z ichiga oladi . Bu funktsiya useSelector hookining yuragi bo'lib, komponent har safar eng so'nggi holatni taqdim etish uchun ishlatiladi yani statedan biladi yani state bu holatda parametr//yani count bu holatda reducers papkadagi countSlice.js filedagi createSlice bilan yaratilgan countSlice nomli funksiyani ichidagi reducer funksiyani nomi va bu count nomli reducer funksiyaga 0 boshlang'ich qiymat qilib berilgan//useSelectorni statega qo'li yetishini sababi asosiy index.jsdagi providerni qiymati sabab yani providerga store qiymat qilib berilgan bu storeda esa redux toolkidni  yani configlar bor shu configlar sabab biladi
//     console.log(state);

//     return (
//         <div className="container text-white">
//             <h1>Counter: {state} </h1>
//state yani o'zgargan holat yoki default holat
// yani appga faqat h1da counter texti bilan state chaqirib qo'yildi yani endi stateda useselector sabab countSliseda yozilgan funksiyalar state bo'lib keladi object bo'lib keladi

//             <Counter />
//         </div>
//     );
// };

// export default App;

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
////yuqoridagi darsni commentsiz holati
import Counter from "./components/Counter";
import { useSelector } from "react-redux";

const App = () => {
    const state = useSelector((state) => state.count);
    console.log(state);

    return (
        <div className="container text-white">
            <h1>Counter: {state} </h1>

            <Counter />
        </div>
    );
};

export default App;
