const Input = ({ label, state, setState, type = "text" }) => {
    return (
        <div className="form-floating">
            <input
                className="form-control"
                value={state}
                onChange={(e) => setState(e.target.value)}
                // id="floatingInput"
                placeholder={label}
                type={type}
                autoComplete="on"
            />

            <label
                className="text-dark"
                // htmlFor="floatingInput"
            >
                {label}
            </label>
        </div>
    );
};

export default Input;
