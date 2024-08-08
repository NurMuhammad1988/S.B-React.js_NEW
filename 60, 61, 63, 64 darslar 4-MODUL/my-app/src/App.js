import { Routes, Route } from "react-router-dom";
import { Main, Login, Register, Navbar } from "./components"; //indexni aftamatik tarzda topadi//////asosiy src papkani ichidagi bu app.js dasturni asosiy yadrosi hissoblanadi components papkada yaratiladigan jsx componentlarni distruptatsa qilib impor qilindi chunki components papkada index.jsda bu componentlar default qilib export qilingan bu degani defaulr as import shu  src papkadagi har qanday papkaga distruptatsa qilib import qilinsa bo'ladi
import { useEffect } from "react";
import AuthService from "./service/auth";
import { useDispatch } from "react-redux";
import { signUserSucces } from "./slice/auth";
import { getItem } from "./helpers/persistance-storage";
import ArticleService from "./service/article";
import { getArticlesStart, getArticlesSuccess } from "./slice/article";

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

    const getArticles = async () => {
        dispatch(getArticlesStart());

        try {
            const response = await ArticleService.getArticles();
            console.log(response);
            dispatch(getArticlesSuccess(response.articles));
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const token = getItem("token");
        if (token) {
            getUser();
        }

        getArticles(); //yani user saytga kirgandan getArticles ishga tushadi yani serverdan atriclelar keladi
    }, []);

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
