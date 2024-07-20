import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { Main, Channel } from "../";

const App = () => {
    return (
        <Box>
            {/* box bu material uidan chaqirilgan divga o'hshagan narsa yani ona div lekin bu boxda material ui bilan ishlash uchun kerak bo'ladigan atributelari bor */}
            <Routes>
                {/* ROUTESDA doim route componentlar bo'ladi route path atributini qabul qiladi shu sabab ROUTESNI ICHIDA ROUTE BO'LISHI KERAK  */}
                <Route path="/" element={<Main />} />
                <Route path="/channel" element={<Channel />} />
            </Routes>
        </Box>
    );
};

export default App;
