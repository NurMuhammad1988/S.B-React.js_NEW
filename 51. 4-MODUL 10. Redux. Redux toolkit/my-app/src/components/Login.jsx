import { useState } from "react";
import { logo } from "../constants";
import { Input } from "../ui";
import { useDispatch, useSelector } from "react-redux";
import { loginUserStart } from "../slice/auth";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch(); //holatni yangilash va yangi holatni qaytarish uchun yani bu holatda loginUserStartni holatini qaytaradi
    const { isLoading } = useSelector((state) => state.auth); //componentni so'nggi holatini olib beradi stateni qabul qiladi va bu holatda state setPassword setPasword esa inputga berilgan shunda useSelector setpasswordni so'nggi holatini olib beradi

    // const auth =  useSelector(state => state.auth)
    // console.log(auth);//selectordan nima keletganini ko'rish uchun

    const loginHandler = (e) => {
        e.preventDefault();
        dispatch(loginUserStart()); //shu loginUserStart ishlaganda loginHandler chaqirilgan buttondan boshqa joy yangilanmasin
    };

    return (
        <div className="text-center mt-5">
            <main className="form-signin w-25 m-auto">
                <form>
                    <img
                        className="mb-2"
                        src={logo}
                        alt="logo"
                        width="72"
                        height="60"
                    />
                    <h1 className="h3 mb-3 fw-normal">Please login</h1>

                    <Input
                        label={"Email address"}
                        type={"email"}
                        state={email}
                        setState={setEmail}
                    />

                    <Input
                        label={"Password"}
                        type={"password"}
                        state={password}
                        setState={setPassword}
                    />

                    <button
                        className="w-100 btn btn-primary mt-2"
                        disabled={isLoading}
                        onClick={loginHandler}
                        type="submit"
                    >
                        {isLoading ? "Loading..." : "Login"}
                    </button>
                </form>
            </main>
        </div>
    );
};

export default Login;
