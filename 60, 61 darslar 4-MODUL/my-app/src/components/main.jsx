import { useSelector } from "react-redux";

const Main = () => {
    const { articles } = useSelector((state) => state.article);

    return (
        <div className="container">
            <div className="album py-5 ">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {articles.map((article) => {
                            // article bu holatda slicedan keletgan article.jsni ichidagi reducer funksiya bu reducer funksiyada name: "article" qilib funksiyani nomi berilgan va nima ish bajarilishi o'sha funksiyada aytib qo'yilgan shu funksiyani nomi bo'yicha chaqirib serverdan get qilgan itemlarini map qilib yani tsikilga qo'yib chaqirib olindi va ishlov berildi yani serverdan keladigan objectni ichki urllariga qarab chaqirilib class stylelar berildi
                            return (
                                <div className="col" key={article.slug}>
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
                                            <p className="card-text fw-bold text-capitalize text-secondary ">
                                                {article.title}
                                                {/* serverdan keletgan articlelarni titlelari yani bu serveragi objectni urllari desaham bo'ladi */}
                                            </p>

                                            <p className="card-text  text-secondary ">
                                                {article.description}
                                                {/* serverdan keletgan articlelarni titlelari yani bu serveragi objectni urllari desaham bo'ladi */}
                                            </p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group">
                                                    <button
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
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;

// import { useSelector } from 'react-redux';

// const Main = () => {
//   const { articles } = useSelector(state => state.article);
//   console.log(articles);
//   const content = articles.map((item, index) => (
//     <div className='col' key={index}>
//       <div className='card shadow-sm bg-secondary'>
//         <svg
//           className='bd-placeholder-img card-img-top'
//           width='100%'
//           height='225'
//           xmlns='http://www.w3.org/2000/svg'
//           role='img'
//           aria-label='Placeholder: Thumbnail'
//           preserveAspectRatio='xMidYMid slice'
//           focusable='false'
//         >
//           <rect width='100%' height='100%' fill='#55595c'></rect>
//         </svg>
//         <div>
//           <h1>{item?.author?.username}</h1>
//         </div>
//         <p className='card-text '>{item.title}</p>
//         <div className='card-body'>
//           <p>{item?.body}</p>
//           <div className='d-flex justify-content-between align-items-center'>
//             <div className='btn-group'>
//               <button
//                 type='button'
//                 className='btn btn-sm btn-outline-secondary'
//               >
//                 View
//               </button>
//               <button
//                 type='button'
//                 className='btn btn-sm btn-outline-secondary'
//               >
//                 Edit
//               </button>
//             </div>
//             <small className='text-muted'>9 mins</small>
//           </div>
//           <div>
//             <span>view count: {item?.favoritesCount}</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   ));
//   return (
//     <div className='container'>
//       <div className='album py-5 '>
//         <div className='container'>
//           <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
//             {content}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Main;
