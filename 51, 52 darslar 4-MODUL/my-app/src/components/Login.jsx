import { useState } from "react";
import { logo } from "../constants";
import { Input } from "../ui";
import { useDispatch, useSelector } from "react-redux";
import { loginUserStart } from "../slice/auth";

const Login = () => {
    const [email, setEmail] = useState("");//yani bu statelar faqat shu componentni o'zida qoladi boshqa joyga props qilinmeydi
    const [password, setPassword] = useState("");
    const dispatch = useDispatch(); //holatni yangilash va yangi holatni qaytarish uchun yani bu holatda loginUserStartni holatini qaytaradi
    const { isLoading } = useSelector((state) => state.auth); //componentni so'nggi holatini olib beradi stateni qabul qiladi va bu holatda state setPassword setPasword esa inputga berilgan shunda useSelector setpasswordni va setEmailniham so'nggi holatini olib beradi bu holatda bu statelarni so'nggi holati false yani reduser funksiyada boshlang'ich qiymatlari false turipti

    // console.log(auth);//selectordan nima keletganini ko'rish uchun

    const loginHandler = (e) => {
        e.preventDefault();
        dispatch(loginUserStart()); //shu loginUserStart ishlaganda loginHandler chaqirilgan buttondan boshqa joy yangilanmasin//loginUserStart auth.jsda yozilgan redux funksiya shu sabab () chaqirilishi kerak//yani bu lohinhandler chaqirilgan button click bo'lganda form refresh bo'lmasin lekin reduserdan chaqirilgan loginuserstart ishlasin dipstach esa shu loginuserstart ishlagandagi ohirgi holatni oladi yani loyihaga malumotni oladi va aftamatik tarzda userloginstart truega aylanadi chunki loginUserStartda state o'zgarganda true bo'lsin deb reduserda aytilgan
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
                        disabled={isLoading} //buttonga onclick bo'lganda bu buttonni disabled qiladi yani o'chiradi qotiradi yani siloading true bo'lsa disable bo'ladi 
                        onClick={loginHandler}
                        type="submit"
                    >
                        {isLoading ? "Loading..." : "Login"}
                        {/* isloading true bo'lsa yani buttonga bosilgan bo'lsa loading.. false bo'lsa yani bosilmagan bo'lsa login qil degan ko'rsatmani userga ko'rsatish */}
                    </button>
                </form>
            </main>
        </div>
    );
};

export default Login;
