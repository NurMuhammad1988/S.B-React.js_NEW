//33. Context va state manegment nima? darsi birinchi qismi
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
//33. Context va state manegment nima? darsi birinchi qismi
