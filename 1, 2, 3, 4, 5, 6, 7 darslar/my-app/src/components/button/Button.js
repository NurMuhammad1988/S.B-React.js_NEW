const Button = () => {
    const user = true;
    const login = "login";
    return <button>{user ? "logout" : login}</button>;
};

export default Button//agar export qilinadigan component faqat bitta componentni o'zidan iborat bo'lsa exportni shu yo'lidan foydalangan maqul