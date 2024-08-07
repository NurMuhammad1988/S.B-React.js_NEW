import { Routes, Route } from "react-router-dom";
import { Main, Login, Register, Navbar } from "./components"; //indexni aftamatik tarzda topadi//////asosiy src papkani ichidagi bu app.js dasturni asosiy yadrosi hissoblanadi components papkada yaratiladigan jsx componentlarni distruptatsa qilib impor qilindi chunki components papkada index.jsda bu componentlar default qilib export qilingan bu degani defaulr as import shu  src papkadagi har qanday papkaga distruptatsa qilib import qilinsa bo'ladi
import { useEffect } from "react";
import AuthService from "./service/auth";
import { useDispatch } from "react-redux";
import { signUserSucces } from "./slice/auth";
import { getItem } from "./helpers/persistance-storage";

const App = () => {
    const dispatch = useDispatch();
    //komponent holatini yangilash va yangi holatni qaytarish uchun ishlatiladi yani bu holatda pastda signUserSucces reduser funksiyani holatini qaytaradi yani getUserda ona reduser funksiya AuthService chaqirildi va shetda yaratilgan getUser funksiyaga ulab qo'yildi va dispatchda AuthService funksiyani reduseri signUserSucces chaqirilsin parametrida user objecti bilan shunda get set qilinib tokeni olingan serverdan kelgan user aftamatik tarzda butun app.jsni ichida bo'ladi yani logout bo'ladi

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
        const token = getItem("token");
        if (token) {
            getUser();
        }
    }, []); //dependes bo'sh yani user saytga kirishi bilan bu useeffect ishga tushadi bu useeffectda esa yuqoridagi getuser funksiyasi bor  user saytga kirganda getuser funksiyasi ishga tushadi va agar tokendagi getitemni tokeni bo'lsa ishga tushadi

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
