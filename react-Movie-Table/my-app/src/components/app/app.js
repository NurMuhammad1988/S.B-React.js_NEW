import "./app.css";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import MovieList from "../movie-list/movie-list";
import MoviesAddForm from "../movies-add-form/movies-add-form";
const App = () => {
    
    const data = [
        //dars uchun test server yani server eng yuqorida bo'lishi kerak yani shunda pastdagi content class li divdagi filelargaham bu serverni chaqirsa bo'ladi bu server array yani massiv shuni uchun tepada turish kerak yani kod o'qish qoidasiga muofiq
        { name: "Empire of Osman", viewers: 988, favourite: false, id: 1 },
        { name: "The great Seljuks", viewers: 1091, favourite: true, id: 2 },
        { name: "Ertugrul", viewers: 789, favourite: false, id: 3 },
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
    ];

    return (
        <div className="app font-monospace">{/*yani bu joyda font-monospase bu shrift chunku bu htmlda cdn.js orqali linki ulab qo'yilgan shu uchun font awesomeni classlari chaqirilganda yani clasnamega yozilganda ishlayveradi */}
            <div className="content"> {/*bu content clasname asosiy content yani saytni asosi hissobladi yani bu asosiy app.jsda bo'ladi */}
                <AppInfo />
                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>
                <MovieList data={data} />
                {/* yani data yuqoridagi  serverdagi o'zgaruvchi serverni eng yuqoriga yozib  severni pastdagi hohlagan componentga shu tarzda chaqirib ishlatish mumkun */}
                <MoviesAddForm />
            </div>
        </div>
    );
};
export default App;
