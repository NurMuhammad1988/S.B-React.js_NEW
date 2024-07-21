import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { Main, Channel, Navbar, VideoDetail, Search } from "../";

////http://localhost:3000/search/asdsss2334 browserda shu holatda searchni o'rniga bboshqa componentlar qo'yilsa o'sha component ishlaydiyani asosiyga aylanadi sababi router huddi htmldagi marshutlashga o'hsharkan lekin bu faqat reactda marshutlash yani sahifadan sahifaga yo'naltirish

const App = () => {
    return (
        <Box>
            {/* box bu material uidan chaqirilgan divga o'hshagan narsa yani ona div lekin bu boxda material ui bilan ishlash uchun kerak bo'ladigan atributelari bor */}
            <Navbar />

            <Routes>
                {/* ROUTESDA doim route componentlar bo'ladi route path atributini qabul qiladi shu sabab ROUTESNI ICHIDA ROUTE BO'LISHI KERAK  */}

                <Route path="/" element={<Main />} />

                <Route path="/channel/:id" element={<Channel />} />

                {/* dynamic id yani router domda slashdan keyin :id qo'yilsa dynamic id hissoblanadi */}

                <Route path="/video/:id" element={<VideoDetail />} />

                <Route path="/search/:id" element={<Search />} />
            </Routes>
        </Box>
    );
};

export default App;
