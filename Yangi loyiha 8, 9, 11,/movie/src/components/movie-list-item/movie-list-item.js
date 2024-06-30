import "./movie-list-item.css";

const MovieListItem = ({ name, viewers }) => {
    // console.log(props);
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="list-group-item-label">{name}</span>

            {/*  endi namelar dynamic tarzda movielist.js filedan kelepti stylelari bilan birga */}

            <input
                type="number"
                className="list-group-item-input"
                defaultValue={viewers}
                // endi viewerslar dynamic tarzda movielist.js filedan kelepti stylelari bilan birga
            />

            <div className="d-flex justify-content-center align-items-center">
                <button type="button" className="btn-cookie btn-sm">
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button" className="btn-cookie btn-sm">
                    <i className="fas fa-trash"></i>
                </button>

                <i className="fas fa-star"></i>
            </div>
        </li>
    );
};

export default MovieListItem;
