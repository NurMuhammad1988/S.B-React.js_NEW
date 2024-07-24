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

const VideoCard = ({ video }) => {
    console.log(video);
    return (
        <Card
            //breakpoints o'lchamlar lekin ishlamadi
            sx={{
                width: { xs: "100%", sm: "360px", md: "320px" },
                // yani xsda yani 0dan 600pxgacha hardni o'lchami 100% v smda yani 600pxdan yuqorida 900pxgacha har bir cardni o'lchami 360px va mdda 900pxdan yuqorida 1200pxgacha 320px
                boxShadow: "none",
                borderRadius: 0,
            }}
        >
            <CardMedia
                image={video?.snippet?.thumbnails?.high?.url}
                alt={video.snippet?.title}
                sx={{ width: { xs: "100%", sm: "360px" }, height: "180px" }}
            />

            <CardContent
                //breakpoints ranglar>> //sx={{ background:{xs:"black", sm:"red", md:"yellow", lg:"aqua", xl:"brown"}}
                // material uida response qilish (breakpoints) yani xs 0pxdan hissobleydi qancha pixelgacha ekanligini aytish kerak sm esa 600pxldan boshlanadi shunda background 0px dan 600pxgacha qora 600pxdan yuqorisi agar buyruq md, lg, xl qilib berilmasa har qanday size uchun qizil lekin bundan smdan keyingi sizlargaham alohida buyruq berib har qanday sizeda har qanday sharoitda turishini taminlash mumkun
                //////yani aynan bu holatda xsda:bo'lsa 0pxdan 600pxgacha black va smda:bo'lsa 600pxdan  900pxgacha red va mdda:bo'lsa 900pxdan 1200pxgacha yellow va lgda:bo'lsa 1200pxdan 1536pxgacha aqua va xl:da bo'lsa 1536pxdan yuqorisida qanday o'lchamli monitor bo'lishidan qattiy nazar brown
                sx={{
                    background: colors.primary,
                    height: "200px",
                    position: "relative",
                }}
            >
                <>
                    <Typography my={"5px"} sx={{ opacity: ".4" }}>
                        {moment(video?.snippet?.publishedAt).fromNow()}
                    </Typography>

                    <Typography variant="subtitle1" fontWeight={"bold"}>
                        {video?.snippet?.title.slice(0, 70)}
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
