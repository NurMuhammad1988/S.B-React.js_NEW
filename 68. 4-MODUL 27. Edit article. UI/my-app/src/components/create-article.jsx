import { useState } from "react";
import ArticleForm from "./article-form";
import ArticleService from "../service/article";
import { useDispatch } from "react-redux";
import {
    postArticleFailure,
    postArticleStart,
    postArticleSuccess,
} from "../slice/article";
import { useNavigate } from "react-router-dom";


const CreateArticle = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [body, setBody] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const formSubmit = async (e) => {
        e.preventDefault();
        const article = { title, description, body }; ///bo'sh object  usesatedan keletgan object

        dispatch(postArticleStart());

        try {
            const response = await ArticleService.postArticle(article); //yani postArticle service papkadagi article.jsdan keletgan post so'rovni bajaradigan funksiya parametridagi article esa yuqorida yozilgan title description va bodydan yani bo'sh massivlardan iborat object yani service papkadagi article.jsdgi postArticle post funksiya parametridaham article bor yani shu article bo'sh objecti bor yani bu bo'sh object serverga jo'natib qo'yilepti ichidagi objectni title, descripton, body qiymatlarini server taniydi va shu qiymatlarga yozilib yani post qilingan articleni qaytarib beradi serverga postni postman ilovasida bajarildi
            console.log(response);
            dispatch(postArticleSuccess());
            navigate("/");
        } catch (error) {
            dispatch(postArticleFailure());
        }
    };

    const formProps = {
        title,
        setTitle,
        description,
        setDescription,
        body,
        setBody,
        formSubmit,
    };

    return (
        <div className="text-center ">
            <h1 className="fs-2">Create Article </h1>

            <div className="w-75 mx-auto">
                <ArticleForm {...formProps} />
            </div>
        </div>
    );
};

export default CreateArticle;
