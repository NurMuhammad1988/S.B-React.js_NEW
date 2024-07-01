// //react-state//reactda qandaydur o'zgaruvchini to'g'ridan to'g'ri o'zgartirib bo'lmaydi masalan 5 ni 5=6 qilib o'zgartirib bo'lmaydi//statelar birinchi class componentlarda chiqgan
// ////Class component
// // import React from "react"; //classlardan voris olish mumkun reactda classlar vorisni reactdan oladi shu uchun raectda ishlaganda indexda react react kutubhonadan import qilingan bo'lsaham appda yokida class component ishlatiladigan joyda reactni va componentini shunday import qilib olish kerak index.jsda import qilingan bo'lsaham class ishlatilgan fileda react va componentiham import qilingan bo'lishi kerak
// import { Component } from "react"; //distruptatsa bilan reactdan componentlarni o'zini alohida chaqirish

// class User extends Component {
//     //yani class component extends tashqaridan oladi yani vorislanadi qayerdan Reactni Componentlaridan yani class shu joyga qo'l uzatadi (vorislanadi)
//     // constructor(props) {//class chaqirilganda doim constructor bilan keladi bu holatda extends kalit so'zi bilan kelgani uchun constructor aftamatik tarzda yozilgan bo'ladi shu sabab o'chirilib turipti
//     //     super(props);
//     // }
//     render() {
//         //render metodi jsxni render qilib beradi yani jsxni ui ga ko'rsatib beradi
//         const { firstName, lastName, link } = this.props;
//         console.log(this.props); //react classlarda this kalit so'zi
//         return (
//             <div>
//                 <h1>
//                     Mening ismim - {firstName}, sharifim - {lastName}
//                 </h1>

//                 <a href={link}>Youtube kanalim</a>
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
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////state state object hissoblanadi yani       //reactda setState funksiyasi o'zgaruvchini o'zgartirish uchun kerak
import { Component } from "react";
import "./App.css";

class User extends Component {
    constructor(props) {
        //constructor doim eng yuqorida yoziladi
        super(props); //qachonki constructor ishlatilsa super constructorgaga propisni berib qo'yish kerak
        this.state = {
            //this.state yani qandaydur holat//State React ilovasini yaratishda malumot yoki malumotlarni saqlash va boshqarish usulidir . satate  bu veb-sahifadagi real vaqtda malumotlar yoki malumotlarni o'z ichiga olgan JavaScript objekti//statew har doim object bo'ladi//state bo'lgani uchun bu objectni o'zgartirish mumkun
            counter: 10, //counter bu holatd ahuddi bir o'zgaruvchiday yani object
        };
    }

    //// reactda o'zgaruvchini to'g'ridan to'g'ri o'zgartirib bo'lmaydi shu sabab bu clickHandler funksiyasi setState funksiyasi bilan yozildi
    ////setState funksiyasi callback qaytaradi
    clickHandler = () => {
        this.setState({//{}<<jingalak qavus yangi object qaytarishni bildiradi yani setstate funksiyaga yangi object qaytargin deyildi
            counter:this.state.counter + 1//yani clickHandler nomli funksiya yaratib unga this setstate qilib setstate funksiyasi chaqirildi va qiymati 10 bo'lib turgan counter o'zgaruvchini qiymatiga 1 ni qo'sh deyildi va bu clickHandler funksiyasi jsxdagi buttonga onClick qilib cthis bilan chaqirilib qo'yildi yani buttonda onclick hodisasi ilindi va button click bo'lganda counterdagi 10 ga har cklickda 1 qo'shilib boradi

        })
    };

    render() {
        //bu holatda renderni ichi jsx yani react tashqarisi esa (js desaham bo'ladi) yani funksiyalar jsxdan tashqarida yoziladi
        const { firstName, lastName, link } = this.props;
        return (
            <div className="w-50 mx-auto ">
                <div className="border p-3 mt-5">
                    <h1>
                        Mening ismim - {firstName}, sharifim - {lastName}
                    </h1>

                    <a className="text-decoration-none " href={link}>
                        Youtube kanalim
                    </a>

                    <div className="mt-3">
                        <button
                            onClick={this.clickHandler} 
                            className="btn btn-success"
                        >
                            Click
                        </button>
                        <p>{this.state.counter}</p>
                    </div>
                </div>
            </div>
        );
    }
}

const App = () => {
    return (
        <div>
            <User firstName="Nur" lastName="Yorov" link="youtube.com" />
            <User firstName="Firdavs" lastName="Yorov" link="youtube.com" />
            <User firstName="Doston" lastName="Yorov" link="youtube.com" />
        </div>
    );
};

export default App;
