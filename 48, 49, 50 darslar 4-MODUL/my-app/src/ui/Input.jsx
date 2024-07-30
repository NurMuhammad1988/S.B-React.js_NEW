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

export default Input;
