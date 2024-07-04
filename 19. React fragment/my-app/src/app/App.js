//// 19. React fragment

import { Component, Fragment } from "react";
import "./App.css";

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 10,
            age: "",
        };
    }

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
        const { age, counter } = this.state;
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

                        <p>{counter}</p>
                    </div>

                    <form>
                        <span>Yoshingiz</span>

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
        
        ////Fragment reactda ona div o'rnida yoziladi va logda qaraganda ortiqchla masalan classiz divlar yo'q bo'ladi //reactda componentlar ona div ichiga olinardi va ona div logda elementtsda qaralganda classsiz oddiy holatda turgan bo'lardi lekin Rewactdan fragmentni chaqirib ishlash qulay chunki fragment ona div sifastida yozilib ichiga componentlar chaqirilishi mumkun fragment key qabul qiladi shu sabab divdan yahshi <Fragment key={}>masalan birorta componentni datasini intriatsa qilish map qilish kreak bo'lsa key kerak bo'ladi shunda componentni fragmentga o'rab key berib ishlatsa bo'ladi
        <Fragment>
            <User firstName="Nur" lastName="Yorov" link="youtube.com" />
            <User firstName="Firdavs" lastName="Yorov" link="youtube.com" />
            <User firstName="Doston" lastName="Yorov" link="youtube.com" />
        </Fragment>
    );
};

export default App;
