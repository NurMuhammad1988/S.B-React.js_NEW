import { Component } from "react";
import AppFilter from "../app-filter/app-filter";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import MovieList from "../movie-list/movie-list";
import MoviesAddForm from "../movies-add-form/movies-add-form";
import { v4 as uuidv4 } from "uuid";
import "./app.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                //datani yani malumotlar bazasini Appda eng yuqoriga qo'yish kerak //bu local server// yani real loyihalarda datalar serverda turadi darsda server yo'qligi sababli serverni qo'lda shunday yozib turuldi server doim hamma componentlardan yuqorida yozilishi kerak chunki agar data bu holatda Appni ichida ishlatilganda yuqorida yozlishi yani turishi kerak chunki datalar Appni ichida hohlagan componentda chaqirilishi mumkun shu sabab server tepada turishi kerak shunda pastda hohlagan componentda serverdan malumotlar chaqirilsa kod o'qish tartibi bo'yicha server kodlar birinchi o'qilib tayyor qilinib pastdagi comonentlarda ishlaydi (boradi) masalan user SearchPaneldagi inputdan malumot izlasa serverdan keladi server tepada tursa koddagi vazifalar bajarilib bo'linib SearchPnaeldan user malumot izlaganda malumotlar tayyor bo'lib turadi qolgan componentlardaham shunga o'hshash vazifalar bor //serverdan malumotlar massivni ichida (toString and so on) object bo'lib keladi
                {
                    name: "Emire of Usman",
                    viewers: 988,
                    favorite: false,
                    like: false,
                    id: 1,
                },
                {
                    name: "Ertugrul",
                    viewers: 791,
                    favorite: false,
                    like: false,
                    id: 2,
                },
                {
                    name: "Omar",
                    viewers: 1091,
                    favorite: false,
                    like: false,
                    id: 3,
                },
                // { name: "Alparslan", viewers: 10911, favorite: true, id: 972 },
            ],
        };
    }
    // const
    //

    onDelete = (id) => {
        //yani bu ondelete funksiyasi pastda movielistga props qilib jo'natildi
        // console.log("servercha");//logda nima vazifa bajarayotganini ko'rish uchun
        // console.log(id);//yani vu ondelete funksiyasi chaqirilgan trash classli buttonda qaysi idilarga bosilayotganini ko'rish uchun yozildi

        this.setState(({ data }) => ({
            //parametrdagi data yuqoridagi this.statega teng

            //HATO yani Mutable!!!
            // const index = data.findIndex((c) => c.id === id);
            // // console.log(index);
            // data.splice(index, 1 )//HATO yani Mutable!!!//datani to'g'ridan to'g'ro=i o'zgartirish bu esa reactda mumkun emas
            //HATO yani Mutable!!!

            /////////// immutable yani reactda o'zgaruvchini funksiya orqali o'zgartirish
            // const newArr = data.filter((c) => c.id !== id); //yani bu yangi data hissoblanadi yani data serverchani nusxalab massivda qaytaradi filter metodi//
            // // console.log(newArr); //yani newArr o'zgaruvchida endi data yani servercha bor ondelete chaqirilgan trash classli funksiyaga bosganda ondelete ishlab logda ko'rganda hamma datalar keletganini ko'rish mumkun//endi bu newArr o'zgaruvchi sababli ondelete funksiyasi ishlaganda yani ondelete funksiyasi props qilib MovieList jo'natilgan MovieListda map qilib MovieListItemda props qilib distruptatsa bilan chaqirilgan MovieListItemdagi trash classi bor button bosilganda MovieListItemga chaqirilgan datani name va viewers elementlari udalit bo'ladi
            // return {
            //     data: newArr, //yani endi yuoqridagi data servercha newArrga o'zgardi newarrda esa shu data filter qilingan filter qilinganda esa filter yangi massiv qaytaradi yani datani nusxaalab yangi massiv qaytaradi shunday yo'l bilan reactda datalarni yani o'zgaruvchilarni o'zgartirish mumkun
            // };
            // const newArr = data.filter((c) => c.id !== id); //yani bu yangi data hissoblanadi yani data serverchani nusxalab massivda qaytaradi filter metodi//
            // console.log(newArr); //yani newArr o'zgaruvchida endi data yani servercha bor ondelete chaqirilgan trash classli funksiyaga bosganda ondelete ishlab logda ko'rganda hamma datalar keletganini ko'rish mumkun//endi bu newArr o'zgaruvchi sababli ondelete funksiyasi ishlaganda yani ondelete funksiyasi props qilib MovieList jo'natilgan MovieListda map qilib MovieListItemda props qilib distruptatsa bilan chaqirilgan MovieListItemdagi trash classi bor button bosilganda MovieListItemga chaqirilgan datani name va viewers elementlari udalit bo'ladi

            data: data.filter((c) => c.id !== id), //yani endi yuoqridagi data servercha newArrga o'zgardi newarrda esa shu data filter qilingan filter qilinganda esa filter yangi massiv qaytaradi yani datani nusxaalab yangi massiv qaytaradi shunday yo'l bilan reactda datalarni yani o'zgaruvchilarni o'zgartirish mumkun

            /////////// immutable yani reactda o'zgaruvchini funksiya orqali o'zgartirish
        }));
    };

    // addForm = (e, item) => {
    //     e.preventDefault();

    //     this.setState(({ data }) => {

    //         //////MoviesAddForm da yozilgan addFormHnadler funksiyasidan oldingi holatdi
    //         const newArr = [...data, { ...item, id: uuidv4() }]; //yani uuidv4()<<kutubhonasi npm i uuid qilib  yuklanib shunday ishlatilsa dataga user tomonidan MoviesAddFormdagi inputlarga qo'shiladigan yangi massivlarga id qo'shib beradi shunda data serverchaga dynamic qo'shiladigan objectlarniham o'z aydisi bo'ladi
    //         // //// bu holatda addForm funksiyasi yaratilib parametriga event yani hodisa yani addForm funksiyasi chaqiriladigan joyda (inputlarda) sodir bo'ladigan hodisa va itemlar yani data serverchani itemlari chaqirilib keyin parametrdagi eventga hodisa ilindi yani e.preventDefault()qilib inputda hodisa sodir bo'lganda butun sayt qayta yuklanmaydigan qilindi va this.setstate qilinib dataservercha chaqirildi va  newArr nomli massiv yaratib unga datani malumotlari spread operator bilan nusxalab object qilib olindi chunki aslida data massiv edi ... uchta nuqta bilan endi object bo'ldi va datani itemlariham yani datani obshi ichidagi itemlari yani elementlariham spread operator bilan nusxalab object qilinib bu itemlarni idesi uuidv4 kutuhonasiga chaqirib qo'yildi shunda  yangi user tomonidan qo'shiladigan datani yangi elementlariga id uuidv4 tomonidan aftamatik tarzda unique yani har hil idlar qo'shiladi
    //         // // console.log([...data]); //yani 3 ta obarray ichidagi nusxalanagan objectlarni ko'rish mumkun

    //         return {
    //             data: newArr, //yani endi data servercha newArrga return qiladi nimani???MoviesAddFormdagi inputlarga qo'shiladigan yangi elementlarni data serverchaga qo'shadi va MoviesAddFormga yangi qo'shiladigan itemlar name va views qiymatlar sabab MovieListItemdagi style classlardan vorislanib MovieListItemga novbatdagi yani data serverchadagi 3 ta elementdan keyin 4 chi element bo'lib uchta elementdagdi stylelari bilan bir hil bo'lib qo'shiladi
    //         };
    //         //////MoviesAddForm da yozilgan addFormHnadler funksiyasidan oldingi holatdi

    //         // console.log(newArr);//data serverchaga yangi qo'shilayotgan elementlarni va idilarini array ichida object sifatida ko'rish uchun yozildi
    //     });
    //     // console.log(item);//dataga yangi qo'shiladigan elementni yani itemni ko'rish uchun
    // };

    addForm = (item) => {
        ////addForm funsksiyasini qisqartirib boshqacha??? yozish
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
    ////addForm funsksiyasini qisqartirib boshqacha??? yozish

    //////////////////////////////////////////////////////////////////////////////////////////////////
    // onToggleFavorite = (id) => {
    //     this.setState(({ data }) => ({
    //         //data statega teng yani server setState reactni metodi
    //         data: data.map((item) => {
    //             if (item.id === id) {
    //                 return { ...item, favorite: !item.favorite };
    //             }
    //             return item;
    //         }),
    //     }));
    // };kod ikkita bir hil bo'lib ketganligi uchun bitta onToggleProp nomli funksiya yozildi

    // onToggleLike = (id) => {
    //     this.setState(({ data }) => ({
    //         //data statega teng yani server setState reactni metodi
    //         data: data.map((item) => {
    //             if (item.id === id) {
    //                 return { ...item, like: !item.like };
    //             }
    //             return item;
    //         }),
    //     }));
    // };kod ikkita bir hil bo'lib ketganligi uchun bitta onToggleProp nomli funksiyaga yozildi
    // };

    onToggleProp = (id, prop) => {
        // console.log(prop);e.currentTarget.getAttribute("data-toggle")) da holatni ko'rish uchun yozildi
        this.setState(({ data }) => ({
            //data statega teng yani server setState reactni metodi
            data: data.map((item) => {
                if (item.id === id) {
                    return { ...item, [prop]: !item[prop] };
                }
                return item;
            }),
        }));
    };

    //////////////////////////////////////////////////////////////////////////////////////////////////

    render() {
        const { data } = this.state; //yani renderni ichiga yani jsx fileni ichiga props shunday this kalit so'zi bilan distruptatsa qilib chaqirilib jsxni ichida render bo'lib yani js kodlar html kodlar bilan birga ishlayveradi

        const allMoviesCount = data.length
        const favoriteMovieCount = data.filter(c => c.favorite).length 

        return (
            <div className="app font-monospace">
                <div className="content">
                    <AppInfo allMoviesCount={allMoviesCount} favoriteMovieCount={favoriteMovieCount} />

                    <div className="search-panel">
                        <SearchPanel />
                        <AppFilter />
                    </div>
                    <MovieList
                        data={data}
                        onDelete={this.onDelete}
                        onToggleProp={this.onToggleProp}
                    />
                    {/* data yani servercha MovieListga huddiki props qilib berildi va ondelete   funksiyasiham movielistga shunday jo'natildi yani class bo'lgani uchun this kalit so'zi bilan jo'natildi va movielsitda parametrida chaqirib olindi  */}
                    <MoviesAddForm addForm={this.addForm} />
                    {/* MoviesAddForm.jsga yuqoridagi addForm funksiyasi props sifatida jo'natildi  */}
                </div>
            </div>
        );
    }
}

