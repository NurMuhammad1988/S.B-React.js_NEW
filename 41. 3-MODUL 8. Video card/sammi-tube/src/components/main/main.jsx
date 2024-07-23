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
                // ? yani so'roq belgisidan keyin query yani serverga so'rov buyruqlari tushunuladi &<<bu esa va degani //snippet????????????
                //dataga fetchingni chaqirib query buyruqlar berilganda selectedCategory chaqirildi yani selectedCategoryda usestate bilan boshlang'ich qiymati new qilingan yani serverdagi objectlardan new objectiga get so'rov jo'natildi
                setvideos(data.items);
                // yani endi datadan,serverdan faqat items nomli object keladi yani object ichida massiv
            } catch (error) {
                console.log(error);
            }
        };

        getData();
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
                    <Videos videos={videos} />
                    {/* videos componentga jo'natildi yani bu videos props qilib videos componentga jo'natildi bu videos o'zgaruvchida setdatadagi malumotlar yani serverdan keladigan data o'zgaruvchini itemlari bor */}
                </Container>
            </Box>
        </Stack>
    );
};

export default Main;
