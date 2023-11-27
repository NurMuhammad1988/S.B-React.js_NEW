import { Component } from "react";
import "./movie-list-item.css";

class MovieListItem extends Component {
    //bu dars class component orqali qilingani huddi shuni san function component orqaliham bajarib qo'y pastda turipti slashlardan keyin
    constructor(props) {
        super(props);
        this.state = { favourite: false, like: false };
    }

    onFavourite = () => {
        this.setState(({ favourite }) => ({
            favourite: !favourite,
        }));
    };

    onLike = () => {
        this.setState(({ like }) => ({
            like: !like,
        }));
    };

    render() {
        const { name, viewers,onDelete } = this.props;
        const { favourite, like } = this.state;

        return (
            // <li className={classNames}>//bu ikkinchi yo'lini jsx ichida yozilishi
            <li
                className={`list-group-item d-flex justify-content-between ${
                    favourite && "favourite"
                } ${like && "like"}`}
            >
                {/* tepadagi birinchi yo'li */}
                <span onClick={this.onLike} className="list-group-item-label">
                    {name}
                </span>
                <input
                    type="number"
                    className="list-group-item-input"
                    defaultValue={viewers}
                />
                <div className="d-flex justify-content-center .align-items-center">
                    <button
                        type="button"
                        className="btn-cookie btn-sm"
                        onClick={this.onFavourite}
                    >
                        <i className="fas fa-cookie"></i>
                    </button>
                    <button type="button" className="btn-trash btn.sm" onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        );
    }
}

export default MovieListItem;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const MovieListItem = ({ name, viewers, favourite }) => {
//     // console.log(favourite);

//     //// let classNames=`list-group-item d-flex justify-content-between`
//     //// if(favourite){
//     // //     classNames+= " favourite"
//     // // }
//     ////  bu ikkinchi yo'li yani o'zgaruvchi yaratib qilish yo'li lekin birinchi yani manabu yo'li=> oson va tushunarli  <li className={`list-group-item d-flex justify-content-between ${favourite && "favourite"}`}> bu jsxni ichida yozilgan pastda

//     return (
//         // <li className={classNames}>//bu ikkinchi yo'lini jsx ichida yozilishi
//         <li
//             className={`list-group-item d-flex justify-content-between ${
//                 favourite && "favourite"
//             }`}
//         >
//             {/* tepadagi birinchi yo'li */}
//             <span className="list-group-item-label">{name}</span>
//             <input
//                 type="number"
//                 className="list-group-item-input"
//                 defaultValue={viewers}
//             />
//             <div className="d-flex justify-content-center .align-items-center">
//                 <button type="button" className="btn-cookie btn-sm">
//                     <i className="fas fa-cookie"></i>
//                 </button>
//                 <button type="button" className="btn-trash btn.sm">
//                     <i className="fas fa-trash"></i>
//                 </button>
//                 <i className="fas fa-star"></i>
//             </div>
//         </li>
//     );
// };

// export default MovieListItem;
