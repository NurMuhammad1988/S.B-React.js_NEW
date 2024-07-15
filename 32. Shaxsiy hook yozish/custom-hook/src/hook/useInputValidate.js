// import { useState } from "react";
// ////yuqoridagi darsda ikkita input uchun funksiyalar yozildi bu uchun ikki martta useState chaqirildi masalan loyihada ikkita emas 5 10 ta shunaqa ishlov berilishi kerak bo'lgan inputlar bor bo'lsa 5 10 marttalab useStateni chaqirib ishlashga to'g'ri keladi shu sabab bu holatdan qochish uchun reactda bor 18 ta hookdan tashqari dasturchi o'ziham shaxsiy hook funskiya yozishi mumkun shunda kodlar uzun va tushunarsiz bo'lib ketishini oldi olingan bo'ladi

// ////yani shaxsiy hookni hohlagancha nomlash mumkun lekin reactda hooklar use bilan boshlangani uchun useInputValidation deb yozilishi bu dasturchini shaxsiy hooki ekanligini tushunish oson bo'lishi uchun boshiga use so'zi qo'yiladi

// ////reactda shaxsiy hooklar yozilganda ichida reactdagi boshqa hamma hooklarniham ishlatsa bo'ladi masalan useEffect, useCllback useMemo

// ////custom hook
// const useInputValidation = (initialValue) => {
//     const [value, setValue] = useState(initialValue);
//     ////yani custom hookda useState hooki baribir bir martta chaqirilishi kerak chunki reactda o'zgaruvchilarni to'g'ridan to'g'ri o'zgartirib bo'lmaydi useState bilan o'zgartirib bo'ladi yani reactni o'zini useState funksiyasi bilan o'zgartirish kerak

//     //bu holatda useInputValidation nomli shaxsiy hook ochib uni birinchi parametriga value nomli objectni  boshlang'ich qiymatiga useInputValidationda chaqirilgan  initialValue parametri chaqirildi bu initialValue  parametri validateInput funksiyasidagi aftamatik  tarzda sodir bo'ladigan if else uchun kerak

//     const onChange = (e) => {
//         setValue(e.target.value);
//     }; //onchange nomli funkjsiya yasab event olindi va bu even setStateni objecti hissoblangan setValuega jo'natib qo'yildi endi setValueda inputlarga tushadigan qiymatlar bor bo'ladi va ichida eventni valeulari bor bo'lgan useStateni set o'zgaruvchisi (setValue) onchange funksiyasini ichida onchange funksiyasini esa jsxga kerakli inputga chaqirib qo'yiladi

//     const validateInput = () => {
//         return value.search(/\d/) >= 0;//agar valueda qiymat number bo'lsa (regex) truni qaytar
//     };

//     const valiDateColor = validateInput() ? "text-danger" : null;//agar valiDateInputni yani ichidagi value objecti sabab ichidagi qiymatlar o'zgarib turadigan valiDateInputni qiymati true bo'lsa yani raqam bo'lsa style qizilga aylansin false bo'lsa yani faqat hariflardan iborat bo'lsa null yani hech narsa qaytarma shunda user inputga ism o'rniga raqam yozsa hariflar qizil bo'lib qoladi

//     return { value, onChange, validateInput, valiDateColor };//va return qilib bu object funksiyani ishlatib qo'yib jsxda chaqirildi
// };

// export default useInputValidation;

////////// without comment
import { useState } from "react";

const useInputValidation = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    const onChange = (e) => {
        setValue(e.target.value);
    };

    const validateInput = () => {
        return value.search(/\d/) >= 0;
    };

    const valiDateColor = validateInput() ? "text-danger" : null;

    return { value, onChange, validateInput, valiDateColor };
};

export default useInputValidation;
