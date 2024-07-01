import { Component } from "react";
import "./App.css";

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 10,
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
    render() {
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
