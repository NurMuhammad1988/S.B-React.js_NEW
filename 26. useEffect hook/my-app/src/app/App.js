////26. useEffect hook
import { useState, useEffect } from "react";
import "./App.css";
const User = ({ firstName, lastName, link }) => {
    const [counter, setCount] = useState(0);
    const [isLogin, setIslogin] = useState(false);

    const clickHandlerPlus = () => {
        setCount((prevCounter) => prevCounter + 1);
    };
    const clickHandlerMinus = () => {
        setCount((prevCounter) => prevCounter - 1);
    };
    const clickHandlerRestart = () => {
        setCount(0);
    };
    const onToggleLogin = () => {
        setIslogin((prevState) => !prevState);
    };

    // //useEffect hooki yani function  ikkita parametr qabul qiladi birinchi parametr effekt callback yani user saytga kirib nimadur harakat qilganda nimadur qilish kerak bo'lsa shuni qiladi ikkinchisi deps(dependeses) yani qaramlik saytda nima o'zgarganda useffect ishga tushsin degan buyruq

    ////class componentdagi uchta componentDidMount, componentDidUpdate, componentWillUnmount metodlarini function componentda bitta useEffect metodi bilan bajarilishi useffectni bitta fileda har bitta holatlarga alohida alohidaham ishlatish mumkun Tafsiya:har bir o'zgaruvchiga yoki functionga alohida ochib ishlatgan maqul 
    //// hooklar faqat function componentni ichiga yoziladi useffectni ustda ona function yoki if else bo'lmaydi useeffect hooki va boshqa hooklarham faqat function componentni ichida o'zi alohoda ona function qilib yozilishi kerak jsxni ichigaham useeffectni yozib bo'lmaydi 
    ////class componentda useeffect compnenti yo'q!!!!!!!!!!!

    // // //-1-Holat
    // useEffect(() => {
    //     console.log("Effect");
    //     document.title = `Counter: ${counter}`; //htmldagi titleni o'rniga counter o'zgaruvchini qiymatini qo'yildi
    // });////reactda useEffect funksiyasi function componentlarda ishlaydi va class componentlardagi componentDidMount va componentDidUpdate funksiyalarini vazifasini bir o'zi bajaradi//yani saytga kirganda didmount bo'lepti o'zgartirganda didupdate bo'lepti

    ////-2-Holat
    // useEffect(() => {
    //     console.log("Effect");
    //     document.title = `Counter: ${counter}`
    // }, [isLogin])//yani bu holatda useefectni ikkinchi parametriga faqat islogin ishlaganda hodisani ushlab qol boshqa joyda hodisalarga teginma deyildi yani useffect functioni ikkinchi parametri deps(dependeses) aynan nima ishlatish kerak bo'lsa o'shani qabul qiladi//yani counter useeffectda chaqirilgan bo'lsaham ckicklarda hech narsani ushlab qolamadi faqat  onToggleLogin funksiyasida yozilgan islogin o'zgaruvchini holatlarnini logda saqlab qolepti//yani qachonki isLogin o'zgaruvchi o'zgarsagina useeffect funksiya ishga tushib holatni saqlab qolepti//conterni minus pilus qilib keyin isloginga bossa yig'ilgan qiymatni yani malumotlarni counterga (html titlega) jo'natepti //useeffect functioni bilan function componentlarda aynan kerakli functionlarni hodisasini ushlab olish mumkun///////////yani useEffectni ichidagi titlega boradigan counterni qiymatlari qachonki islogin click bo'lgandagina titlega boradi yani useEffectni ichidagi funksiya ikkinchi parametrda [isLogin]ga qaram qilib qo'yildi

    ////-3-Holat
    // useEffect(() => {
    //     console.log("Effect");
    //     document.title = `Counter: ${counter}`
    // }, [counter])//bu holatda faqat counter o'zgaruvchidagi hodisalarni ushlab qoldi //useffect functioni bilan function componentlarda aynan kerakli functionlarni hodisasini ushlab olish mumkun/////bu holatda useEffectni ichidagi counterga counterni o'zini qaram qilib qo'yildi useEffectda ikkinchi parametriga chaqirilgan qiymatga useeffect qaram bo'ladi

    ////-4-Holat
    // useEffect(() => {
    //     console.log("Effect");
    //     document.title = `Counter: ${counter}`;
    // }, []); //useeffect functionini ikkinchi parametri bu holatda []<<bo'sh massiv bilan chaqirilsa hech narsani ushlab qolmaydi faqat!!!user saytga kirgandagini yani Mount holatinigina ushlab qoladi yani user saytga kiradi faqat shu holatni ushlab qoladi yoki []ichiga qanadur function yoki o'zgaruvchi berilsa aynan shular ishga tushgandagina yani aynan shu state ishlagandiga hodisani ushlab qoladi//YANI BIR MARTTA ISHLAYDI NIMA SABAB []<<SHU bo'shligi SABAB

    ////-4-Holat
    useEffect(() => {
        return ()=> console.log("Deleted");//yani return collback bilan logni qaytaradi
    }, []);//bu holatda unMount holati yani saytda user nimanudur udalit qilsa ishga tushadi bu uchun return qilib calback funksiya ichida kerakli buyruq yoziladi//lekin sayt refresh bo'lganda deleteham funksiyaham bir martta render bo'ladi keyin esa faqat Display texli buttonga click bo'lgandagini ishlaydi//yani return bu joyda unMount bo'lishga sabab bo'lepti//Yani bu holatda pastdagi deleteDisplayHnadler funskiyasi display textli buttonga onclick funksiya bilan jo'natilgan yani Display textli button click bo'lganda saytda udalit yani unMount holati sodir bo'ladi saytni ekrani ko'rinmeydigan bo'lib qiladi bu holat esa unMount deyiladi va bu holatni ushlab qolish uchun bu funksiya yoziladi yani saytda udalit holati sodir bo'lganda useeffect return bilan ushlab qoladi bu

    ////USEEFFECT FUNKSIYASI AGAR USER SAYTDA BIROR BIR HARAKATNI AMALGA OSHORGANDA MASALAN INPUTLAR YOKI BOSHQA FUNSKSIYALARNI ISHLATGANDA AFQAT ISHLATILGAN FUNKSIYAMI RENDER QILADI BOSQA FUNKSIYALAR SUKUT BO'YICHA TURADI AGAR USEEFFECT ISHLATILMASA USER SAYTDA HAR HARAKAT QILGANDA MASALAN INPUTGA HAR YOZGANDA YOZILGANDA HAR BIR HARFI YOZILGANDA SAYTDAGI HAMMA FUNKSIYALAR QAYTA QAYTA RENDER BO'LADI BU ESA SAYTNI SEKIN QOTIB ISHLASHIGA SABAB BO'LADI SHU SABAB USEEFFECT ISHLATILADI!!! bu huddi sahifalarni qayta qayta refresh bo'lib ketmasligi uchun ishlatiladigan rooterga o'hshar ekan faqat farqi bu useEffect aynan sahifa uchun emas aynan sahifalrdagi funksiylar va aynan sodir bo'ladigan qanaqadur holatni ushlab olish uchunham kerak

    return (
        <div className="w-75 mx-auto ">
            <div className="border p-3 mt-3">
                <h1>
                    Mening ismim - {firstName}, sharifim - {lastName},
                </h1>
                <a href={link}>Youtube kanalim</a>
                <button className="btns">{counter}</button>
                <div className="d-flex justify-content-center">
                    <button
                        className="btn btn-success w-25"
                        onClick={clickHandlerPlus}
                    >
                        +
                    </button>
                    <button
                        className="btn btn-danger w-25 mx-2"
                        onClick={clickHandlerMinus}
                    >
                        -
                    </button>
                </div>

                <div className="d-flex justify-content-center">
                    <button
                        className="btn btn-outline-danger w-25 mt-2"
                        onClick={clickHandlerRestart}
                    >
                        Restart
                    </button>
                </div>

                <div className="d-flex justify-content-center">
                    {isLogin ? (
                        <button className=" btn btn-outline-light w-25 mt-2">
                            LOGIN
                        </button>
                    ) : null}

                    <button
                        onClick={onToggleLogin}
                        className="btn btn-outline-primary w-25 mt-2 mx-2"
                    >
                        TOGGLE
                    </button>
                </div>

                <div className="d-flex justify-content-center m-2"></div>
            </div>
        </div>
    );
};

const App = () => {
    const [isDisplay, setIsDisplay] = useState(true);

    const deleteDisplayHnadler = () => {
        setIsDisplay(false);
    };

    return (
        <div>
            <div className="w-100 d-flex justify-content-center ">
                <button
                    className="btn btn-danger mx-3 w-25 mt-3"
                    onClick={deleteDisplayHnadler}
                >
                    Display
                </button>
            </div>
            {isDisplay && (
                <User firstName="Nur" lastName="Yorov" link="youtube.com" />
            )}
            
            {/* appni ichidagi componentgaham alohida appni o'zida hodisa ilish */}
        </div>
    );
};

export default App;