export default App;

////12. Loyiha. Ro'yhat algoritmi
//datalarga unikal yani unique "key" berilishi kerak bo'lmasa react hamma datalarni qqaytadan ishlab domga beradi shu sabab propslarga yani datani qiymatlariga unique "key" id berilsa dataga yangi qiymatqo'shilganda yoki o'chirilganda react faqatr idlariga qarab ish qiladi yani yangi qo'shilgan idni o'zinigina qo'shadi yoki udalit qilingda idisiga qarab udalit qilib datani boshqa elementrlariga yani unijak keyi idsi bor elementlariga teginmeydi yani qaytada dom element uchun qurmaydi//yani componenetlarga key berish kerak yani datalarga
//datalarga id berish key degani yani idlar yani iddagi numberlar key hissoblanadi (yani react datada o'zgarish sodir bo'lganda qayta qurmaslik uchun) va bu key data chaqirilib map qilinib itemlari berilgan joyda keylarham berilishi kerak (movielist.js ga qaralsin)

//agar user malumot qo'shsa idlar qanday beriladi??? bu uchun kutubhonalar bor user dataga yani serverga qo'shadigan malumotlarga id qo'yib beradigan kutubhonalar bor

////keyni o'rniga massiv index qaytarishi yani 0 dan???udalit qilinganda datani qiymatlarini joylari o'zgarib ketadi va data buzulib ketadi
////12. Loyiha. Ro'yhat algoritmi darsi natijasi appdagi datadagi idlarda!!!
////browserdagi Расширенияda React Developer Tools nopmli tools bor shu exteyshin yoniq bo'lsa browserda consolelardan eng ohirida components va  Profiler bo'limlari ochiladi shu bo'limlarda yani Componentsda react loyihani browserda qaysi element qanaqa componentsda ekanligini va reactda qilingan saytlarni boshqa malumotlarini bemmalol ko'rish mumkun
