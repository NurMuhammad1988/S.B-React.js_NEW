import "./movie-list.css";

import MovieListItem from "../movie-list-item/movie-list-item";
import { useContext } from "react";
import { Context } from "../../context";
import { searchHandler, filterHandler } from "../../utilities/data";

const MovieList = ({  onToggleProp }) => {

    const { state, dispatch } = useContext(Context);
    const data = filterHandler(
        searchHandler(state.data, state.term),
        state.filter
    );

    return (
        <ul className="movie-list">
            {data.map((item) => (
                <MovieListItem
                    key={item.id}
                    name={item.name}
                    viewers={item.viewers}
                    favourite={item.favourite}
                    like={item.like}
					id={item.id}
                />
            ))}
        </ul>
    );
};

export default MovieList;

// 34. useContext hook & Reducers. 09:30 chi minutda qoldi