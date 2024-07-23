import {
    Avatar,
    Card,
    CardContent,
    CardMedia,
    Stack,
    Typography,
} from "@mui/material";
//
import { colors } from "../../constants/colors";
import moment from "moment"; //npm i moment qilin dasturga chaqiriladigan kutubhona vazifasi???
import { CheckCircle } from "@mui/icons-material";

//videos.jsxdan video-cardga props orqali jo'natilgan video bu videoda serverdan chaqirilib map qilingan videoId nomli papkadagi itemlar bor
const VideoCard = ({ video }) => {
    console.log(video);
    return (
        <Card sx={{ width: "320px", boxShadow: "none", borderRadius: 0 }}>
            <CardMedia
                image={video?.snippet?.thumbnails?.high?.url}
                alt={video.snippet?.title}
                sx={{ width: "360px", height: "180px" }}
            />
            {/* ?>>bor ysni so'roq belgisi bo'lsa yahshi ishlasin agar yo'q bo'lsa hato chiqarmasin yani muhummas */}

            <CardContent
                sx={{
                    background: colors.primary,
                    height: "200px",
                    position: "relative",
                }}
            >
                <>
                    <Typography my={"5px"} sx={{ opacity: ".4" }}>
                        {moment(video?.snippet?.publishedAt).fromNow()}
                        {/* moment bu npm i moment  qilib chaqirilgan kutubhona buni vazifasi???>>>Sanalarni tahlil qilish, tekshirish, manipulyatsiya qilish va formatlash uchun JavaScript sanalar kutubxonasi.Moment.js eski loyiha bo'lib, hozir texnik xizmat ko'rsatish rejimida. Aksariyat hollarda siz boshqa kutubxonani tanlashingiz kerak. fromNowham momentni funksiyasi??? */}
                    </Typography>

                    <Typography variant="subtitle1" fontWeight={"bold"}>
                        {/* variant="subtitle1" material uini Typography componentini subtitle1 nomli classi desaham bo'ladi paddingli class  */}
                        {video?.snippet?.title.slice(0, 70)}
                        {/* slice metodi bilan datadan keletgan elementlarniu titelidagi so'zlar 50tadan ko'p bo'meydigan qilib qo'yildi */}
                    </Typography>

                    <Typography variant="subtitle2" sx={{ opacity: ".6" }}>
                        {video?.snippet?.description.slice(0, 50)}
                    </Typography>
                </>

                <>
                    <Stack
                        direction={"row"}
                        position={"absolute"}
                        bottom={"10px"}
                        alignItems={"center"}
                        gap={"5px"}
                    >
                        <Avatar src={video?.snippet?.thumbnails?.high?.url} />

                        <Typography variant="subtitle2" color={"gray"}>
                            {video?.snippet?.channelTitle}
                            <CheckCircle
                                sx={{
                                    fontSize: "12px",
                                    color: "gray",
                                    ml: "5px",
                                }}
                            />
                        </Typography>
                    </Stack>
                </>
            </CardContent>
        </Card>
    );
};

export default VideoCard;
