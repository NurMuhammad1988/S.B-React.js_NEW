import { useState, useEffect } from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import { colors } from "../../constants/colors";
import { Category, Videos } from "../";
import { ApiService } from "../../service/api.service";
// ApiService bu constructor

const Main = () => {
    const [selectedCategory, setSelectedCategory] = useState("New");

    const [videos, setvideos] = useState([]);

    const selectedCategoryHandler = (catecory) => setSelectedCategory(catecory);

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await ApiService.fetching(
                    `search?part=snippet&q=${selectedCategory}`
                );

                setvideos(data.items);
            } catch (error) {
                console.log(error);
            }
        };

        getData();
    }, [selectedCategory]); //yani bu useeffectni qaram funksiyasi yani endi selectedCategory qachonki o'zgarsagini bu useeffect ishga tushib ichidagi getdata funksiyasini ishga tushuradi selectedCategoryda esa usestate sabab default holati serverdan keletgan malumotni new papkasi va endi selectedCategory har o'zgarganda useeffect ishga tushib har hil categoriyli videolar apidan kelepti masalan kive gaming education va hakozo lekin categoryni qanday ajratepti??????>>> `search?part=snippet&q=${selectedCategory}` yani &q yani queriy buyruq sabab yani datani ichidagi  ${selectedCategory}da endi  setSelectedCategory bor setSelectedCategoryda esa apidan keletgan malumotlar bor va u malumotlar categoriyga ajratilgan qayerda ajratilgan apidan keletgan objectda bu category yo'q lekin constantsni ichidagi index jsda bu categoriylar apida get qilinganda nomlari iconlari category nomli o'zgaruvchida chaqirilgan buni hammasi ApiService sabab yani ApiService funksiya ishlaganda selectedCategory get so'rov jo'natadi ichida esa selectedCategoryHandler sabab category bor bu selectedCategoryHandlerni ichidagi category setSelectedCategoryga parametr qilib berilgan va bu setSelectedCategoryni o'zgaruvchisi yani setSelectedCategory o'zgartirradigan o'zgaruvchisi selectedCategory endi selectedCategoryniham parametrida category bor bu selectedCategory serverga so'rov bilan borganda parametridagi categoryni rapidapi taniydi va kerakli categoriylarni beradi

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
                </Container>
            </Box>
        </Stack>
    );
};

export default Main;
