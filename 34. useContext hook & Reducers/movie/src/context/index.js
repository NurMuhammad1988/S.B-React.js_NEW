import { createContext, useReducer } from "react";

const initialValue = {
    //initialValue yani boshlang'ich qiymat//
    data: [],
    term: "",
    filter: "all",
};

export const Context = createContext(); //createContext bu reactdan export qilibnishi kerak bo'lgan Contexni yaratib beradigan metod yani bu yaratilgan Contexga butun loyiha o'rab olinadi Contextda Provider objecti bor shu Provider Context bilan birga loyihani o'rab oladi yani shunda Context.Provider ichiga butun loyihani chidren sifatida qo'yish mumkun

const reducer = (state = initialValue, action) => {
    const { type, payLoad } = action;
    ////reducer bu oddiy funksiya ikkita parametr qabul qiladi birinchisi state yani state initialValue yani boshlang'ich qiymatga teng yani initialValue o'zgaruvchidagi data term va filter ikkinchi action yani action esa object action objecti ikkita parametr qabul qiladi birinchisi type yani funksiyani nomi yani shu type objecti bilan funksiyalar topiladi ikkinchisi esa payload yani shu topilgan funskiyalarni parametrini qabul qilib oladi//reduser funksiya birinchi parametr qabul qiladi!!!ikkinchisiga oction yani object
    switch (type) {
       
        case "GET_DATA":
            return { ...state, data: payLoad };
            // 
        case "ON_DELETE": 
        //agar type yani qaysi type shu filedagi type yani reducer funksiyada chaqirilgan type yani setstateni type qaysi type OnDlete typi yani funksiyasi yani typda funksiyani nomi ondelete bo'lsa ondelete funksiyasidagi manabu shartni bajar>>>>>const deleteArr = state.data.filter((c) => c.id !== yani bu holatda deleteArr nom;i o'zgaruvchi yaratilib ichiga appdagi ondelete funksiyasini vazifalari chaqirildi va state.dataligini sababi shu filedagui statedan datani olepti payload esa appdagi shu ondelete funksiyasini idsi yani parametrini oladi endi bu deletearrni yuqoridagi dataga qo'yish kerak sababi data hozir bo'sh va bu data nima vazifa bajarishi kerakligini dataga aytib qo'yish kerak>>>> return { ...state, data: deleteArr };yani spread operatori bilan statelar nusxalab olinishi kerak va data deletearrga o'zgartirib qo'yildi
            const deleteArr = state.data.filter((c) => c.id !== payLoad);
            return { ...state, data: deleteArr };

        default:
            return { state };//default holatiga esa stateni qaytarish kerak???
    }
};

const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialValue);
    ////useReducer funksiyasi ikkita parametr qabul qiladi reduserni providerga ulash kerak nima uchun??? bu useReducer funksiyasiham ikkita parametr qabul qiladi birinchisi reducer bo'lishi kerak bo'lgan funksiya ikkinchisi initialValue yani boshlang'ich qiymat buham hiddi useState kabi ishlaydi usestate bilan statedagi qiymatlar olinadi  disppatch yordami qiymatni o'zgartiradi 
    return (
        <Context.Provider value={{ state, dispatch }}>
            {/* valuda object bor bu priveder reactni dafoul index.js filida ulanib qo'yilishi kerak */}
            {children}
        </Context.Provider>
    );
};

export default Provider;
////real louihalarda appni ichida ko'p funksiyalar bo'lmaydi shuning uchun appni ichidagi funksiylar alohida joyda yani karopkada saqlanishi kerak masalan bu darsni birinchi qismida faqat bitta button ko'rsatilgan edi endi bu darda butun loyihadagi hamma funksiylar bitta provayderga yani asosiy karopkaga solinishi kerak yani provayder hamma narsani ichiga o'ravolishi kerak
