import { useState, useEffect } from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import { colors } from "../../constants/colors";
import { Category, Videos } from "../";
import { ApiService } from "../../service/api.service";
// ApiService bu constructor

const Main = () => {
    const [selectedCategory, setSelectedCategory] = useState("New");
    // default holatda Newda turipti yani Category componentda map qilingan category massivini birinchi namesi New string default holatda turipti

    // 30 : 19 chi minutda qoldi

    const selectedCategoryHandler = (catecory) => setSelectedCategory(catecory);

    //bu holatda reactdan usestate chaqirilib birinchi bo'sh parametriga selectedCategory nomli o'zgaruvchi massiv yaratib olindi va shu selectedCategory o'zgargandagi qiymatlari setSelectedCategory yangi o'zgaruvchiga default holati string new qilib qo'yildi va selectedCategoryHandler nomli o'zgaruvchi yaratilib usestateni yangi o'zgargan setSelectedCategory massiv objecti parametrida category texti bilan chaqirildi va bu main componentida chaqirilgan catecory componentiga ichida setSelectedCategory o'zgaruvchan massivi bor selectedCategoryHandler o'zgaruvchi chaqirib qo'yildi sababi selectedCategoryHandlerni ichida setSelectedCategory bor va bu setSelectedCategory parametr qabul qiladi va yana usestateni birinchi qiymati new string bo'lgan selectedCategory o'zgaruvchiham chaqirildi endi category componentida selectedCategoryda default new string bor va selectedCategoryHandlerda o'zgaradigan setSelectedCategory bor endi Boxni ichiga container va Typography ichiga selectedCategory yani usestateni birinchi ichida faqat new string bor objecti chaqirildi shunda category componentida birinchi default new string turadi

    // console.log(process.env.REACT_APP_PUPLIC_KEY);
    // .evn va api.service.js filedagi server yani api kalitlar hafsizligini tekshirib ko'rish uchun yozildi

    useEffect(() => {
        // bu fetching functsiya api service fileni ichida yozilgan url qabul qiladigan axios bilan ishleydigan ApiService asyng funksiyani ichki funksiyasi//.then promise!!! 
        ApiService.fetching("search").then(data => console.log(data))

    }, []);

    return (
        <Stack>
            <Category
                selectedCategoryHandler={selectedCategoryHandler}
                selectedCategory={selectedCategory}
            />
            <Box p={2} sx={{ height: "90vh" }}>
                <Container maxWidth={"90%"}>
                    <Typography variant={"h4"} fontWeight={"bold"} mb={2}>
                        {selectedCategory}
                        <span style={{ color: colors.secondary }}> videos</span>
                    </Typography>
                    <Videos />
                </Container>
            </Box>
        </Stack>
    );
};

export default Main;
