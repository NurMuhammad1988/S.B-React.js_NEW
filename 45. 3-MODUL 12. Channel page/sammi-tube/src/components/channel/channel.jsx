import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Container } from "@mui/material";
import { ApiService } from "../../service/api.service";
import { ChannelCard, Videos } from "../";

const Channel = () => {
    const [channelDetail, setChannelDetail] = useState();
    const [videos, setVideos] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const getData = async () => {
            try {
                const dataChannelDetail = await ApiService.fetching(
                    `channels?part=snippet&id=${id}`
                );

                console.log(dataChannelDetail); //dataChannelDetail serverdan >>bu channels?part=snippet&id=${id} malumotlarni oldimi yo'qmi ko'rish uchun

                setChannelDetail(dataChannelDetail.items[0]);
                const dataVideo = await ApiService.fetching(
                    `search?.channelId=${id}&part=snippet2Cid&order=data`
                    // 2Cid&order=data channel cardda  videolarni ichida yana channel linki chiqib qolmasligi uchun
                );
                // console.log(dataVideo);
                setVideos(dataVideo?.items);
            } catch (error) {
                console.log(error);
            }
        };
        getData();
    }, [id]); //id o'zgarganda useeffect ishga tushadi (dependeses usestateni ikkinchi parametr)

    return (
        <Box minHeight={"95vh"} mt={"1vh"}>
            <Box>
                <Box
                    width={"100%"}
                    height={"200px"}
                    zIndex={10}
                    sx={{
                        backgroundImage: `url(${channelDetail?.brandingSettings?.image?.bannerExternalUrl})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        objectFit: "cover",
                        backgroundRepeat: "no-repeat",
                        // bu get request appidan get request tugaganda qilindi agar ishlamasa rapidapidan bu loyihani apilarini boshga gmaildan olib tekshirib ishlab hatoni to'g'irlash kerak
                    }}
                    // channelDetail?.brandingSettings?.image?.bannerExternalUrl yani apidan keltgan objecti ichidan background uchun rasimni olinishi
                />

                <ChannelCard video={channelDetail} marginTop={"-100px"} />
                {/* channelcarddagi channelni dumaloq rasmiga props orqali style berildi */}
            </Box>

            <Container maxWidth={"90%"}>
                <Videos videos={videos} />
            </Container>
        </Box>
    );
};

export default Channel;
