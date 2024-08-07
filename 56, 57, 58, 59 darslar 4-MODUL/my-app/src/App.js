import { Routes, Route } from "react-router-dom";
import { Main, Login, Register, Navbar } from "./components"; //indexni aftamatik tarzda topadi//////asosiy src papkani ichidagi bu app.js dasturni asosiy yadrosi hissoblanadi components papkada yaratiladigan jsx componentlarni distruptatsa qilib impor qilindi chunki components papkada index.jsda bu componentlar default qilib export qilingan bu degani defaulr as import shu  src papkadagi har qanday papkaga distruptatsa qilib import qilinsa bo'ladi
import { useEffect } from "react";
import AuthService from "./service/auth";
import { useDispatch } from "react-redux";
import { signUserSucces } from "./slice/auth";

const App = () => {
    const dispatch = useDispatch();

    const getUser = async () => {
        try {
            const response = await AuthService.getUser();
            // console.log(response);
            dispatch(signUserSucces(response.user));
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getUser();
    }, []); //dependes bo'sh yani user saytga kirishi bilan bu useeffect ishga tushadi

    return (
        <div>
            <Navbar />

            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/login" element={<Login />} />
                <Route path="register" element={<Register />} />
            </Routes>
        </div>
    );
};

export default App;
