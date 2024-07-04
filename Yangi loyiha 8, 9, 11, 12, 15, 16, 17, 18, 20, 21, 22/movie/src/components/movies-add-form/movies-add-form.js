import { Component } from "react";
import "./movies-add-form.css";

////Mutable va immutable Mutable O'ZGARUVCHAN O'ZGARUVCHI immutable o'zgarmas o'zgaruvchi yani to'g'ridan to'g'ri o'zgarmaydi immutableni to'g'ridan to'g'ri o'zgartirib bo'lmaydi imutubleni o'zgartirish uchun funksiya kerak

class MoviesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //state object ichidagilarham bo'sh object
            name: "", //birinchi name atributida "name" texti yani name atributli inputga tushadigan hodisani o'z ichiga oladigan object name: "" yani bo'sh pbject
            views: "",
        };
    }

    changeHandlerInput = (e) => {
        //unversal funksiya yani 10 ta input bo'lsaham ichiga tushgan qiymatlarni o'ziga saqlab oladi  yani har bir inputga bitt afunksiya yozish yahshimas masalan 10 ta input bo'lsa har biriga bittadan funksiya yozib chiqilmeydi
        // console.log(e);//inputni ichidagi eventni yani hodisani ko'rish uchun yozildi changeHandlerInput funksiyasi ikkala eventgaham onchange qilib chaqirilgani uchun ikkala inputdaham eventlar olindi

        this.setState({
            //qandaydur qiymatni o'zgartirish uchun setstate funksiyasi kerak bu holatda object qaytaradi chunku oldingi qiymat kerak emas bu ohirigi qiymat uchun
            [e.target.name]: e.target.value, //inputlarga kiritiladigan qiymatlarni saqlash (unversal) yani event targetda namesi name bo'lgan inputlarni valuesi olinsin yani bu holatda agar eventni targetida name bor bo'lsa yani shunda name atributi bot inputlarni hammasini qiymatini oladi pastda jsxdaham ikkita inputga name atributi berilgan shu sabab ikkala inputlarga user tomonidan berilayotganqiymatlar ushlab olinepti

            //yani qandaydur qiymatni o'zgartirish uchun setsate funksiyasi kerak bu setstate object qaytaradi bu holatda ohirgi holat muhum
        });
    };

    addFormHandler = (e) => {
        e.preventDefault();
        this.props.addForm({
            name: this.state.name,
            viewers: this.state.views,
           
        }); ////////MoviesAddForm da yozilgan addFormHnadler funksiyasidan oldingi holatlar deb chernavikka olingan funksiyalarni commentlarini o'qishni yoki bu funksiyani chernavikga olib MoviesAddForm da yozilgan addFormHnadler funksiyasidan oldingi holatlarini ko'rib chiqish kerak!!!
        this.setState({
            name:"",
            views:""
        })
    };

    render() {
        const { name, views } = this.state;
        // const { addForm } = this.props;//// addFormHnadler funksiyasidan oldingi holatdi// //yani app.jsda yaratilgan addForm funksyasi props qilib chaqirib olindi yani propisdan chaqirib olindi
        return (
            <div className="movies-add-form">
                <h3>Yangi kino qo'shish</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.addFormHandler}
                >
                    {/* addFormHnadler funksiyasidan oldingi holatdi {(e) => addForm(e, { name, viewers: views })}  yani  viewers yani data serverchadagi viewers views ga yani MoviesAddFormdagi bo'sh viewsga teng yani shudna viewsga viewersga tushadigan qiymatlar yoziladi yani datadagi viewersga input orqali tushgan malumot views bo'sh objectiga tushadi buni input qayerdan biladi  chunki inputga valuesiga views chaqirib qo'yilgan*/}
                    <input
                        type="text"
                        className="form-control new-post-label"
                        placeholder="Qanday kino?"
                        onChange={this.changeHandlerInput}
                        // onchagega funksiya this kalit so'zi bilanyozilishi kerak chunki bu class funksiya
                        name="name"
                        value={name}
                    />
                    <input
                        type="number"
                        className="form-control new-post-label"
                        placeholder="Nechchi marotaba ko'rilgan?"
                        onChange={this.changeHandlerInput}
                        // onchagega funksiya this kalit so'zi bilanyozilishi kerak chunki bu class funksiya
                        name="views"
                        value={views}
                    />
                    <button type="submit" className="btn btn-outline-dark">
                        Qo'shish
                    </button>
                </form>
            </div>
        );
    }
}

// const MoviesAddForm = () => {
//     return (
//         <div className="movies-add-form">
//             <h3>Yangi kino qo'shish</h3>
//             <form className="add-form d-flex" >
//             <input type="text" className="form-control new-post-label" placeholder="Qanday kino?"/>
//             <input type="number"className="form-control new-post-label" placeholder="Nechchi marotaba ko'rilgan"/>
//             <button type="submit" className="btn btn-outline-dark">
//                 Qo'shish
//             </button>
//            </form>
//        </div>
//     );
// };

export default MoviesAddForm;
