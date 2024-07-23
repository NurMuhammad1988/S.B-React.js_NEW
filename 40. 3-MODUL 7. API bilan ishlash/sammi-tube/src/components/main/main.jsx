import { useState, useEffect } from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import { colors } from "../../constants/colors";
import { Category, Videos } from "../";
import { ApiService } from "../../service/api.service";
// ApiService bu constructor

const Main = () => {
    const [selectedCategory, setSelectedCategory] = useState("New");
    // default holatda Newda turipti yani Category componentda map qilingan category massivini birinchi namesi New string default holatda turipti
    const [videos, setvideos] = useState([]);

    const selectedCategoryHandler = (catecory) => setSelectedCategory(catecory);

    //bu holatda reactdan usestate chaqirilib birinchi bo'sh parametriga selectedCategory nomli o'zgaruvchi massiv yaratib olindi va shu selectedCategory o'zgargandagi qiymatlari setSelectedCategory yangi o'zgaruvchiga default holati string new qilib qo'yildi va selectedCategoryHandler nomli o'zgaruvchi yaratilib usestateni yangi o'zgargan setSelectedCategory massiv objecti parametrida category texti bilan chaqirildi va bu main componentida chaqirilgan catecory componentiga ichida setSelectedCategory o'zgaruvchan massivi bor selectedCategoryHandler o'zgaruvchi chaqirib qo'yildi sababi selectedCategoryHandlerni ichida setSelectedCategory bor va bu setSelectedCategory parametr qabul qiladi va yana usestateni birinchi qiymati new string bo'lgan selectedCategory o'zgaruvchiham chaqirildi endi category componentida selectedCategoryda default new string bor va selectedCategoryHandlerda o'zgaradigan setSelectedCategory bor endi Boxni ichiga container va Typography ichiga selectedCategory yani usestateni birinchi ichida faqat new string bor objecti chaqirildi shunda category componentida birinchi default new string turadi

    // console.log(process.env.REACT_APP_PUPLIC_KEY);
    // .evn va api.service.js filedagi server yani api kalitlar hafsizligini tekshirib ko'rish uchun yozildi

    useEffect(() => {
        // variant-1
        const getData = async () => {
            // bu holatda asyng await funksiyasi bilan get so'rov qilingani pastda esa promise bilan get data qilinganiham bor//bu fetching functsiya api service fileni ichida yozilgan url qabul qiladigan axios bilan ishleydigan ApiService asyng funksiyani ichki funksiyasi
            try {
                const data = await ApiService.fetching("search");
                setvideos(data);
                // YANI useEffect yani user saytga kirganda useEffect sabab endi getData ishlaydi getdatada esa data o'zgaruvchi bor data o'zgaruvchi async ishlaydi yani kutib turadi nimani kutib turadiapiservicedan keladigan fetching funksiyani ishlashini kutib turadi va setstatedan keletgan setvideos bo'sh massivli objectga datani yani datalarni get qiladigan data o'zgaruvchini solib qo'yadi yani serverdan  datalarni get qiladigan funksiya bu getdata. useeffectni ichida yozilishini sababi saytga user kirganda yoki kerakli categoriyni bosganda ishleydi boshqa payti jim turadi//////try, catchni esa js darslaridan bir qarab qo'y try catch serverdan so'rov jaroyinida hatoliklar bo'lsa shuni categoriyga ajratib logda aytib turadigan function hissoblanadi 
            } catch (error) {
                console.log(error);
            }
        };

        getData();
    }, []);


    // useEffect(() => {
    // variant-2
    //     // bu fetching functsiya api service fileni ichida yozilgan url qabul qiladigan axios bilan ishleydigan ApiService asyng funksiyani ichki funksiyasi//.then promise!!!
    //     ApiService.fetching("search").then((data) => setvideos(data));
    // }, []);

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
                    <Videos videos={videos} />
                    {/* videos componentga  usestateni videos o'zgaruvchisiga ApiService o'zgaruvchida useeffect bilan chaqirilgan datadagi yani apidagi videolarni jo'natildi   */}
                </Container>
            </Box>
        </Stack>
    );
};

export default Main;
