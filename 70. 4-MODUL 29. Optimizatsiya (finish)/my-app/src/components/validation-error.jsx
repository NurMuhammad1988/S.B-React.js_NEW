import { useCallback } from "react";
import { useSelector } from "react-redux";

const ValidationError = () => {
    const { error } = useSelector((state) => state.auth);

    const errorMesssage = useCallback(() => {
        return Object.keys(error).map((name) => {
            const msg = error[name].join(", ");
            return `${name} - ${msg}`;
        });
    }, [error]);

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
    );
};

export default ValidationError;
