// ////26. useEffect hook
// import { useState } from "react";
// import "./App.css";
// import CounterItem from "../counter-item/counter-item";
// const User = () => {
//     const [counter, setCount] = useState(0);
//     const [active, setActive] = useState(false);

//     const onIncrement = () => setCount((prevState) => prevState + 1);

//     const onToggle = () => setActive((prevState) => !prevState);
//     //ontoggle funksiyasi chaqirilgan buttonga klik bo'lganda yani active o'zgaruvchini oldingi holati nima bo'lsa o'shani teskarisiga o'zgartiradi>>(!)

//     const counterCenerate = () => {//bu ishlash hato kerakmas funksiyalarham qayta qayta ishlayveradi masalan bu joyda serverdan malumotlar kelganda har safar funksiyalarni hammasi render bo'lib ketadi bu holat esa saytni sekin va qotib ishlashiga sabab bo'ladi shu sabab useCallbach hooki ishlatilishi kerak
//         return new Array(counter).fill("").map((_, idx) => `Counter number ${idx + 1}`)
//         //yani counterga yani setcounterni Array objectiga olib fill metodi qo'shildi bunda fil metodi har safar prevState + 1 sabab bosilganda yangi massiv yaratib beradi va bu mssiv map qilinib indexlariga interpalatsa bilan text qo'shib fil metodi har safar massiv qo'shganda massivga Counter number texti va idx + 1 qilib counterga qo'shiladigan qilib qo'yildi

//         //////fill() metodi massivdagi belgilangan elementlarni qiymat bilan to'ldiradi . fill() metodi asl massivni qayta yozadi. Boshlanish va tugatish pozitsiyasi belgilanishi mumkin. Aks holda, barcha elementlar to'ldiriladi (parametrda pozitsalar belgilanmagani ""bo'shligi sabab butun massivni to'ldirayapti) bu holatda esa ("") bo'sh katak qoldirildi nima uchun bo'sh katak ichiga dynamic tarzda qiymat joylashtirish uchun
//         //////
//         //////map metodini birinchi parametri kerak emasligini aytish uchun>>(_,)<<ladash va vergul qo'yiladi//JavaScriptda map() Array objektining metodi hisoblanadi U asl massivning har bir elementida funksiyani chaqirish va natijalarni yangi massivda saqlash orqali yangi massiv yaratadi. map() yangi massivni qaytaradi va asl massiv o'zgarmaydi parametridagi massivni yani yangi massivga nusxalaydi

//     }
//// console.log(counterCenerate());//bo'sh array keladi

//     const colors = {
//         fontWeight: "bold",
//         color: active ? "green" : "red",
//         //yani agar active o'zgaruvchi true bo'lsa green qil yokida false bo'lsa red qil bu holatda red turadi chunki activeni default qiymati false bo'lib turipti
//     };

//     return (
//         <div className="w-75 mx-auto mt-5 ">
//             <div className="border p-3 mt-3">
//                 <button className="btns" style={colors}>
//                     User activeted = {counter}
//                 </button>

//                 <div className="d-flex justify-content-center">
//                     <button
//                         className="btn btn-success w-25"
//                         onClick={onIncrement}
//                     >
//                         Increase
//                     </button>

//                     <button
//                         className="btn btn-warning mx-3 w-25"
//                         onClick={onToggle}
//                     >
//                         Toggle
//                     </button>
//                 </div>

//                 <div className="d-flex justify-content-center">
//                     <CounterItem counterCenerate={counterCenerate}/>
//                 </div>

//             </div>
//         </div>
//     );
// };

// const App = () => {
//     return <User firstName="Nur" lastName="Yorov" link="youtube.com" />;
// };

