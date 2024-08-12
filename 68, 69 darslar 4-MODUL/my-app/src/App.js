import { Routes, Route } from "react-router-dom";
import {
    Main,
    Login,
    Register,
    Navbar,
    ArticleDetail,
    CreateArticle,
    EditArticle,
} from "./components"; //indexni aftamatik tarzda topadi//////asosiy src papkani ichidagi bu app.js dasturni asosiy yadrosi hissoblanadi components papkada yaratiladigan jsx componentlarni distruptatsa qilib import qilindi chunki components papkada index.jsda bu componentlar default qilib export qilingan bu degani default as import shu  src papkadagi har qanday papkaga distruptatsa qilib import qilinsa bo'ladi
import { useEffect } from "react";
import AuthService from "./service/auth";
import { useDispatch } from "react-redux";
import { signUserSucces } from "./slice/auth";
import { getItem } from "./helpers/persistance-storage";
// import ArticleService from "./service/article";
// import { getArticlesStart, getArticlesSuccess } from "./slice/article";


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
        const token = getItem("token");
        if (token) {
            getUser();
        }

    
    }, []);

    return (
        <div>
            <Navbar />

            <div className="container">
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                    <Route path="/article/:slug" element={<ArticleDetail />} />
                    {/* /article/:slug dynamic slug qo'shish */}
                    <Route path="create-article" element={<CreateArticle />} />
                    <Route path="/edit-article/:slug" element={<EditArticle/>}/>
                </Routes>
            </div>
        </div>
    );
};

export default App;
