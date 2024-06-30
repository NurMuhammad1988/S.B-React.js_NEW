import "./app.css";
import AppFilter from "../app-filter/app-filter";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import MovieList from "../movie-list/movie-list";
import MoviesAddForm from "../movies-add-form/movies-add-form";

const App = () => {
    const data = [
        //datani yani malumotlar bazasini Appda eng yuqoriga qo'yish kerak //bu local server yani real loyihalarda datalar serverda turadi darsda server yo'qligi sababli serverni qo'lada shunday yozib turuldi server doim hamma componentlardan yuqorida yozilishi kerak chunki agar data bu holatda Appni ichida ishlatilganda yuqorida yozlishi yani turishi kerak chunki datalar Appni ichida hohlagan componentda chaqirilishi mumkun shu sabab server tepada turishi kerak shudna pastda hohlagan componentda serverdan malumotlar chaqirilsa kod o'qish tartibi bo'yihca server kodlar birinchi o'qilib tayyor qilinib pastdagi comonentlarda ishlaydi (boradi) masalan user SearchPaneldagi inputdan malumot izlasa serverdan keladi server tepada tursa koddagi vazifalar bajarilib bo'linib SearchPnaeldan user malumot izlaganda malumotlar tayyor bo'lib turadi qolgan componentlardaham shunga o'hshash vazifalar bor //serverdan malumotlar massivni ichida object bo'lib keladi
        { name: "Emire of Usman", viewers: 988 },
        { name: "Ertugrul", viewers: 791 },
        { name: "Omar", viewers: 1091 },
    ];

    return (
        <div className="app font-monospace">
            <div className="content">
                <AppInfo />

                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>
                <MovieList data={data} />
                <MoviesAddForm />
            </div>
        </div>
    );
};

export default App;
