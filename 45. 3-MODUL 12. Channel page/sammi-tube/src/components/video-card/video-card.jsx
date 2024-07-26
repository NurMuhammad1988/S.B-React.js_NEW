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
import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {
    console.log(video);
    return (
        <Card
            sx={{
                width: { xs: "100%", sm: "360px", md: "320px" },

                boxShadow: "none",
                borderRadius: 0,
                margin: "auto",
            }}
        >
            <Link to={`/video/${video.id.videoId}`}>
                <CardMedia
                    image={video?.snippet?.thumbnails?.high?.url}
                    alt={video.snippet?.title}
                    sx={{ width: { xs: "100%", sm: "360px" }, height: "180px" }}
                />
                {/* yani endi video ustiga bosilganda Link sabab videoni idisi bor pagega o'tib ketadi sababi>>>/video/ yani bu /video/ app,jsxda videoni idlariga ulangan va videodetails filega jo'natilgan yani videoga bosilganda videodetailsga o'tib ketadi buni link bajaradi
            
            /////bu holatda  propsdan kelgan video yani apidan keletgan object va Linkga aytildiki linkga click bo'lganda videoni ichidagi videoni idsini ichidagi videoidiga obor videoIdni esa videdetailga havolasi bor app.jsda    */}
            </Link>

            <CardContent
                sx={{
                    background: colors.primary,
                    height: "200px",
                    position: "relative",
                }}
            >
                <Link to={`/video/${video.id.videoId}`}>
                    {/* yani link bosilganda videocardni title va boshqa joylariga click bo'lssaham link kerakli manzilga yo'naltiradi yani shu idisibor videoga jo'natadi */}
                    <Typography my={"5px"} sx={{ opacity: ".4" }}>
                        {moment(video?.snippet?.publishedAt).fromNow()}
                    </Typography>

                    <Typography variant="subtitle1" fontWeight={"bold"}>
                        {video?.snippet?.title.slice(0, 70)}
                    </Typography>

                    <Typography variant="subtitle2" sx={{ opacity: ".6" }}>
                        {video?.snippet?.description.slice(0, 50)}
                    </Typography>
                </Link>

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
