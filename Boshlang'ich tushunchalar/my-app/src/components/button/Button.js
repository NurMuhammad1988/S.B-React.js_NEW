import "../button/Button.css"
const Button = () => {
    const user = false;
    const login = "login";
    return (
        <div className="button1">
            <button className="button2">{user ? "logout" : login}</button>
            {/* {user ? "logout" : login} terminalni operator */}
        </div>
    );
};

export default Button