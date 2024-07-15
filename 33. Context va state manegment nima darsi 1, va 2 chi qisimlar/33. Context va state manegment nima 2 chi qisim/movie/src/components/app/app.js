////33. Context va state manegment nima 2 chi qisim
////33. Context va state manegment nima 2 chi qisim
////33. Context va state manegment nima 2 chi qisim
////33. Context va state manegment nima 2 chi qisim

import { useState, useEffect, useContext } from "react";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import MovieList from "../movie-list/movie-list";
import MoviesAddForm from "../movies-add-form/movies-add-form";
import { v4 as uuidv4 } from "uuid";
import { Context } from "../../context";
import "./app.css";

33. Context va state manegment nima? darsi qayta qayta qilinsin manimcha shundaham baloni tushunmasen kerey!!!


const App = () => {
    const [data, setData] = useState([]);
    const [term, setTerm] = useState("");
    const [filter, setFilter] = useState("all");
    const [isLoading, setIsLoading] = useState(false);

    const {state, dispatch} = useContext(Context)


    const onDelete = (id) => {
        const newArr = data.filter((c) => c.id !== id);
        setData(newArr);
    };

    const addForm = (item) => {
        const newItem = {
            name: item.name,
            viewers: item.viewers,
            id: uuidv4(),
            favourite: false,
            like: false,
        };
        const newArr = [...data, newItem];
        setData(newArr);
    };

    const onToggleProp = (id, prop) => {
        const newArr = data.map((item) => {
            if (item.id === id) {
                return { ...item, [prop]: !item[prop] };
            }
            return item;
        });
        setData(newArr);
    };

    const searchHandler = (arr, term) => {
        if (term === 0) {
            return arr;
        }

        return arr.filter((item) => item.name.toLowerCase().indexOf(term) > -1);
    };

    const filterHandler = (arr, filter) => {
        switch (filter) {
            case "popular":
                return arr.filter((c) => c.like);
            case "mostViewers":
                return arr.filter((c) => c.viewers > 800);
            default:
                return arr;
        }
    };

    const updateTermHandler = (term) => setTerm(term);

    const updateFilterHandler = (filter) => setFilter(filter);

    useEffect(() => {
        //user saytga kirgandan ishlashi uchun
        setIsLoading(true);
        ////fetch api yani server bilan ishlash uchun backent bilan serverni ulaydigan narsa yani serverlarni shunaqa linkda yani qayerdadur serverda ling adress bo'ladi fetch api shu server ling bilan frontendni bir biriga bo'glaydi
        fetch("https://jsonplaceholder.typicode.com/todos?_start=0&_limit=5")
            //// servercha endi jsonleceholderdan kelepti shu joyi zo'r chiqipti//fetch api aftamatik tarzda get so'rov jo'natadi
            .then((response) => response.json())
            .then((json) => {
                const newArr = json.map((item) => ({
                    name: item.title,
                    id: item.id,
                    viewers: item.id * 20,
                    favourite: false,
                    like: false,
                }));
                setData(newArr);
                dispatch({type: "GET_DATA", payLoad: newArr})
            })
            .catch((err) => console.log(err))
            .finally(() => setIsLoading(false));
    }, []); //[]<<yani use effectni ikkinchi parametri qaramlik bu holatda nimaga qaram???

    return (
        <div className="app font-monospace">
            <div className="content">
                <AppInfo
                    allMoviesCount={data.length}
                    favouriteMovieCount={data.filter((c) => c.favourite).length}
                />
                <div className="search-panel">
                    <SearchPanel updateTermHandler={updateTermHandler} />
                    <AppFilter
                        filter={filter}
                        updateFilterHandler={updateFilterHandler}
                    />
                </div>

                {isLoading && "Loading.."}
                {/* serverdan malumot kelguncha ishlab turadung loading string malumoti yani server kechiksa loading... chiqib turadi */}

                <MovieList
                    onToggleProp={onToggleProp}
                    data={filterHandler(searchHandler(data, term), filter)}
                    onDelete={onDelete}
                />
                <MoviesAddForm addForm={addForm} />
            </div>
        </div>
    );
};

export default App;
