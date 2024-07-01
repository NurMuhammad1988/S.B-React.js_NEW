import "./app.css";
import AppFilter from "../app-filter/app-filter";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import MovieList from "../movie-list/movie-list";
import MoviesAddForm from "../movies-add-form/movies-add-form";

const App = () => {
    const data = [
        //datani yani malumotlar bazasini Appda eng yuqoriga qo'yish kerak //bu local server// yani real loyihalarda datalar serverda turadi darsda server yo'qligi sababli serverni qo'lda shunday yozib turuldi server doim hamma componentlardan yuqorida yozilishi kerak chunki agar data bu holatda Appni ichida ishlatilganda yuqorida yozlishi yani turishi kerak chunki datalar Appni ichida hohlagan componentda chaqirilishi mumkun shu sabab server tepada turishi kerak shunda pastda hohlagan componentda serverdan malumotlar chaqirilsa kod o'qish tartibi bo'yihca server kodlar birinchi o'qilib tayyor qilinib pastdagi comonentlarda ishlaydi (boradi) masalan user SearchPaneldagi inputdan malumot izlasa serverdan keladi server tepada tursa koddagi vazifalar bajarilib bo'linib SearchPnaeldan user malumot izlaganda malumotlar tayyor bo'lib turadi qolgan componentlardaham shunga o'hshash vazifalar bor //serverdan malumotlar massivni ichida (toString and so on) object bo'lib keladi
        { name: "Emire of Usman", viewers: 988, favorite: false, id: 1 },
        { name: "Ertugrul", viewers: 791, favorite: false, id: 2 },
        { name: "Omar", viewers: 1091, favorite: true, id: 3 },
        // { name: "Alparslan", viewers: 10911, favorite: true },
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
                {/* data yani servercha MovieListga huddiki props qilib berildi */}
                <MoviesAddForm />
            </div>
        </div>
    );
};

export default App;

////12. Loyiha. Ro'yhat algoritmi
//datalarga unikal yani unique "key" berilishi kerak bo'lmasa react hamma datalarni qqaytadan ishlab domga beradi shu sabab propslarga yani datani qiymatlariga unique "key" id berilsa dataga yangi qiymatqo'shilganda yoki o'chirilganda react faqatr idlariga qarab ish qiladi yani yangi qo'shilgan idni o'zinigina qo'shadi yoki udalit qilingda idisiga qarab udalit qilib datani boshqa elementrlariga yani unijak keyi idsi bor elementlariga teginmeydi yani qaytada dom element uchun qurmaydi//yani componenetlarga key berish kerak yani datalarga
//datalarga id berish key degani yani idlar yani iddagi numberlar key hissoblanadi (yani react datada o'zgarish sodir bo'lganda qayta qurmaslik uchun) va bu key data chaqirilib map qilinib itemlari berilgan joyda keylarham berilishi kerak (movielist.js ga qaralsin)

//agar user malumot qo'shsa idlar qanday beriladi??? bu uchun kutubhonalar bor user dataga yani serverga qo'shadigan malumotlarga id qo'yib beradigan kutubhonalar bor

////keyni o'rniga massiv index qaytarishi yani 0 dan???udalit qilinganda datani qiymatlarini joylari o'zgarib ketadi va data buzulib ketadi
////12. Loyiha. Ro'yhat algoritmi darsi natijasi appdagi datadagi idlarda!!!
////browserdagi Расширенияda React Developer Tools nopmli tools bor shu exteyshin yoniq bo'lsa browserda consolelardan eng ohirida components va  Profiler bo'limlari ochiladi shu bo'limlarda yani Componentsda react loyihani browserda qaysi element qanaqa componentsda ekanligini va reactda qilingan saytlarni boshqa malumotlarini bemmalol ko'rish mumkun
