// import { useState } from "react";

// const User = () => {
//     const [firstname, setFirstname] = useState("");
//     const [lastname, setLastname] = useState("");

//     // console.log(firstname);//yani useState birinchi parametri undefind bo'ladi bu holatda firstname yozilgani uchun endi undefined emas firstname bu holatda setStaeti bilan o'zgarishi kerak bo'lgan o'zgaruvchi setfurstname esa shu firstnameni o'zgartiradigan funskya ""bu esafirstnameni qiymati
//     // console.log(lastname);

//     const validateInput = (text) => {
//         if (text.search(/\d/) >= 0) {
//           return true
//         }else{
//           return false
//         }
//     };//yani agar textda raqam bo'lsa yani regex bilan raqam  true bo'lsa trueni qaytar yokida false bu holatda search()metod yani textni ichidan raqam izlaydi va raqam bor bo'lsa trueni qaytaradi aks holda false qaytaradi shunda true qaytarganda yani textni ichida raqam bor bo'lsa validateInputni parametrida chaqirilgan funksiyaga ega inputni texti danger stylega o'zgaradi va bu holatni ushlab olish uchun jsxga inputda set funksiyalar inputni onchage hodisasi sodir bo'lganda eventini ovoldi setfunksiyalar shu eventdagi holatga qarab valulardagi o'z ona o'zgaruvchilariga yani firstname lastnamelarga tasir qiladi

//     const validateColorFirstname = validateInput(firstname) ? "text-danger" : null//agar validateInput true bo'lsa yani validateinputni parametrida chaqirilgan firstname true bo'lsa yani inputda raqam bo'sa text-danger classini ishlat bo'lmasa hech narsa qilma yani null va bu style classlarga aloqador funksiya bo'lgani uchun becet ichida classnamega yozildi yani shunda agar classnameda validateColorFirstname funksiyasi chaqirilsa validateInput funksiyasidagi holatga qarab inputda o'zgarish bo'ladi jsxga value qilib setstateni firstnamensi berilishi

//     const validateColorLastname = validateInput(firstname) ? "text-danger" : null//tepadagi bilan bir hil comment

//     return (
//         <div className="w-50 mx-auto mb-5">
//             <div className="border p-3 mt-5">
//                 <p className="text-center fs-3 text-white">Register</p>
//                 <div className="d-flex gap-3">
//                     <input
//                         type="text"
//                         className={`form-control ${validateColorFirstname}`}
//                         placeholder="Firstname"
//                         value={firstname}
//                         onChange={(e) => setFirstname(e.target.value) }
//                     />
//                     <input
//                         type="text"
//                         className={`form-control ${validateColorLastname}`}
//                         placeholder="Lastname"
//                         value={lastname}
//                         onChange={(e) => setLastname(e.target.value) }

//                     />
//                 </div>
//                 <button className="mt-3 btn btn-success w-25">Send data</button>
//             </div>
//         </div>
//     );
// };

// const App = () => {
//     return <User />;
// };

// export default App;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { useState } from "react";
////yuqoridagi darsda ikkita input uchun funksiyalar yozildi bu uchun ikki martta useState chaqirildi masalan loyihada ikkita emas 5 10 ta shunaqa ishlov berilishi kerak bo'lgan inputlar bor bo'lsa 5 10 marttalab useStateni chaqirib ishlashga to'g'ri keladi shu sabab bu holatdan qochish uchun reactda bor 18 ta hookdan tashqari dasturchi o'ziham shaxsiy hook funskiya yozishi mumkun shunda kodlar uzun va tushunarsiz bo'lib ketishini oldi olingan bo'ladi

////yani shaxsiy hookni hohlagancah nomlash mumkun lekin reactda hooklar use bilan boshlangani uchun useInputValidation deb yozilishi bu dasturchini shaxsiy hooki ekanligini tushunish oson bo'lishi uchun boshiga use so'zi qo'yiladi
const useInputValidation = (initialValue) => {////custom hook
    const [value, setValue] = useState(initialValue);
    ////yani custom hookda useState hooki baribir bir martta chaqirilishi kerakchunki reactda o'zgaruvchilarni to'g'ridan to'g'ri o'zgartirib bo'lmaydi useState bilan o'zgartirib bo'ladi yani funksiya bilan o'zgartirish kerak

    //bu holatda useInputValidation nomli shaxsiy hook ochib uni birinchi parametriga value nomli objectni  boshlang'ich qiymatiga useInputValidationda chaqirilgan  initialValue parametri chaqirildi bu initialValue  parametri validateInput funksiyasidagi aftamatik  tarzda sodir bo'ladigan if else uchun kerak
    const onChange = e => {
        setValue(e.target.value);
    };//onchange nomli funkjsiya yasab event olindi va bu even setStaetini objecti setValuega jo'natib qo'yildi endi setValueda inputlarga tushadigan qiymatlar bor bo'ladi va ichida eventni valeular bor bo'lgan useStateni set o'zgaruvchisi onchange funksiyasini ichida onchange funksiyasini esa jsxga kerakli inputga chaqirib qo'yiladi

    const validateInput = () => {
        return value.search(/\d/) >= 0;
    };

    return {value, onChange, validateInput}

};

const User = () => {

  const firstname = useInputValidation("")
  const lastname = useInputValidation("")


    const validateColorFirstname = firstname.validateInput() ? "text-danger": null;
    const validateColorLastname = lastname.validateInput() ? "text-danger": null;


    return (
        <div className="w-50 mx-auto mb-5">
            <div className="border p-3 mt-5">
                <p className="text-center fs-3 text-white">Register</p>
                <div className="d-flex gap-3">
                    <input
                        type="text"
                        className={`form-control ${validateColorFirstname}`}
                        placeholder="Firstname"
                        value={firstname.value}
                        onChange={firstname.onChange}
                    />
                    <input
                        type="text"
                        className={`form-control ${validateColorLastname}`}
                        placeholder="Lastname"
                        value={lastname.value}
                        onChange={lastname.onChange}
                    />
                </div>
                <button className="mt-3 btn btn-success w-25">Send data</button>
            </div>
        </div>
    );
};

const App = () => {
    return <User />;
};

export default App;
