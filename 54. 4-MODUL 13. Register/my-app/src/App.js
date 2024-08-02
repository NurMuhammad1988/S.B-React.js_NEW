import { Routes, Route } from "react-router-dom";
import { Main, Login, Register, Navbar } from "./components"; //indexni aftamatik tarzda topadi//////asosiy src papkani ichidagi bu app.js dasturni asosiy yadrosi hissoblanadi components papkada yaratiladigan jsx componentlarni distruptatsa qilib impor qilindi chunki components papkada index.jsda bu componentlar default qilib export qilingan bu degani defaulr as import shu  src papkadagi har qanday papkaga distruptatsa qilib import qilinsa bo'ladi


////BU 49,50,51,52 CHI DARSLAR YANA QAYTADAN QILINSHI KERAK!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


const App = () => {
    return (
        <div>
            <Navbar />
            {/* navbar routesni ichidamas chunki navbar doim hamma sahifaga kirilgandaham yuqorida joyida turadi va navbarga pastdagi login va register componentlarni link orqali berib qo'yildi shunda navbarda login va register textlariga bosganda shu componentlarga o'tadi lekin navbar doimgi joyida qolaveradi */}
            <Routes>
                {/* routes bu react router domni componenti routes ona divi ichiga yozilgan componentlarni react router bir martta render qilib beradi yani sayt bir martt ayuklanadi va keyin user route componentlarda chaqirilgan sahifalarga bosganda sayt qayta yuklanmaydi routesni vazifasi shu route esa path yani yo'lni belgilaydi path ichiga yozilgan component nomiga yani manzilga bosilganda element ichidagi componentga jo'natadi va sayt qayta yuklanmaydi */}
                {/* "/" main componentni yani asosiy componentga olib boradi bu dafault!!! */}
                <Route path="/" element={<Main />} />
                <Route path="/login" element={<Login />} />
                <Route path="register" element={<Register />} />
                {/* yani bu holatda keyinchalik componentlarda marshutlash bo'lganda shu pathdan foydalaniladi yani bu app.jsdagi birinchi default holat//bu holatda esa login va register navbar componentda chaqirilib Link component bilan textlar (Login, Register) ustiga bosganda path orqali belgilangan componentlarga o'tadi */}
                {/* agar bu joyda input.jsxham chaqirilganda asosiy sahifaga */}
            </Routes>
        </div>
    );
};

export default App;
