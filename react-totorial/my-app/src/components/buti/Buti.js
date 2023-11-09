const Buti = () => {
    const user = true; //false bo'lsa login, true bo'lsa logout
    const login = "login";

    return <button>{user ? "logout" : login}</button>; //yani terminalni operatorni reactda yozilishi
};

export default Buti