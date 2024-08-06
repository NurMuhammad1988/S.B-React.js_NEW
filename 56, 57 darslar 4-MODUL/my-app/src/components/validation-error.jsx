import { useCallback } from "react";
import { useSelector } from "react-redux";

const ValidationError = () => {
    const { error } = useSelector((state) => state.auth);//store papkadagi index.jsdan keletgan auth 
    // console.log(error);

    const errorMesssage = useCallback(() => {
        return Object.keys(error).map((name) => {
            const msg = error[name].join(", ");//join yani ulash bu holatda msg o'zgaruvchi ichida serverdan keletgan massiv ko'rinishdagi name join qilindi yani orasi ochildi
            return `${name} - ${msg}`;//name yani error objectidagi qiymatlarni nomi 
        });
    }, [error]);

    // console.log(error !== null && errorMesssage());
    //errorMesssage ichida useCallback chaqirilgan funksiya shu sabab chaqirilishi kerak

    return (
        error !== null && //// yani error null bo'lmasagina shu componentni chiqar
        errorMesssage().map((error) => (//yani endi bu validation-error componentda errorMessage funksiyasida config qilingan serverdan keladigan error massivi bor
            <div
                className="alert alert-danger m-1 p-1 text-start"
                role="alert"
                key={error}
            >
                {error}
                {/* //errorMessage funsksiyasida config qilingan error massivi yani user va server muloqotidagi natijaga qarab serverdagi error massividagi habarlarni beradi */}
            </div>
        ))
        // yani error null bo'lmasagina >>>shu componentni chiqar>>><div>ValidationError</div> yokida chiqarma !trueni false qiladi aylantiradi yani hsudna login va register jsxda bu component defaukt holatda ko'ribmey turadi agar error null bo'lmasa yani user tomonidan server bilan muloqotda hatolik bo'lsagina bu component chiqib hatoni userga aytadi
        //yani bu holatda bu ValidationError componenti login va register.jsxlarda chaqirilgan maqsadi esa userdan hato bo'lsa shu hatoni userga ko'rsatish
        //// Objekt. keys() metodi objekt  bilan massivni qaytaradi . Objekt. keys() metodi asl ob'ektni o'zgartirmaydi. bu holatda errorMessage nomli o'zgaruvchi yatarib unga useCallback funksiyasini chaqirdik va jsdan objectni chaqirdik bu objectni keys metodi bor keys metodi parametriga esa useselector funksiyada chaqirilgan error state authdan yani storeni papkani ichida nom berilgan authdan yani serverdan error objectini olepti va useselector bu errorni ohirigi holatini olib berepti va bu ohirgi holat objectni keys metodi bilan bu serverdan kelgan error objecti tartiblanib 0dan tartiblanepti va map qilinib namelari yani serverdan keltgan error objectidagi name qiymatlarini olepti masalan username password va email va msg nomli o'zgaruvchi ochilib unga errorni namelari orasi ochilgan holatda keltirib olinepti va usecalbackga depends qilib error objecti berildi yani endi qachinki error objecti serverdan kelganda usecallback ishga tushadi va holatni userga ko'rsatadi
    );
};

export default ValidationError;
