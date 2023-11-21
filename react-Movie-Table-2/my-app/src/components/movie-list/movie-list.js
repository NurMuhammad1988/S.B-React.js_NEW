import "./movie-list.css";
import MovieListItem from "../movie-list-item/movie-list-item";

const MovieList = ({ data }) => {
    //bu data app.jsdagi server sifatida yozilgan data o'zgaruvchi
    // console.log(props);
    return (
        <ul className="movie-list">
            {/* yani map orqali intirigatsa qilinib sikilga qo'yilib datadagi malumotlar movilistitemga jo'natildi 
            desaham bo'ladi  */}
            {data.map((item) => (
                <MovieListItem name={item.name} viewers={item.viewers} favourite={item.favourite} />

                // <MovieListItem {...item} />
                //<MovieListItem {...item} /> manashu ko'rinishi object ochib interpalatsa orqali chaqirish deyiladi yani oson kam kod yoziladigan yo'li
            ))}

            {/* <MovieListItem name="Emire of Osman" viewers={811} />
            <MovieListItem name="Ertugrul" viewers={890} />
            <MovieListItem name="The great Seljuks" viewers={999} /> */}
        </ul>
    );
};

export default MovieList;
