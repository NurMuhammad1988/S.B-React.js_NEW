import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ArticleService from "../service/article";
import { useDispatch } from "react-redux";
import { getArticleDetailFailure, getArticleDetailStart, getArticleDetailSuccess } from "../slice/article";
// import { v4 as uuidv4 } from "uuid";

const ArticleDetail = () => {
    const { slug } = useParams();
    // console.log(slug);
    const dispatch = useDispatch((state) => state.article);

    useEffect(() => {
        const getArticleDetail = async () => {
            dispatch(getArticleDetailStart());

            try {
                const response = await ArticleService.getArticleDetail(slug);
               dispatch (getArticleDetailSuccess(response.article))//yani bu payload slice papkadagi article.jsdagi article nomli ona reducer funksiyani bolasi getArticleDetailSuccess funksiyani payloadiga tushadi object
                console.log(response);
            } catch (error) {
                dispatch(getArticleDetailFailure())
            }
        };
        getArticleDetail();
    }, [slug]); //yani slug o'zgarganda useeffect ishga tushadi yani getarticledatailni ishlatadi

    return <div> slug: {slug} </div>;
    // darsda serverda keletgan objectda yani articleda id bor edi lekin man bu darsni qiletganimda serverdan idmas slug bilan qilindi chunki id yo'q edi agar bu loyiha prtfolioga qo'yiletganda shu masalada hato bo'lsa serverdan qarash kerak aagar ungacha id qo'yilsa yoki o'zgarishlar bo'lsa to'g'irlash kerak
};

export default ArticleDetail;
