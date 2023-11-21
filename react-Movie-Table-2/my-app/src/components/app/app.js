import "./app.css";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import MovieList from "../movie-list/movie-list";
import MoviesAddForm from "../movies-add-form/movies-add-form";
const App = () => {

    const data =[//dars uchun test server yani server eng yuqorida bo'lishi kerak yani shunda pastdagi content clasli divdagi filelargaham bu serverni chaqirsa bo'ladi bu server array yani massiv
    {name:"Empire of Osman", viewers:988, favourite:false},
    {name:"The great Seljuks", viewers:1091,favourite:true},
    {name:"Ertugrul", viewers:789,favourite:false},
    {name:"The great Seljuks Uyanish", viewers:977,favourite:true},
    {name:"Salahuddin Quddus Fatihi", viewers:99977,favourite:true},
]

    return (
        <div className="app font-monospace">
            <div className="content">
                <AppInfo />
                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter  />
                </div>
                <MovieList data={data}/>
                {/* yani data yuqoridagi  serverdagi o'zgaruvchi serverni eng yuqoriga yozib  severni pastdagi hohlagan componentga shu tarzda chaqirib ishlatish mumkun */}
                <MoviesAddForm/>
            </div>
        </div>
    );
};
export default App;
