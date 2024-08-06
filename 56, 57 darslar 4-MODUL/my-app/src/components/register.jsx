import { useState } from "react";
import { logo } from "../constants";
import { Input } from "../ui";
import { useDispatch, useSelector } from "react-redux";
import { signUserFailure, signUserStart, signUserSucces } from "../slice/auth";
import AuthService from "../service/auth";
import ValidationError from "./validation-error";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const { isLoading } = useSelector((state) => state.auth);

    const registerHandler = async (e) => {
        e.preventDefault();
        dispatch(signUserStart());
        const user = { username: name, email, password };
        try {
            const response = await AuthService.userRegister(user);
            console.log(response);
            console.log(user);
            dispatch(signUserSucces(response.user));
        } catch (error) {
            console.log(error.response.data);
            dispatch(signUserFailure(error.response.data.errors));
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

                    <ValidationError />

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
                        onClick={registerHandler}
                        type="submit"
                    >
                        {isLoading ? "Loading..." : "Register"}
                    </button>
                </form>
            </main>
        </div>
    );
};

export default Register;
