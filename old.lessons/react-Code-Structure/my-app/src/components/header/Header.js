const Header = () => {
    // const text = "Hello1 Nur";
    //getText kichkina harf yani bu component emas bu oddiy funksiya agar component bo'lsa boshi katta harf bilan yoziladi
    const getText = (text) => {
        return (
            <div>
                <h1>Hello {text}</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ratione, voluptas! Sapiente nobis facilis ipsa rerum quaerat
                    officia molestiae excepturi expedita!
                </p>
            </div>
        );
    };

    return <div>{getText("Nur")}</div>;//textni shu joyga chaqirishxam mumkun edi
};

export default Header
// export {Header}//shunday export qilsaham bo'ladi yani bunda Header jsdafi har bir funksiyani alohida alohida shunday export qilsa bo'ladi export default Headerda esa faqat bitta shu funksiyani o'zini export qilsa bo'ladi