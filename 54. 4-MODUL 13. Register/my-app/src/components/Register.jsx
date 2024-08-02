import { useState } from "react";
import { logo } from "../constants";
import { Input } from "../ui";
import { useDispatch, useSelector } from "react-redux";
import {registerUserFailure,registerUserStart,registerUserSucces,} from "../slice/auth";
import AuthService from "../service/auth";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch(); //holatni yangilash va yangi holatni qaytarish uchun yani bu holatda loginUserStartni holatini qaytaradi
    const { isLoading } = useSelector((state) => state.auth); //isloading authda bitt a bo'lhani uchun pastdagi loading buttonlar bir hil ishlepti masalan loginga bosilsa registor buttonham loading bo'lib qolepti

    const loginHandler = async (e) => {
        e.preventDefault();
        dispatch(registerUserStart()); //shu registerUserStart ishlaganda loginHandler chaqirilgan buttondan boshqa joy yangilanmasin//registerUserStart auth.jsda yozilgan redux funksiya shu sabab () chaqirilishi kerak
        const user = { username: name, email, password };
        try {
            const response = await AuthService.userRegister(user);
            console.log(response);
            console.log(user); //foydalanuvchi ro'yhatdan o'tganligini ko'rish uchun
            dispatch(registerUserSucces()); //register actions
        } catch (error) {
            dispatch(registerUserFailure()); //register actions
        }
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
                    <h1 className="h3 mb-3 fw-normal">Please register</h1>

                    <Input
                        label={"Username"} //label
                        state={name} //value
                        setState={setName} //onChange e. target
                        // type default "text"
                    />

                    <Input
                        label={"Email address"} //label
                        type={"email"}
                        state={email} //value
                        setState={setEmail} //onChange e. target
                    />

                    <Input
                        label={"Password"} //label
                        type={"password"}
                        state={password} //value
                        setState={setPassword} //onChange e. target
                    />

                    <button
                        className="w-100 btn btn-primary mt-2"
                        disabled={isLoading} //buttonga onclick bo'lganda bu buttonni disabled qiladi yani o'chiradi qotiradi
                        onClick={loginHandler}
                        type="submit"
                    >
                        {isLoading ? "Loading..." : "Register"}
                        {/* agar isloading true bo'lsa yani user login qilgan bo'lsa Loading textini chiqar agar yokida isloading bo'sh bo'lsa yani hali user login qilmagan bo'lsa Register textini hciqar */}
                    </button>
                </form>
            </main>
        </div>
    );
};

export default Register;
