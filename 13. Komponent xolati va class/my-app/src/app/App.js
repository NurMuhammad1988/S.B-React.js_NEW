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
//         const { firstName, lastName, link } = this.props;////yani render ichida firsname lastname link ishlatilepti shu sabab jsx bu componentlarni tanishi uchun class componentdagi propslarni bitta o'zgaruvchiga olib distruptatsa qilib this kalit so'zi bilan chaqirish kerak shunda jsx biladiku bu chaqirilgan narsalar propisdan kelayotganligi shunda ishlaydi shu class va funchtion componentlarni asosiy farqi yani function componentda
//         console.log(this.props); //react classlarda this kalit so'zi
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
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//state state object hissoblanadi yani       //reactda setState funksiyasi o'zgaruvchini o'zgartirish uchun kerak
import { Component } from "react";
import "./App.css";

class User extends Component {
    constructor(props) {
        //constructor doim eng yuqorida yoziladi
        super(props); //qachonki constructor ishlatilsa super constructorgaga propisni berib qo'yish kerak chunki props object qaytaradi qanday object qaytaradi??? this.stateni ichidagini object qilib qaytaradi yani counterni
        this.state = {
            //this.state yani qandaydur holat//State React ilovasini yaratishda malumot yoki malumotlarni saqlash va boshqarish metodi hissoblanadi  satate  bu veb-sahifadagi real vaqtda malumotlar yoki bir nechta malumotlarni o'z ichiga olgan JavaScript objekti//state har doim object bo'ladi//state bo'lgani uchun reactda bu objectni o'zgartirish mumkun
            counter: 10, //counter bu holatda huddi bir o'zgaruvchiday yani object yani counter state object yani o'zgarishi mumkun bo'lgan onject yani react qonuni shuku har qanday o'zgaruvchini to'g'ridan to'g'ri o'zgartirib bo'meydi stae ichidagi o'zgaruvchiniga boshqa funksya bilan o'zgartirib bo'ladi
        };
    }

    ////mutate yani mutatsa o'zgaruvchini  to'g'ridan to'g'ri o'zgartirishga yatiladi
    //// reactda o'zgaruvchini to'g'ridan to'g'ri o'zgartirib bo'lmaydi shu sabab bu clickHandler funksiyasi setState funksiyasi bilan yozildi
    ////setState funksiyasi callback qaytaradi

    // clickHandler = () => {
    //     this.setState({
    //         //{}<<jingalak qavus yangi object qaytarishni bildiradi yani setstate funksiyaga yangi object qaytargin deyildi shunda setstate counterni yangi qiymatiniham yangi objectda qaytaradi
    //         counter: this.state.counter + 1, //yani clickHandler nomli funksiya yaratib unga this setstate qilib setstate funksiyasi chaqirildi va qiymati 10 bo'lib turgan counter o'zgaruvchini qiymatiga 1 ni qo'sh deyildi va bu clickHandler funksiyasi jsxdagi buttonga onClick qilib cthis bilan chaqirilib qo'yildi yani buttonda onclick hodisasi ilindi va button click bo'lganda counterdagi 10 ga har cklickda 1 qo'shilib boradi yani  o'zgaruvchini, objectni funksiya ichida holatini oncklik bo'lganda o'zgartirdik

    //         // bu kod birinchi holat bu kodni ikkinchi holatdaham boshqacha qilib pastda yozdik chunki mobodo button tez click bo'lganda qotib qolsa bu funksiya bilan clicklarni yani tez bosilib qotib qolgandagi clicklarni yo'qotib qo'yish mumkun shu sabab kod dastur yani sayt qotib qolgandaham windowga click bosilsa clicklarni saqlab qoladigan qilib boshqatdan pastda yozildi//
    //     });
    // };
    ///////////////////////////////////////////////////////////////////////////////////////////////
    ////setState funksiyasi faqatgina constructordan  o'z ichiga chaqirilgan objectlarga tasir qiladi masalan constructor ichida boshqa objectlar bor bo'lsa ularga tasir qilmaydi
    clickHandlerPlus = () => {
        this.setState((prevState) => ({//(prevstate) yani oldingi holat ()<<dumaloq qavuscha callback funksiyada return degani yani ()<<shu sabab return qiladi nimani return qiladi??? {}<<yangi objectni return qiladi yani jingalak qavus prevstateni yangi objectda qaytar manosini beradi endi bu prevsatateda counterni oldingi holatiham saqlanadi
            //{}<<jingalak qavus yangi object qaytarishni bildiradi yani setstate funksiyaga yangi object qaytargin deyildi parametridagi prevStateda endi oldingi holat bo'ladi yani counter:10 qiymatli o'zgaruvchini oldingi holati bo'ladi
            counter: prevState.counter + 1, //prevState??? yani prevsatate parametri   oldingi holatga bog'glangan bo'ladi yani objectga hamma holatni saqlab qoladi masalan constructordan counter o'zgaruvchini kelishi sekinroq bo'lib qolsa yoki internet tezligi sabab qotib qolsa shunda  prevsatate funksiya  parametirda chaqirilganda chaqirilgan objectida yani ichidagi counter objectida hodisani oldingi holatini yangi return qilingan objectda saqlab qoladi yani bir nechta buttonga nechchi martta bosilsaham hodisalarni yani clicklarni objectga saqlab qoladi hech qanaqa clickni yo'qotib qo'ymaydi//yani shu parametr yozilgan funksiyani nechta buttonga chaqirgan bo'lsaham hamma buttonda ishlayveradi
        }));
    };

    clickHandlerMinus = () => {
        this.setState((prevState) => ({
            counter: prevState.counter - 1,
        })); //bu holatda hodisani oldingi holati saqlanib va click bo'lganda minsuga ishlaydi yani har bir minisga bposilgan clickni oldingi holatiniham ushlab qoladi yangi objectda
    };

    clickHandlerRestart = () => {
        this.setState(() => ({
            counter: 0,
            //counter: (prevState.counter = 0),//bu sintaksizham ishlayveradi
        }));
    };
    /////////////////////////////////////////////////////////////////////////////////////////
    render() {
        const { firstName, lastName, link } = this.props; //firstName, lastNamelar propsdan kelayotganligini jsxga aytib qo'yildi  endi kalit so'z hissoblangan thisni yozish shartmas lekin baribir jsxni ichidafunksiya chaqirilganda this yozilgan???
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
                            onClick={this.clickHandlerPlus}
                            className="btn btn-success"
                        >
                            Increment
                        </button>

                        <button
                            onClick={this.clickHandlerMinus}
                            className="btn btn-danger mx-3"
                        >
                            Decrement
                        </button>

                        <button
                            onClick={this.clickHandlerRestart}
                            className="btn btn-info"
                        >
                            Restart
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
