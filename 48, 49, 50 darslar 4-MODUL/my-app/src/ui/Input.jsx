////bu input component ui papka ichida turganini sababi bu ikkita componentdaham chaqiriladi yani bu input.jsxda hamma narsa dynamic yozilgan shu sabab boshqa boshqa componetlargaham chaqirib ishlatish mumkun shu sabab alohida joyda yozildi

const Input = ({ label, state, setState, type = "text" }) => {
    return (
        <div className="form-floating">
            <input
                className="form-control"
                value={state}
                onChange={(e) => setState(e.target.value)}
                id="floatingInput"
                placeholder={label}
                type={type}
            />

            <label className="text-dark" htmlFor="floatingInput">
                {label}
            </label>
        </div>
    );
};

//bu holatda input componentdagi input va label 100 foiz dynamic hissoblanadi yani Inputni argumentidagi parametrlar boshqa componentga export qilinganda argumentdagi label, state, setState, type = "text"-lar boshqa component argumentida chaqirilmasaham ishlayveradi chunki Input component import qilinganda object sifatida parametrlariham boradi va bu parametrlar dynamic yani aslida bo'sh yani Input component chaqirilganda qiymatlariga beriladi bu Input Register va (Login) componentlarga  chaqirlgan masalan inputni valuesi state state esa Register componentda name,emailva password yani Register componentda Input chaqirilib qiymatiga state={name} state={email}state={password} berilgan bu qiymatlarni nomi state yani value yani har bir Input chaqirilganda endi state yozilsa bu value hissoblanadi va name,email,passwordlar usestateni birinchi bo'sh qiymati hissoblanadi yani useStateni bo'sh qiymatiga tushgan malumotlar shu name,email,passwordlarda>>[] saqlanadi va input onchange bo'lganda event target bilan user kiritgan malumotlar setStatega tushadi va    Input component chaqirilib qiymatiga setState chaqirilsa bu onchange hissoblanadi yani useStateni ikkinchi objectiga tushadi bu holatda setName, setEmail, setPasswordga

////type = "text" esa bu holatda yani default holati teng "text"ga va bu Register componentda default holat uchun Username labelli inputda faqat typi text qilingani uchun yozilamagan chunki Username labelli birinchi inputni typi text lekin keyingi inputlarni bireini typi email keyingisiniki pasword shu sabab default holatda text endi inputlar boshqa componentlarda chaqirilib typi yozilmasa default text bo'ladi yoki typi chaqirilib unga bu holatda>>type={"password"} type qanday bo'lishi aytilsa dynamic tarzda typni ishlatadi chunki bu Input componentda type=type qilib qo'yilgan

export default Input;
