import { useSelector } from "react-redux";
import { Loader } from "../ui";
import { useNavigate } from "react-router-dom";

const Main = () => {
    const { articles, isLoading } = useSelector((state) => state.article);
    const navigate = useNavigate();

    return (
        <>
            {isLoading && <Loader />}
            {/* loader ui papkani ichida yozilgan bootstrapdan chaqirilgan serverdan malumot kelgancha loader ishlab turadi yani agar isloading yani article.jsda yozilgan reducer funksiyani true holatda bo'lsa yani serverdan malumotlar keletgan bo'lsa loaderni ishlat  */}

            <div className="album py-5 ">
                <div>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {articles.map((article) => {
                            // article bu holatda slicedan keletgan article.jsni ichidagi reducer funksiya bu reducer funksiyada name: "article" qilib funksiyani nomi berilgan va nima ish bajarilishi o'sha funksiyada aytib qo'yilgan shu funksiyani nomi bo'yicha chaqirib serverdan get qilgan itemlarini map qilib yani tsikilga qo'yib chaqirib olindi va ishlov berildi yani serverdan keladigan objectni ichki urllariga qarab chaqirilib class stylelar berildi
                            return (
                                <div className="col" key={article.slug}>
                                    {/*  // darsda serverda keletgan objectda yani articleda id bor edi lekin man bu darsni qiletganimda serverdan idmas slug bilan qilindi chunki id yo'q edi agar bu loyiha prtfolioga qo'yiletganda shu masalada hato bo'lsa serverdanq arash kerak aagar ungacha id qo'yilsa yoki o'zgarishlar bo'lsa to'g'irlash kerak */}
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
                                            <rect
                                                width="100%"
                                                height="100%"
                                                fill="#55595c"
                                            ></rect>
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
                                                        navigate(
                                                            `/article/${article.slug} `
                                                        )
                                                    }
                                                    // bu article diynamic berildi yani bu viev texti bor buttonga klik bo'lganda article ichidagi sluglarga olib beradi va navigate sabab article-detail.jsxga olib boradi
                                                    //  // darsda serverda keletgan objectda yani articleda id bor edi lekin man bu darsni qiletganimda serverdan idmas slug bilan qilindi chunki id yo'q edi agar bu loyiha prtfolioga qo'yiletganda shu masalada hato bo'lsa serverdan qarash kerak aagar ungacha id qo'yilsa yoki o'zgarishlar bo'lsa to'g'irlash kerak
                                                    type="button"
                                                    className="btn btn-sm btn-outline-success  text-white"
                                                >
                                                    View
                                                </button>

                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-outline-secondary  text-white"
                                                >
                                                    Edit
                                                </button>

                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-outline-danger  text-white"
                                                >
                                                    Delete
                                                </button>
                                            </div>

                                            <small className="text-white fw-bold text-capitalize  text-black">
                                                {article.author.username}
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Main;
