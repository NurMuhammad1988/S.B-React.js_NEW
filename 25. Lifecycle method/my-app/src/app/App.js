import { Component, useState } from "react";
import "./App.css";
////Lifecycle metodlar birinchi class componentlarda yaratilgan
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

    ////mounting saytni yuklanishi serverdan malumot kelishi mounting deyiladi
    //Class componentlarda Lifecycle metodlar bilan ishlash

    componentDidMount() {
        document.title = `Counter: ${this.state.counter}`; //yani bu title htmli titlesi (DOM)
        console.log("Mounting");
    } //componentDidMount metodi saytga kirgandan ishlaydi masalan user saytga kirganda sayt birinchi mounting bo'ladi

    componentDidUpdate() {
        document.title = `Counter: ${this.state.counter}`; //yani bu title htmli titlesi (DOM) bu holatda htmldagi title o'zgariv counter o'zgaruvchini qiymati titlega o'tdi va har bir clikda update ishladi
        console.log("Update");
    } //componentDidUpdate user saytga kirgandan keyin harakatlar qilganda ishlaydi har bir clickda ishlaydi

    componentWillUnmount() {
        alert("Component will Unmount");
        console.log("Unmount");
    } //loyihadan qandaydur component udalit bo'lsa Unmount ishleydi va alerta habarham berildi

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
                    {this.state.islogin ? <p>Login User</p> : null}

                    <button
                        onClick={this.onToggleLogin}
                        className="btn btn-info"
                    >
                        Toggle Login
                    </button>
                </div>
            </div>
        );
    }
}

const App = () => {
    const [isDisplay, setIsDisplay] = useState(true);

    const deleteDisplayHnadler = () => {
        setIsDisplay(false);
    };
    return (
        <div>
            <button
                className="btn btn-danger mx-3 w-25 mt-3"
                onClick={deleteDisplayHnadler}
            >
                Display
            </button>

            {isDisplay && (
                <User firstName="Nur" lastName="Yorov" link="youtube.com" />
            )}
        </div>
    );
};

export default App;
