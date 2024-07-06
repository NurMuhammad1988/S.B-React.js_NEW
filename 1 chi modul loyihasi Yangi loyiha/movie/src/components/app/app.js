import { Component } from "react";
import AppFilter from "../app-filter/app-filter";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import MovieList from "../movie-list/movie-list";
import MoviesAddForm from "../movies-add-form/movies-add-form";
import { v4 as uuidv4 } from "uuid";
import "./app.css";
//// Bu joyda kodlarni yahshiroq ko'rish tushunish uchun alohida papka qilib commentsiz holatga keltirildi
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
            
                {
                    name: "Emire of Usman",
                    viewers: 9288,
                    favorite: false,
                    like: false,
                    id: 1,
                },
                {
                    name: "Ertugrul",
                    viewers: 7291,
                    favorite: false,
                    like: false,
                    id: 2,
                },
                {
                    name: "Omar",
                    viewers: 11091,
                    favorite: false,
                    like: false,
                    id: 3,
                },

                {
                    name: "Iskanja",
                    viewers: 212,
                    favorite: false,
                    like: false,
                    id: 4,
                },
                {
                    name: "Istanbul",
                    viewers: 142,
                    favorite: false,
                    like: false,
                    id: 5,
                },

                {
                    name: "Qatar",
                    viewers: 574,
                    favorite: false,
                    like: false,
                    id: 6,
                },
                {
                    name: "Doha",
                    viewers: 465,
                    favorite: false,
                    like: false,
                    id: 7,
                },
            ],

            term: "",
            filter: "all",
        };
    }

    onDelete = (id) => {
        this.setState(({ data }) => ({
            data: data.filter((c) => c.id !== id),
        }));
    };

    addForm = (item) => {
        const newItem = {
            name: item.name,
            viewers: item.viewers,
            id: uuidv4(),
            favorite: false,
            like: false,
        };
        this.setState(({ data }) => ({
            data: [...data, newItem],
        }));
    };

    onToggleProp = (id, prop) => {
        this.setState(({ data }) => ({
            data: data.map((item) => {
                if (item.id === id) {
                    return { ...item, [prop]: !item[prop] };
                }
                return item;
            }),
        }));
    };

    searchHandler = (arr, term) => {
        if (term.length === 0) {
            return arr;
        }

        return arr.filter((item) => item.name.toLowerCase().indexOf(term) > -1);
    };

    updateTermHandler = (term) => {
        this.setState({ term });
    };

    filterHandler = (arr, filter) => {
        switch (filter) {
            case "popular":
                return arr.filter((c) => c.like);
            case "mostViewers":
                return arr.filter((c) => c.viewers > 800);
            default:
                return arr;
        }
    };

    updateFilterHandler = (filter) => this.setState({ filter });

    render() {
        const { data, term, filter } = this.state;

        const allMoviesCount = data.length;
        const favoriteMoviesCount = data.filter((c) => c.favorite).length;
        const visibleData = this.filterHandler(
            this.searchHandler(data, term),
            filter
        );

        return (
            <div className="app font-monospace">
                <div className="content">
                    <AppInfo
                        allMoviesCount={allMoviesCount}
                        favoriteMovieCount={favoriteMoviesCount}
                    />

                    <div className="search-panel">
                        <SearchPanel
                            updateTermHandler={this.updateTermHandler}
                        />
                        <AppFilter
                            filter={filter}
                            updateFilterHandler={this.updateFilterHandler}
                        />
                    </div>
                    <MovieList
                        data={visibleData}
                        onDelete={this.onDelete}
                        onToggleProp={this.onToggleProp}
                    />

                    <MoviesAddForm addForm={this.addForm} />
                </div>
            </div>
        );
    }
}

export default App;
