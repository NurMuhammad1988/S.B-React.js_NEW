import { useCallback } from "react";
import { useSelector } from "react-redux";

const ValidationError = () => {
    const { error } = useSelector((state) => state.auth);
    // console.log(error);

    const errorMesssage = useCallback(() => {
        return Object.keys(error).map((name) => {
            const msg = error[name].join(", ");
            return `${name} - ${msg}`;
        });
    }, [error]);

    // console.log(error !== null && errorMesssage());
    //errorMesssage ichida useCallback chaqirilgan funksiya shu sabab chaqirilishi kerak

    return (
        error !== null &&
        errorMesssage().map((error) => (
            <div
                className="alert alert-danger m-1 p-1 text-start"
                role="alert"
                key={error}
            >
                {error}
            </div>
        ))
        // yani error null bo'lmasagina >>>shu componentni chiqar>>><div>ValidationError</div> yokida chiqarma !trueni false qiladi aylantiradi
        //yani bu holatda bu ValidationError componenti login va register.jsxlarda chaqirilgan maqsadi esa userdan hato bo'lsa shu hatoni userga ko'rsatish hato texti bu holatda ValidationError textini o'zi
        // <div class="alert alert-danger" role="alert">
        //     A simple danger alert—check it out!
        // </div>
    );
};

export default ValidationError;
