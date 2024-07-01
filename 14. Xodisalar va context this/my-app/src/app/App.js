////14. Xodisalar va context this

// import { Component } from "react";
// import "./App.css";

// class User extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             counter: 10,
//             age: "", //yani age bu holatda User classdan vorislanadigan thisni contexidagi o'zgaruvchi desaham bo'ladi yani object
//         };
//     }

//     clickHandlerPlus = () => {
//         this.setState((prevState) => ({
//             counter: prevState.counter + 1,
//         }));
//     };

//     clickHandlerMinus = () => {
//         this.setState((prevState) => ({
//             counter: prevState.counter - 1,
//         }));
//     };

//     clickHandlerRestart = () => {
//         this.setState(() => ({
//             counter: 0,
//         }));
//     };

//     ChangeHandler = (e) => {
//         //hamma inputlarda default holatida birinchi argument sifatida event keladi yani DOM elementlar
//         // console.log(e.target.value); //yani inputni ichidagi eventlar chiqadi yani inputni hodislarini olish//inputdagi user yozadigan qiymatni logga olish
//         this.setState({
//             age: e.target.value, //yani bu holatda ChangeHandler metod funksiyasi bilan ChangeHandler funksiyasi onChange qilib chaqirilgan inputdagi eventlarni yani hodislarni yuqrida constructordan kelayotgan age o'zgaruvchiga ovoldik va age o'zgaruvchiga olingan inputni qiymatlarini jsxdagi yoshim textidan keyinga chaqirvoldik>>>{this.state.age} nima uchun lastname va firstnamelarda oldida this yo'q??? chunki lastname va firstnamelar constructordan kelgani yo'q age esa constructor thisdan kelyapti shu sabab this kalit so'zi bilan chaqirilayapti
//         });
//     };

//     render() {
//         const { firstName, lastName, link } = this.props;
//         return (
//             <div className="w-50 mx-auto ">
//                 <div className="border p-3 mt-5">
//                     <h1>
//                         Mening ismim - {firstName}, sharifim - {lastName},
//                         yoshim {this.state.age}
//                         {/* nima uchun lastname va firstnamelarda oldida this yo'q??? chunki lastname va firstnamelar constructordan kelgani yo'q age va counter esa constructor thisdan kelyapti shu sabab this kalit so'zi bilan chaqirilayapti */}
//                     </h1>

//                     <a className="text-decoration-none " href={link}>
//                         Youtube kanalim
//                     </a>

//                     <div className="mt-3">
//                         <button
//                             onClick={this.clickHandlerPlus}
//                             className="btn btn-success"
//                         >
//                             Increment
//                         </button>

//                         <button
//                             onClick={this.clickHandlerMinus}
//                             className="btn btn-danger mx-3"
//                         >
//                             Decrement
//                         </button>

//                         <button
//                             onClick={this.clickHandlerRestart}
//                             className="btn btn-info"
//                         >
//                             Restart
//                         </button>

//                         <p>{this.state.counter}</p>
//                     </div>

