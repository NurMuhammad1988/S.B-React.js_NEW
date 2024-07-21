import { useState } from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import { colors } from "../../constants/colors";
import { Category } from "../";

const Main = () => {
    const [selectedCategory, setSelectedCategory] = useState("New");

    return (
        <Stack>
            {/* material ui daan keladigan stack componentining default classi colmn bo'ladi yani ichidagi elementlarni chapdan o'ngga tizib beradi */}
            <Category />
            <Box p={2} sx={{ height: "90vh" }}>
                <Container maxWidth={"90%"}>
                    <Typography variant={"h4"} fontWeight={"bold"} mb={2}>
                        {/*Typography bu material uidan keladigan component huddi htmldagi p tagiga o'hshaydi variant shu  Typography componentida bor yozib qo'yilgan varyantlar */}
                        {selectedCategory}{" "}
                        <span style={{ color: colors.secondary }}>videos</span>
                        {/* bu colors constants papkani ichidagi colors.jsda huddi rootga o'hshab yozib qo'yilgan jsxni ichida html taglarga shunday style atributi bilan dynamic stylelar bersaham bo'ladi */}
                    </Typography>
                    Videos
                </Container>
            </Box>
        </Stack>
    );
};

export default Main;
