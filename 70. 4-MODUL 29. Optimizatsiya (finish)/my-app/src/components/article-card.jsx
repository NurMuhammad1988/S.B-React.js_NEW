import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ArticleService from "../service/article";

const ArticleCard = ({ article, getArticles }) => {
    const navigate = useNavigate();
    const { loggedIn, user } = useSelector((state) => state.auth); //loggedin foydalanuvchi ro'yhatdan o'tganmi yo'qmi tekshirish uchun user esa agar foydalanuvchi ro'yhatdan o'tgan bo'lsa username artcleni au5thoti bilan bir hilmi yo'qmi shularni bilish uchun

    const deleteArticle = async (slug) => {
        //service papkada article.jsda yozilgan deleteArticle funksiyasini  ArticleService.deleteArticle(slug) qilib chaqirish asynv await funksiyada yozilishini sababi serverdan so'rov funksiyasi bo'lgani uchun yani await serverdan infolarni kelishini kutadi async birinchi bo'lib ishleydi va boshqa funksiyalarga aloqasi yo'q holatda birinchi bo'lib ishleydi server bilan oldiberdida esa aynan shu kerak
        //bu slug service papkada article.jsda yozilgan deleteArticle funksiyasidagi slug yani articlelarni slugi ani idni o'rniga slug yozgan yahshi seo uchunham

        try {
            const response = await ArticleService.deleteArticle(slug); //yani bu funksiya dyna,ic funksiya service papkada article.jsda bu delete articleda axiosni delete metodidan foydalanish yozib qo'yilgan
            console.log(response);
            getArticles();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="col" key={article.slug}>
            {/*  // darsda serverda keletgan objectda yani articleda id bor edi lekin man bu darsni qiletganimda serverdan idmas slug bilan qilindi chunki id yo'q edi agar bu loyiha prtfolioga qo'yiletganda shu masalada hato bo'lsa serverdan qarash kerak aagar ungacha id qo'yilsa yoki o'zgarishlar bo'lsa to'g'irlash kerak */}
            <div className="card shadow-sm bg-dark h-100">
                <svg
                    className="bd-placeholder-img card-img-top"
                    width="100%"
                    height="225"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                >
                    {/* <title>Placeholder</title> */}
                    <rect width="100%" height="100%" fill="#55595c"></rect>
                </svg>

                <div className="card-body">
                    <p className=" card-text fw-bold text-capitalize text-secondary ">
                        {article.title}
                        {/* serverdan keletgan articlelarni titlelari yani bu serveragi objectni urllari desaham bo'ladi */}
                    </p>

                    <p className="card-text  text-secondary ">
                        {article.description}
                        {/* serverdan keletgan articlelarni titlelari yani bu serveragi objectni urllari desaham bo'ladi */}
                    </p>
                </div>
                <div className="card-footer d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                        <button
                            onClick={() =>
                                navigate(`/article/${article.slug} `)
                            }
                            // bu article diynamic berildi yani bu viev texti bor buttonga klik bo'lganda article ichidagi sluglarga olib beradi va navigate sabab article-detail.jsxga olib boradi

                            type="button"
                            className="btn btn-sm btn-outline-success  text-white"
                        >
                            View
                        </button>

                        {loggedIn &&
                            user.username === article.author.username && (
                                // yani agar loggedin bo'lgan bo'lsa va loggedin bo'lgan userni usernME QATTIY TENG BO'LSA ARTICLE objectini authorni usernamesiga bu ikkala buttonni ko'rsat//shunda articleni yozgan odamgina edit yoki delete qilaoladi oddiy user esa faqat view qilib maqolalarni o'qiy oladi holos
                                <>
                                    <button
                                        onClick={() =>
                                            navigate(
                                                `/edit-article/${article.slug} `
                                            )
                                        }
                                        type="button"
                                        className="btn btn-sm btn-outline-secondary  text-white"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() =>
                                            deleteArticle(article.slug)
                                        }
                                        type="button"
                                        className="btn btn-sm btn-outline-danger  text-white"
                                    >
                                        Delete
                                    </button>
                                </>
                            )}
                    </div>

                    <small className="text-white fw-bold text-capitalize  text-black">
                        {article.author.username}
                    </small>
                </div>
            </div>
        </div>
    );
};

export default ArticleCard;