//                     <form>
//                         <span>Yoshingiz</span>
//                         <input
//                             type="text"
//                             className="form-control"
//                             onChange={this.ChangeHandler}
//                         />
//                         {/* onChange hodisasi reactda yani jsx file ichida hodisalar shunday onClick va onChange deb yoziladi reactni o'zini sintaksisizi bular funksiya hissoblanadi */}
//                     </form>
//                 </div>
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
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { Component } from "react";
import "./App.css";

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 10,
            age: "",
        };

        ////test-1 test-1 arrowsiz yani strelkasi function metod bilan ishlash eski usuli
        //// this.clickHandlerPlusTest = this.clickHandlerPlusTest.bind(this);//yani agar metod arrow funskiyasi oddiy qo'lda yoziladigan metod bilan ishlansa shunday bind metodi bilan this contexni bog'lab qo'yish kerak bo'ladi clickHandlerPlusTest oddiy metodi uchun yozilgan pastdagi commentga qara//lekin oddiy metodlar ko'payib ketsa kodlar uzun bo'lib ketadi shu sabab tinchiga arrow funksiyalardan ishlatgan maqul
        //arrow funksiyalar bilan ishlash reactda yani metod hissoblanadi (2022 yildan) eski loyihalarda bind metodi bilan thisni ulab ishlatish ko'roq uchraydi
    }

    ////test-1, 2, 3 /////////////////////////////////////////////////////////////////////////
    ////test-1 test-1 arrowsiz yani strelkasi function metod bilan ishlash eski usuli
    // clickHandlerPlusTest() {
    //     //bunday holat hato hissoblanadi yani callback strelkali funksiya yuozilishi kerak chunki oddiy funksiyalarni o'zini kontexsi bor shu sabab this.setStateni yo'qotib qo'yadi yani thisni yo'qotib qo'yadi strelkali funksiyalar o'z konteksiga ega emasligi sabab bu holatda agar strelkali funskiya bo'lsa thisni oladi arraw funksiya konteksni ichidagi qiymatdan oladi//yani this bilan yani classlar bilan ishlaganda oddiy metod bilanmas arrow yani strelkali metodlar yaratib ishlash kerak
    //     this.setState((prevState) => ({
    //         counter: prevState.counter + 1,
    //     }));
    // }

    //// test-2 arrowsiz yani strelkasi function metod bilan ishlashni yana bir usuli bu usulda clickHandlerMinusTest jsxda chaqirilayotganda callback arrow funskiya ichida this bilan chaqirilishi kerak lekin aslida bunday holatda ishlagan maqul>>>clickHandlerMinus = () => {}
    // clickHandlerMinusTest() {
    //     this.setState((prevState) => ({
    //         counter: prevState.counter - 1,
    //     }));
    // }
    //// test-3 oddiy metodlar bilan inputda ishlaganda callbach yani arrow funskiyaga argumentlar yani parametrlar berish
    // ChangeHandlerTest(e, number) {
    //     console.log(number);
    //     this.setState({
    //         age: e.target.value,
    //     });
    // }
    ////test-1, 2, 3 /////////////////////////////////////////////////////////////////////////

    clickHandlerPlus = () => {
        this.setState((prevState) => ({
            counter: prevState.counter + 1,
        }));
    };

    clickHandlerMinus = () => {
        this.setState((prevState) => ({
            counter: prevState.counter - 1,
        }));
    };

    clickHandlerRestart = () => {
        this.setState(() => ({
            counter: 0,
        }));
    };

    ChangeHandler = (e) => {
        this.setState({
            age: e.target.value,
        });
    };

    render() {
        const { firstName, lastName, link } = this.props;
        const { age, counter } = this.state; //endi age va counterlar distruptatsa bo'lib kelepti yani oldiga this calit so'zini qo'yish shart emas chunki this.state qilib age va counterni User constructordan kelayotgani state ekanligi aytilib o'zgaruvchiga olinib jsxga render qilinayapti
        return (
            <div className="w-50 mx-auto ">
                <div className="border p-3 mt-5">
                    <h1>
                        Mening ismim - {firstName}, sharifim - {lastName},
                        yoshim {age}
                    </h1>

                    <a className="text-decoration-none " href={link}>
                        Youtube kanalim
                    </a>

                    {/* test 1,2////////////////////////////////////////////////////////// */}
                    <div className="mt-3">
                        {/* <button ////test-1 test-1 arrowsiz yani strelkasi function metod bilan ishlash eski usuli (chaqirilish o'zgarmagan)
                            onClick={this.clickHandlerPlusTest}
                            className="btn btn-success"
                        >
                            Increment
                        </button> */}
                        {/* //////////////////////////////////////////////////////////////// */}
                        {/* <button
                            onClick={() => this.clickHandlerMinusTest()}
                            className="btn btn-danger mx-3"
                            ////test-2 test-2 arrowsiz yani strelkasi function metod bilan ishlash  ikkinchi usuli chaqirilishi yani arrow funskiya ichida thisni  clickHandlerMinusTestga chaqirib qo'yish
                        >
                            Decrement
                        </button> */}
                        {/* test 1,2////////////////////////////////////////////////////////// */}
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

                        <p>{counter}</p>
                    </div>

                    <form>
                        <span>Yoshingiz</span>
                        {/* test-3 ////////////////////////////////////////////////////////// */}
                        {/* <input
                            type="number"
                            className="form-control"
                            onChange={(e) => this.ChangeHandlerTest(e, "number")}
                            // har doim parametrga birinchi event beriladi yani inputda arrow funksiyasiz faqat qo'lda yozilgan metod bilan ishlaganda doim parametrga birinchi eventni berish kerak chunki event input ichidagi hodisani oladi /> */}
                        {/* test-3 ////////////////////////////////////////////////////////// */}

                        <input
                            type="number"
                            className="form-control"
                            onChange={this.ChangeHandler}
                        />
                    </form>
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