// export default App;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////26. useCallbackni hook ishlatish
import { useState, useCallback } from "react";
import "./App.css";
import CounterItem from "../counter-item/counter-item";
const User = () => {
    const [counter, setCount] = useState(0);
    const [active, setActive] = useState(true);

    const onIncrement = () => setCount((prevState) => prevState + 1);

    const onToggle = () => setActive((prevState) => !prevState);
    //ontoggle funksiyasi chaqirilgan buttonga klik bo'lganda yani active o'zgaruvchini oldingi holati nima bo'lsa o'shani teskarisiga o'zgartiradi>>(!)

    const counterCenerate = useCallback(() => {//useCallback birinchi parametrida funksiya ikkinchi parametrida qaramlikni qabul qiladi nimaga qaramlik??? useCallback faqat qaramligidagi [counter]uchun ishlaydi boshqa funksiyalarni emas faqat shu counterni render qiladi//keshlas!!!////yani bu holatda useCallbach bola componentga yani counter-item.jsga alohida yasaldi
        return new Array(counter).fill("").map((_, idx) => `Counter number ${idx + 1}`)
    }, [counter])//QARAMLIK (DEPS)//faqat useCallbach qaysi funksiya yoki o'zgaruvchiga qaram qilinsa faqat osha funksiya yoki o'zgaruvchi o'zgargandagina ishlaydi//shunda increase buttonniga click qilinganda faqat counter ishlab boshqa funksiyalar render bo'lmaydi
    // console.log(counterCenerate());//bo'sh array keladi

    const colors = {
        fontWeight: "bold",
        color: active ? "green" : "red",
        //yani agar active o'zgaruvchi true bo'lsa green qil yokida false bo'lsa red qil bu holatda red turadi chunki activeni default qiymati false bo'lib turipti
    };

    return (
        <div className="w-75 mx-auto mt-5 ">
            <div className="border p-3 mt-3">
                <button className="btns" style={colors}>
                    User activeted = {counter}
                </button>

                <div className="d-flex justify-content-center">
                    <button
                        className="btn btn-success w-25"
                        onClick={onIncrement}
                    >
                        Increase
                    </button>

                    <button
                        className="btn btn-warning mx-3 w-25"
                        onClick={onToggle}
                    >
                        Toggle
                    </button>
                </div>

                <div className="d-flex justify-content-center">
                    <CounterItem counterCenerate={counterCenerate}/>
                </div>

            </div>
        </div>
    );
};

const App = () => {
    return <User firstName="Nur" lastName="Yorov" link="youtube.com" />;
};

export default App;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ////countlar 8 dan boshlanishi uchun
// import { useState, useCallback } from "react";
// import "./App.css";
// import CounterItem from "../counter-item/counter-item";
// const User = () => {
//     const [counter, setCount] = useState(0);
//     const [active, setActive] = useState(true);

//     const onIncrement = () => setCount((prevState) => prevState + 1);

//     const onToggle = () => setActive((prevState) => !prevState);
//     //ontoggle funksiyasi chaqirilgan buttonga klik bo'lganda yani active o'zgaruvchini oldingi holati nima bo'lsa o'shani teskarisiga o'zgartiradi>>(!)

//     const counterCenerate = useCallback((count) => {
//         //useCallback birinchi parametrida funksiya ikkinchi parametrida qaramlikni qabul qiladi nimaga qaramlik??? useCallback faqat qaramligidagi [counter]uchun ishlaydi boshqa funksiyalarni emas faqat shu counterni render qiladi//keshlas!!!
//         return new Array(counter)
//             .fill("")
//             .map((_, idx) => `Counter number ${idx + count}`);
//     }, [counter]); //QARAMLIK (DEPS)//faqat useCallbach qaysi funksiya yoki o'zgaruvchiga qaram qilinsa faqat osha funksiya yoki o'zgaruvchi o'zgargandagina ishlaydi
//     // console.log(counterCenerate());//bo'sh array keladi

//     const colors = {
//         fontWeight: "bold",
//         color: active ? "green" : "red",
//         //yani agar active o'zgaruvchi true bo'lsa green qil yokida false bo'lsa red qil bu holatda red turadi chunki activeni default qiymati false bo'lib turipti
//     };

//     return (
//         <div className="w-75 mx-auto mt-5 ">
//             <div className="border p-3 mt-3">
//                 <button className="btns" style={colors}>
//                     User activeted = {counter}
//                 </button>

//                 <div className="d-flex justify-content-center">
//                     <button
//                         className="btn btn-success w-25"
//                         onClick={onIncrement}
//                     >
//                         Increase
//                     </button>

//                     <button
//                         className="btn btn-warning mx-3 w-25"
//                         onClick={onToggle}
//                     >
//                         Toggle
//                     </button>
//                 </div>

//                 <div className="d-flex justify-content-center">
//                     <CounterItem counterCenerate={counterCenerate} />
//                 </div>
//             </div>
//         </div>
//     );
// };

// const App = () => {
//     return <User firstName="Nur" lastName="Yorov" link="youtube.com" />;
// };

// export default App;
