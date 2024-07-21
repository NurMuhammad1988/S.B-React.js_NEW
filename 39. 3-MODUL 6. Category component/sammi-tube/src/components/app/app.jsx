import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { Main, Channel, Navbar, VideoDetail, Search } from "../";

const App = () => {
    return (
        <Box>
            <Navbar />
            {/* navbar bu holatda tashqarida turishi user hamma sahifaga o'tgan taqdirdaham navbar doim tepada birinchi bo'lib turaveradi yani user uchun bu marshutizatsa uchun qulay*/}

            <Routes>
                <Route path="/" element={<Main />} />

                <Route path="/channel/:id" element={<Channel />} />

                <Route path="/video/:id" element={<VideoDetail />} />

                <Route path="/search/:id" element={<Search />} />
            </Routes>
        </Box>
    );
};

export default App;
