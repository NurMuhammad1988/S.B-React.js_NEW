import "../filed/Field.css"
const Field = () => {
    const placeholder = "Typing...";
    return (
        <div className="input-div">
            <input className="input1" type="text" placeholder={placeholder} />
        </div>
    );
};


export {Field}//yani export qilishni ikkinchiusuli
//export defaultdan faqat bitta funksiyani export qilish mumkun bu yerda yani Field funksiyasini export qilish mumkun 
//export {Field, yana bitta js funksiya , yanna bitta js funksiya} da esa shunday qilib  shu Field jsdagi har bir funksiyani alohida alohida export qilish mumkun