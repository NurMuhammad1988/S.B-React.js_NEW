import { Stack, Box } from "@mui/material"; // Stack grid sistemada ishleydigan material UI ni componenti
import { logo } from "../../constants";
import { colors } from "../../constants/colors";
import { Link } from "react-router-dom";
import { SearchBar } from "../";
// "../"<<<SearchBarni bunday chaqirilishi componentsni ichidagi indexdan keletgani uchun bitta tashqaridan izlab topib kel degan manoda

const Navbar = () => {
    return (
        <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            p={2}
            sx={{
                position: "sticky",
                top: 0,
                zIndex: 999,
                background: colors.primary,
            }}
        >
            {/* padding marginlarni material uida shunday bersaham bo'ladi>>>p={2}  sx={{}}>sx huddiki html filega style deb yozish bilan bir hil faqat farqi bu sx stylelarni dynamic qilishgaham kerak bo'lib qolishi mumkun shu sabab sx bilan stylelar berildi  */}
            <Link to={"/"}>
                {/* yani bu holatda linkda bosh sahifa bor linkdagi logo rasimga bosganda bosh sahifaga chiqaradi */}
                <img src={logo} alt="logo" height={30} />
            </Link>
            <SearchBar />
            <Box />
        </Stack>
    );
};

export default Navbar;
