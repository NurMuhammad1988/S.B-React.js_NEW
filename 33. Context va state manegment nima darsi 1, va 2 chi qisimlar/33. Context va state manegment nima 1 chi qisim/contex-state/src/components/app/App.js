////33. Context va state manegment nima? darsi birinchi qismi

// import useInputValidation from "../../hook/useInputValidate";

// const MyButton = (props) => {
//     console.log(props);
//     return (
//         <button className="mt-3 btn btn-success w-25 mx-2">{props.children}</button>
//     );
// }; //propsni children nomli hususiyati bor//yani bu holatda appni asosiy componenti bo'lgan User componentdan tashqarida MyButton nomli object yasab parametriga props chaqirildi propps esa bo'sh object hissoblanadi va bu bo'sh probs qaytarsin nimani qaytarsin parametridagi buttonni... buttonga esa propsni children qiymati chaqirildi shunda 100ta button bo'lsaham props bo'sh objectga tushib children qiymati sabab nusxalanib ko'payib boraveradi shunda jsx ichida button huddi fragmentga o'hshab ypuluvchi qilib chaqirilib ichiga ichiga boshqa text yoki onchange onclick hodisalari solinsaham children bo'lib yani boshqa object bo'lib qayta qayta kelaveradi>>> <MyButton>my data</MyButton> <<<stylelarni esa MyButton objectida return qilingan buttondan yani  ona buttondan olaveradi

// const User = () => {
//     const firstname = useInputValidation("");
//     const lastname = useInputValidation("");
//     const thirt = useInputValidation("");
//     const four = useInputValidation("");

//     return (
//         <div className="w-50 mx-auto mb-5">
//             <div className="border p-3 mt-5">
//                 <p className="text-center fs-3 text-white">Register</p>
//                 <div className="d-flex gap-3">
//                     <input
//                         type="text"
//                         className={`form-control ${firstname.valiDateColor}`}
//                         placeholder="Firstname"
//                         value={firstname.value}
//                         onChange={firstname.onChange}
//                     />
//                     <input
//                         type="text"
//                         className={`form-control ${lastname.valiDateColor}`}
//                         placeholder="Lastname"
//                         value={lastname.value}
//                         onChange={lastname.onChange}
//                     />
//                     <input
//                         type="text"
//                         className={`form-control ${thirt.valiDateColor}`}
//                         placeholder="Thirt name"
//                         value={thirt.value}
//                         onChange={thirt.onChange}
//                     />
//                     <input
//                         type="text"
//                         className={`form-control ${four.valiDateColor}`}
//                         placeholder="Four name"
//                         value={four.value}
//                         onChange={four.onChange}
//                     />
//                 </div>

//                 <MyButton>
//                     my data
//                 </MyButton>

//                 <MyButton>
//                   my data
//                 </MyButton>

//                 <MyButton>
//                   my data
//                 </MyButton>

//             </div>
//         </div>
//     );
// };
// const App = () => {
//     return <User />;
// };
// export default App;
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import useInputValidation from "../../hook/useInputValidate";
////yani agar button bitta bo'lsa appdan tashqarida shunday yozgan maqul
const MyButton = ({ children }) => (
    <button className="mt-3 btn btn-success w-25 mx-2">{children}</button>
);
//propsni children nomli hususiyati bor//yani bu holatda appni asosiy componenti bo'lgan User componentdan tashqarida MyButton nomli object yasab parametriga object qilib children chaqirildi props chaqirildi propps esa bo'sh object hissoblanadi va bu bo'sh probs qaytarsin nimani qaytarsin parametridagi buttonni... buttonga esa propsni children qiymati chaqirildi shunda 100ta button bo'lsaham props bo'sh objectga tushib children qiymati sabab nusxalanib ko'payib boraveradi shunda jsx ichida button huddi fragmentga o'hshab yopuluvchi qilib chaqirilib ichiga  boshqa text yoki onchange onclick hodisalari solinsaham children bo'lib yani boshqa object bo'lib qayta qayta kelaveradi>>> <MyButton>my data</MyButton> <<<stylelarni esa MyButton objectida return qilingan buttondan yani  ona buttondan olaveradi/>/yani jsxni ichida componentni ichida nima bo'lsaham childrenni ichiga tushadi//endi bu MyButton component hissoblanadi va bu componentni ichiga html taglarniham qo'yish mumkun >>> <MyButton><p>hello<p/><MyButton/>

const User = () => {
    const firstname = useInputValidation("");
    const lastname = useInputValidation("");
    const thirt = useInputValidation("");
    const four = useInputValidation("");

    return (
        <div className="w-50 mx-auto mb-5">
            <div className="border p-3 mt-5">
                <p className="text-center fs-3 text-white">Register</p>
                <div className="d-flex gap-3">
                    <input
                        type="text"
                        className={`form-control ${firstname.valiDateColor}`}
                        placeholder="Firstname"
                        value={firstname.value}
                        onChange={firstname.onChange}
                    />
                    <input
                        type="text"
                        className={`form-control ${lastname.valiDateColor}`}
                        placeholder="Lastname"
                        value={lastname.value}
                        onChange={lastname.onChange}
                    />
                    <input
                        type="text"
                        className={`form-control ${thirt.valiDateColor}`}
                        placeholder="Thirt name"
                        value={thirt.value}
                        onChange={thirt.onChange}
                    />
                    <input
                        type="text"
                        className={`form-control ${four.valiDateColor}`}
                        placeholder="Four name"
                        value={four.value}
                        onChange={four.onChange}
                    />
                </div>

                <MyButton>my data</MyButton>
                <MyButton>my data</MyButton>
                <MyButton><p>Hello</p></MyButton>

            </div>
        </div>
    );
};
const App = () => {
    return <User />;
};
export default App;

//33. Context va state manegment nima? darsi birinchi qismi

