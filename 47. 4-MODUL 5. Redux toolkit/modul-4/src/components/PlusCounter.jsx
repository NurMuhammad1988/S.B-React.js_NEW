import { useDispatch } from "react-redux";
import { plusCounterSlice } from "../reducers/countSlice";

const PlusCounter = () => {

    const dispatch = useDispatch()//UseDispatch react-redux hooki vazifasi komponent holatini yangilash va yangi holatni qaytarish uchun ishlatiladi huddi usestatedagi chaqirilishga o'hshaydi masalan usesateda value, setValue qilingan kabu bundaham dispatch useDispatch funksiyaga teng shunda useDispatch dispatchga teng va bu ichida useDispatch bor dispatch onclick bo'lganda redusers papkadagi countSlice.jsda yaratilgan store ichidagi index.jsda config qilingan plusCounterSlice funksiyasi ishlasin deyildi minusCounterSlice, resetCounterSlice funskyalardaham huddi shu holat

    return (
        <button
            className="btn btn-success" onClick={() => dispatch(plusCounterSlice())}>
                {/* komponent holatini yangilash va yangi holatni qaytarish uchun ishlatiladi */}
            Plus
        </button>
    );
};

export default PlusCounter;
