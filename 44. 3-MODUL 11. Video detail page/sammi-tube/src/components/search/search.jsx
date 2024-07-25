import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ApiService } from "../../service/api.service";
import { Box, Container, Typography } from "@mui/material";
import { Videos } from "..";
import { colors } from "../../constants/colors";

const Search = () => {
    const [videos, setVideos] = useState([]);
    const { id } = useParams();
    // console.log(id);
    useEffect(() => {
        const getData = async () => {
            try {
                const data = await ApiService.fetching(
                    `search?part=snippet&q=${id}`
                );
                // console.log(data);
                setVideos(data.items);
            } catch (error) {
                console.log(error);
            }
        };

        getData();
    }, [id]); //yani qachonki useparams useeffectni parametridagi id o'zgarsa useeffect ishga tushadi
    // console.log(videos);
    ////BU HOLATDA useeffect bilan get data funksiyasi bilan apiservise funksiyasi chaqirilib fetching qilinib setviseos bo'sh massiviga datadanitemslar chaqirilgan va useparams hooki bilan videolarni idlari olinib span ichida search component ishlaganda berib qo'yilgan
    return (
        <Box p={2} sx={{ height: "90vh" }}>
            <Container maxWidth={"90%"}>
                <Typography variant="h4" fontWeight={"bold"} mb={2}>
                    Search results for
                    <span style={{ color: colors.secondary }}>{id}</span> videos
                </Typography>
                <Videos videos={videos} />
            </Container>
        </Box>
    );
};

export default Search;
