import { useEffect, useState } from "react";
import { logo } from "../constants";
import { Input } from "../ui";
import { useDispatch, useSelector } from "react-redux";
import { signUserFailure, signUserStart, signUserSucces } from "../slice/auth";
import AuthService from "../service/auth";
import { ValidationError } from ".";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const { isLoading, loggedIn } = useSelector((state) => state.auth);

    const navigate = useNavigate(); //userni navigate qilish uchun

    const loginHandler = async (e) => {
        e.preventDefault();
        dispatch(signUserStart());
        const user = { email, password };
        try {
            const response = await AuthService.userLogin(user);
            console.log(response);
            dispatch(signUserSucces(response.user));
            navigate("/"); //yani userni navigatsa qilish yani agar bu tryni ichidagi so'rov omadli bajarilsa yani catchga tushmasa userni bosh sahifaga>>>"/" jo'natadi yani navigator react router domni hooki userni nimadur qilganda yokida saytda nimadur sodir bo'lganda belgilangan joyga yani sahifaga yo'naltriadigan hook yani funskiya
        } catch (error) {
            dispatch(signUserFailure(error.response.data.errors));
        }
    };

    useEffect(() => {
        if (loggedIn) {
            navigate("/");
            //protate route  login yani user login qilgandan keyin boshqa register. bo'limiga o'tib qaytadan register qilaolmaydi yani hafsiz routing
        } //yani loggedin true bo'lsa yani user login qilsa userni navigate qilib asosiy sahifaga o'tqiz
    }, [loggedIn]); //yani loggedin bo'lganda yani user saytga kirganda bu useeffect ishlasin va asosiy sahifaga userni navigate qisin

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

                    <ValidationError />

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
