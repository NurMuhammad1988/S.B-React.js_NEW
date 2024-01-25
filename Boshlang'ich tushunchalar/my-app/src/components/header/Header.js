import "../header/Header.css";
const Header = () => {
    //component doim bosh harfi katta hariflar bilan yoziladi

    const getText = (text) => {
        //bu component emas bu funcsiya shu uchun bosh harfi mayda harif bilan yozilgan
        return (
            <div>
                <h1 className="h11">Hello {text}</h1>
                <p className="p22">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Culpa, numquam ipsum. Ipsa earum praesentium labore,
                    possimus a rem corporis libero!
                </p>
            </div>
        );
    };

    return <div> {getText("Nur")}</div>;
};

export default Header

//export defaultdan faqat bitta funksiyani export qilish mumkun bu yerda yani Header funksiyasini export qilish mumkun 
//export {Header, yana bitta js funksiya , yanna bitta js funksiya} qilib  shu Header jsdagi har bir funksiyani alohida alohida export qilish mumkun