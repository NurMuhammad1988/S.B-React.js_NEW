import { Component } from "react";
import "./movie-list-item.css";

////Class component bilan qilingani
class MovieListItem extends Component {
    constructor(props) {
        super(props);
        this.state = { favorite: false }; //endi app filedadi datani hamma idisi false bo'ladi
    }

    onFavorite = () => {
        // this.setState(prevState => ({
        //     favorite: !prevState.favorite
        // }))

        this.setState(({ favorite }) => ({
            favorite: !favorite,
        }));
    };

    render() {
        const { name, viewers } = this.props;
        const { favorite } = this.state; //favoriteni statedan chaqirish
        return (
            <li
                className={`list-group-item d-flex justify-content-between ${
                    favorite && "favorite"
                }`}
            >
                {/* favorite bu holatda cssdagi style class va data serverda massiv ichida va movielistda map qilinib bu joyga jo'natilgan va distruptatsa bilan el qatori chaqirilgan va if elsni qisqartirib yozish bilan agar true bo'lsa favorite classini qo'sh deyildi shunda data massivda malumot true bo'lsa favorite classi qo'shiladi // interpalatsa bilan becetni ichida agar favorite classi true bo'lsa favorute classini qo'shgin deyildi>>>${ favorite && "favorite" } bu birinchi yo'li hissoblanadi  */}
                <span className="list-group-item-label">{name}</span>

                {/*  endi namelar dynamic tarzda movielist.js filedan kelepti stylelari bilan birga */}

                <input
                    type="number"
                    className="list-group-item-input"
                    defaultValue={viewers}
                    // endi viewerslar dynamic tarzda movielist.js filedan kelepti stylelari bilan birga
                />

                <div className="d-flex justify-content-center align-items-center">
                    <button
                        type="button"
                        className="btn-cookie btn-sm"
                        onClick={this.onFavorite}
                    >
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button" className="btn-cookie btn-sm">
                        <i className="fas fa-trash"></i>
                    </button>

                    <i className="fas fa-star"></i>
                </div>
            </li>
        );
    }
}

export default MovieListItem;
////////////////////////////////////////////////////////////////////////////////////////////////////////
////oddiy arrow funsction bilan qilingani
// const MovieListItem = ({ name, viewers, favorite }) => {

//     return (
//         <li
//             className={`list-group-item d-flex justify-content-between ${ favorite && "favorite" }`}>
//                 {/* favorite bu holatda cssdagi style class va data serverda massiv ichida va movielistda map qilinib bu joyga jo'natilgan va distruptatsa bilan el qatori chaqirilgan va if elsni qisqartirib yozish bilan agar true bo'lsa favorite classini qo'sh deyildi shynda data massivda malumot tru bo'lsa favorite classi qo'shiladi // interpalatsa bilan becetni ichida agar favorite classi true bo'lsa favorute classini qo'shgin deyildi>>>${ favorite && "favorite" } buni ishlashiga sabab classNamega yozilganida bu birinchi yo'li hissoblanadi  */}
//             <span className="list-group-item-label">{name}</span>

//             {/*  endi namelar dynamic tarzda movielist.js filedan kelepti stylelari bilan birga */}

//             <input
//                 type="number"
//                 className="list-group-item-input"
//                 defaultValue={viewers}
//                 // endi viewerslar dynamic tarzda movielist.js filedan kelepti stylelari bilan birga
//             />

//             <div className="d-flex justify-content-center align-items-center">
//                 <button type="button" className="btn-cookie btn-sm">
//                     <i className="fas fa-cookie"></i>
//                 </button>

//                 <button type="button" className="btn-cookie btn-sm">
//                     <i className="fas fa-trash"></i>
//                 </button>

//                 <i className="fas fa-star"></i>
//             </div>
//         </li>
//     );
// };

// export default MovieListItem;
