import "./App.css";
import { Component } from "react";

////reactda hech qanday elementni yoki o'zgaruvchini to'g'ridan to'g'ri o'zgartirib bo'lmaydi

////class componentlar reactda eskirgan hozirda asosan function componentlar ishlatiladi
class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //// state yani holat bu state reactda har doim object bo'ladi yani bu yerda oddiy objetc this.state yani aynan bu object ni o'zgartirish uchun this bilan o'zgaradi // yani reactda o'zgaruvchini o'zgartirish uchun state bilan object ko'rinishida ochib o'zgartirish mumkun

            counter: 0,
        };
    }

    clickIncrement = () => {
        this.setState((prevState) => ({//prevState  metodi bu oldingi holati muhum bo'lgan holatlarsa ishlatiladi yani raqamlarni o'tqizib yubormaydi serverdan malumot sekin kelgan paytdaham user tez bosganda malumotlarni o'tqizib yubormaydi
            counter: prevState.counter + 1,
        }));
    };

    clickDecrement = () => {
        this.setState((prevState) => ({
            counter: prevState.counter - 1,
        }));
    };

    clickRestart = () => {
        this.setState({
            //prevState endi bu yerda shart emas
            counter: 0,
        });
    };

    render() {
        //classda render metodi bilan jsxni render qilish kerak
        const { firstName, lastName, link } = this.props;
        // console.log(this.props);
        return (
            <div className="w-50 mx-auto">
                <div className="border p-3 mt-5 ">
                    <h4 className="text-warning">
                        Mening ismim - {firstName}, sharifim - {lastName}
                    </h4>
                    <a href={link}>Youtube kanalim</a>
                    <div className="mt-3">
                        <button
                            onClick={this.clickIncrement}
                            className="btn btn-success"
                        >
                            Increment
                        </button>

                        <button
                            onClick={this.clickDecrement}
                            className="btn btn-danger mx-2"
                        >
                            Decrement
                        </button>

                        <button
                            onClick={this.clickRestart}
                            className="btn btn-success"
                        >
                            Restart
                        </button>
                        <p className="text-warning mt-3">
                            {this.state.counter}
                        </p>
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

            <User firstName="Nur2" lastName="Yorov2" link="youtube.com" />
        </div>
    );
};

export default App;

// import "./App.css";
// import { Component } from "react";

// ////reactda hech qanday elementni yoki o'zgaruvchini to'g'ridan to'g'ri o'zgartirib bo'lmaydi

// ////class componentlar reactda eskirgan hozirda asosan function componentlar ishlatiladi
// class User extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             //// state yani holat bu state reactda har doim object bo'ladi yani bu yerda oddiy objetc this.state yani aynan bu object ni o'zgartirish uchun this bilan o'zgaradi // yani reactda o'zgaruvchini o'zgartirish uchun state bilan object ko'rinishida ochib o'zgartirish mumkun

//             counter: 10,
//         };
//     }

//     clickHandler = () => {
//         this.setState((prevState) => ({
//             counter: prevState.counter + 1,
//         }));
//     };

//     // clickHandler = () => {
//     //     this.setState({
//     //         counter: this.state.counter + 1,
//     //     });
//     // };

//     render() {
//         //classda render metodi bilan jsxni render qilish kerak
//         const { firstName, lastName, link } = this.props;
//         // console.log(this.props);
//         return (
//             <div className="w-50 mx-auto">
//                 <div className="border p-3 mt-5 ">
//                     <h4 className="text-warning">
//                         Mening ismim - {firstName}, sharifim - {lastName}
//                     </h4>
//                     <a href={link}>Youtube kanalim</a>
//                     <div className="mt-3">
//                         <button
//                             onClick={this.clickHandler}
//                             className="btn btn-success"
//                         >
//                             Click
//                         </button>
//                         <p className="text-warning mt-3">
//                             {this.state.counter}
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

// const App = () => {
//     return (
//         <div>
//             <User firstName="Nur" lastName="Yorov" link="youtube.com" />

//             <User firstName="Nur2" lastName="Yorov2" link="youtube.com" />
//         </div>
//     );
// };

// export default App;
