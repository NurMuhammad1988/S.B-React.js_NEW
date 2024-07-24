import { CheckCircle } from "@mui/icons-material";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";

const ChannelCard = ({ video }) => {
    return (
        <Box
            sx={{
                boxShadow: "none",
                borderRadius: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: { xs: "356px", md: "320px" },
                height: "326px",
                margin: "auto",
            }}
        >
            <CardContent
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    textAlign: "center",
                }}
            >
                <CardMedia
                    image={video?.snippet?.thumbnails?.default?.url}
                    alt={video?.snippet?.title}
                    sx={{
                        borderRadius: "500%",
                        height: "180px",
                        width: "180px",
                        mb: 2,
                        border: "1px solid #e3e3e3",
                    }}
                    //yani material uida cardmedia cardcontentni ichida yozilishi kerak// yani bu holatda main componentda serverdan chaqirilib videos o'zgaruvchiga usestate bilan qo'yilgan objectlarni detallari bitta imgga  chaqirilib parametrlar yozildi yani bu img cardmedia nomli ui componentda chaqirildi va image tegiga object ichida keladigan api malumotlari chaqirildi (marshutlash) videosni ichidagi snippet snippet ichidagi thumbnails thumbnails ichidagi default default ichidagi url bu url shu marshutdagi videoni rasmini urli va agar bu url bilan muammo bo'lsa shu videoni titeli rasimni joyida chiqsin deyildi
                />

                <Typography variant="h6">
                    {video?.snippet?.title}
                

                    <CheckCircle
                        sx={{ fontSize: "14px", color: "gray", ml: "5px" }}
                    />
            
                </Typography>

                {video?.statistics?.subscriberCount && (

                    <Typography sx={{fontSize: "15px", fontWeight: "500", color: "gray"}}>
                      {parseInt(video?.statistics?.subscriberCount).toLocaleString("en-US")} {" "} Subscribers
                    </Typography>

                )}
            </CardContent>
        </Box>
    );
};

export default ChannelCard;
