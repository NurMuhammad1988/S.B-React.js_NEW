////28. useMemo hook
import { useState, useMemo } from "react";
import "./App.css";

const bigCountNumber = (number) => {
    console.log("Render"); //agar useMemo ishlatilmasa increase buttongaham toggle buttongaham bosilganda bu render consoli ishlayapti yani saytdagi yani ona component hissoblangan app.jsdagi hamma funksiya render bo'lib ketepti

    let i = 0;
    //        100 mellon       //lekin 1 milard qilsak useMemodaham baribir qotib ishladi
    while (i < 100000000) i++; //yani bu useMemosiz render bo'lguncha sayt qotib sekin ishlepti

    return number * 2;
};

const User = () => {
    const [counter, setCount] = useState(0);
    const [active, setActive] = useState(true);

    const onIncrement = () => setCount((prevState) => prevState + 1);

    const onToggle = () => setActive((prevState) => !prevState);
    //ontoggle funksiyasi chaqirilgan buttonga klik bo'lganda yani active o'zgaruvchini oldingi holati nima bo'lsa o'shani teskarisiga o'zgartiradi>>(!)

    const colors = {
        fontWeight: "bold",
        color: active ? "green" : "red",
        //yani agar active o'zgaruvchi true bo'lsa green qil yokida false bo'lsa red qil bu holatda red turadi chunki activeni default qiymati false bo'lib turipti
    };

    //// const number = bigCountNumber(counter);//useMemosiz holatda qotib ishleydi

    const number = useMemo(() => bigCountNumber(counter), [counter]); //useMemo bilan ishlagan holatda yani useMemoham ikkita parametr qabul qiladi birinchisi funksiya ikkinchi useMemo kimga qaram bo'lishi yani dependeses yani usememo faqatgina counter o'zgargandagina ishga tushadi

    ////reactda funskyalar biror bir harakatni amalga oshirganda react sukut bo'yicha shu funskiya bor componentni qaytadan render qiladi yani funksiyalarni hammasini bir ishlatadi useMemo useCallback functionlar shu narsani oldioni oladi masalan saytga user kirib biror bir funskiasi bor formagami buttongga inputgami bosganda hamma funskiya render bo'lib ketmasligi uchun usememo usecallback funksiyalar kerakli joylarda ishlatiladi
    
    ////React useCallback hooki  qayta qo'ng'iroq qilish funksiyasini eslab qolish uchun mo'ljallangan Uni funktsiya qiymatini keshlash uchun ishlatiladigan useMemo bilan aralashtirib yubormaslik kerak useCallback odatda qayta renderlar orasidagi funksiyalarni eslab qolish uchun ishlatiladi

    ////UseCallback va useMemo o'rtasidagi farq nima?
    ////useCallback va useMemo hooklari o'xshashdir. Asosiy farq shundaki, useMemo xotirada saqlangan qiymatni qaytaradi yani bu holatda counter o'zgaruvchida saqlangan qiyamtni  useCallback esa xotirada saqlangan funksiyani qaytaradi yani butun boshli funskyani qaytaradi ikkalasiniham o'zini ishlatiladigan joylari bor!!!

    ////useMemo inputlardagi hisob-kitoblarni yoki malumotlarni o'zgartirishni optimallashtirishga yordam beradigan qiymatlarni yoki hisob-kitoblarni eslab qolish uchun ishlatiladi

    ////useCallback qayta qo‘ng‘iroq qilish funksiyalarini xotirada saqlash, funksiyalarni keraksiz qayta yaratishni kamaytirish va komponentlarni qayta ishlashni optimallashtirish uchun ishlatiladi

    ////Xulosa:  qayta qo'ng'iroqni xotirada butunlay saqlamoqchi bo'lganimizda useCallback hookidan foydalanish kerak va qimmat hisob-kitoblardan qochish uchun funktsiya natijasini o'zinigina eslab qolish uchun useMemodan foydalanishimiz mumkin. useEffect ba'zi holat o'zgarishlariga yon ta'sir qilish uchun ishlatiladi yani holat o'zgarganda saytga qanaqadur o'zgarish qo'shish uchun

    return (
        <div className="w-75 mx-auto mt-5 ">
            <div className="border p-3 mt-3">
                <button className="btns" style={colors}>
                    User activeted = {number}
                </button>

                <div className="d-flex justify-content-center">
                    <button
                        className="btn btn-success w-25"
                        onClick={onIncrement}
                    >
                        Increase
                    </button>

                    <button
                        className="btn btn-warning mx-3 w-25"
                        onClick={onToggle}
                    >
                        Toggle
                    </button>
                </div>
            </div>
        </div>
    );
};

const App = () => {
    return <User firstName="Nur" lastName="Yorov" link="youtube.com" />;
};

export default App;
