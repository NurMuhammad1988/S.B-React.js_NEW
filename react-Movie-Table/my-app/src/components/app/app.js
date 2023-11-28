import "./app.css";
import { Component } from "react";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import MovieList from "../movie-list/movie-list";
import MoviesAddForm from "../movies-add-form/movies-add-form";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                //dars uchun test server yani server eng yuqorida bo'lishi kerak yani shunda pastdagi content class li divdagi filelargaham bu serverni chaqirsa bo'ladi bu server array yani massiv shuni uchun tepada turish kerak yani kod o'qish qoidasiga muofiq
                {
                    name: "Empire of Osman",
                    viewers: 988,
                    favourite: false,
                    id: 1,
                },
                {
                    name: "The great Seljuks",
                    viewers: 1091,
                    favourite: true,
                    id: 2,
                },
                {
                    name: "Kurulis Ertugrul",
                    viewers: 789,
                    favourite: false,
                    id: 3,
                },
                {
                    name: "The great Seljuks Uyanish",
                    viewers: 977,
                    favourite: true,
                    id: 4,
                },
                {
                    name: "Salahuddin Quddus Fatihi",
                    viewers: 99977,
                    favourite: true,
                    id: 5,
                },
            ],
        };
    }

    onDelete = (id) => {
        // console.log(id);
        this.setState(({ data }) => ({
            data: data.filter((c) => c.id !== id),

            //const index = data.findIndex((c) => c.id === id);//mutable yani o'zgaruvchan
            // data.splice(index,1)//mutable yani o'zgaruvchan

            // const newArray = data.filter((c) => c.id !== id);//imutable yani o'zgarmas

            // return {
            //     data: data.filter((c) => c.id !== id),
            // };
        }));
    };

    addForm = (item) => {
        this.setState(({ data }) => ({
            data: [...data, item],
        }));
    };

    render() {
        const { data } = this.state;

        return (
            <div className="app font-monospace">
                {/*yani bu joyda font-monospase bu shrift chunku bu htmlda cdn.js orqali linki ulab qo'yilgan shu uchun font awesomeni classlari chaqirilganda yani clasnamega yozilganda ishlayveradi */}
                <div className="content">
                    {" "}
                    {/*bu content clasname asosiy content yani saytni asosi hissobladi yani bu asosiy app.jsda bo'ladi */}
                    <AppInfo />
                    <div className="search-panel">
                        <SearchPanel />
                        <AppFilter />
                    </div>
                    <MovieList data={data} onDelete={this.onDelete} />
                    {/* yani data yuqoridagi  serverdagi o'zgaruvchi serverni eng yuqoriga yozib  severni pastdagi hohlagan componentga shu tarzda chaqirib ishlatish mumkun */}
                    <MoviesAddForm addForm={this.addForm} />
                </div>
            </div>
        );
    }
}
export default App;
