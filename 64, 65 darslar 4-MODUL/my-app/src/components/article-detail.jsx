import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ArticleService from "../service/article";
import { useDispatch, useSelector } from "react-redux";
import {
    getArticleDetailFailure,
    getArticleDetailStart,
    getArticleDetailSuccess,
} from "../slice/article";
import moment from "moment"; //chislolarni chiroyli formatga o'girib beradi masalan hozir serverdan keletgan update, greatedlar hunuk bunaqa formatda>> 2024-01-04T00:52:58.600Z 2024-01-04T00:52:58.600Z shu hunuk formatni 04 Jan, 2024 shunaqa chiroyli format qilib beradi
import { Loader } from "../ui";

const ArticleDetail = () => {
    const { slug } = useParams();
    // console.log(slug);//sluglar yani har biri
    const dispatch = useDispatch();
    const { articleDetail, isLoading } = useSelector((state) => state.article);
    console.log(articleDetail); //slice papkadagi article.jsdan nima keltganini ko'tish uchun

    useEffect(() => {
        const getArticleDetail = async () => {
            dispatch(getArticleDetailStart());

            try {
                const response = await ArticleService.getArticleDetail(slug);
                dispatch(getArticleDetailSuccess(response.article)); //yani bu payload slice papkadagi article.jsdagi article nomli ona reducer funksiyani bolasi getArticleDetailSuccess funksiyani payloadiga tushadi object
                // console.log(response); //slugni yani articlelarni bittasini serverdan kelgan kelmaganligini alohida ko'rish uchun
            } catch (error) {
                dispatch(getArticleDetailFailure());
            }
        };
        getArticleDetail();
    }, [slug]);

    //serverdan narsalar keltganda loader bo'lishi muhum ekan server loader bo'lmasa kutish vaqtida reading bilan muammo chiqarib error reading berarkan shu sabab loader yahshi kutib turadi

    return isLoading ? (
        <Loader />
    ) : (
        articleDetail !== null && (
            // yani agar serverdan get qiliadigan bu articleDetail null bo'lsa bu returinni ishlatma null bo'lmasa ishlat shu sabab yani boshida serverdan malumot kelguncha null ishlagani sabab reading error chiqarkan
            <div className="text-muted">
                <div className="py-3 mb-4  rounded-3">
                    <div className="container-fluid pb-5">
                        <h1 className="display-5 fw-bold">
                            {articleDetail.title}
                        </h1>
                        <p className="col-md-8 fs-4">
                            {articleDetail.description}
                        </p>
                        <p className="text-muted">
                            <span className="fw-bold">Created at:</span>{" "}
                            {moment(articleDetail.createdAt).format(
                                "DD MMM, YYYY"
                            )}
                        </p>
                        <div class="col-md-6">
                            <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                <div class="col p-4 d-flex flex-column position-static">
                                    <strong class="d-inline-block mb-2 text-primary text-uppercase">
                                        {articleDetail.author.username}
                                    </strong>
                                    <p class="card-text mb-auto">
                                        {articleDetail.author.bio}Serverda bio
                                        yo'q Lorem ipsum dolor, sit amet
                                        consectetur adipisicing elit. Reiciendis
                                        minima optio iste, impedit unde ipsum
                                        quia adipisci deleniti veniam excepturi
                                        qui rerum vero.
                                    </p>
                                </div>
                                <div class="col-auto d-none d-lg-block">
                                    <svg
                                        class="bd-placeholder-img"
                                        width="200"
                                        height={"100%"}
                                        xmlns="http://www.w3.org/2000/svg"
                                        role="img"
                                        aria-label="Placeholder: Thumbnail"
                                        preserveAspectRatio="xMidYMid slice"
                                        focusable="false"
                                    >
                                        <title>Placeholder</title>
                                        <rect
                                            width="100%"
                                            height="100%"
                                            fill="#55595c"
                                        ></rect>
                                        <text
                                            x={"45%"}
                                            y={"53%"}
                                            fill={"#fff"}
                                            className="fs-2 text-uppercase p-0 m-0"
                                        >
                                            {articleDetail.author.username[0]}
                                        </text>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div>{articleDetail.body}</div>
                    </div>
                </div>

                {/* <div className="p-5 mb-4 bg-dark rounded-3">
                    <div classNameName="container-fluid py-5">
                        <h1 className="display-5 fw-bold text-capitalize">
                            {articleDetail.title}
                        </h1>
                        <p className="col-md-8 fs-4">
                            {articleDetail.description}
                        </p>

                        <div className="d-flex gap-3">
                            <p className="text-muted">
                                {" "}
                                <span className="fw-bold">
                                    Created at:{" "}
                                </span>{" "}
                                {moment(articleDetail.createdAt).format(
                                    "DD MMM, YYYY"
                                )}
                            </p>
                        </div>
                    </div>

                    <div className="">{articleDetail.body}</div>
                </div> */}
            </div>
        )

        // darsda serverda keletgan objectda yani articleda id bor edi lekin man bu darsni qiletganimda serverdan idmas slug bilan qilindi chunki id yo'q edi agar bu loyiha prtfolioga qo'yiletganda shu masalada hato bo'lsa serverdan qarash kerak aagar ungacha id qo'yilsa yoki o'zgarishlar bo'lsa to'g'irlash kerak
    );
};

export default ArticleDetail;
