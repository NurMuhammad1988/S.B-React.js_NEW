import { Box, Stack } from "@mui/material";
import { VideoCard } from "../";

const Videos = ({ videos }) => {
    // main {{videos}} componentdan chaqirildi
    // console.log(videos);//serverdan keletgan videolar kodni ildiziga qarab yahshilab qarab borish kerak
    return (
        <Stack
            width={"100%"}
            direction={"row"}
            flexWrap={"wrap"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={2}
        >
            {videos.map((item) => (
                <Box key={item.id.videoId}>
                    {item.id.videoId && <VideoCard video={item} />}
                    {/* &&>>true-false bo'yicha ishleydi yani agar item id videoIdlar yani serverdan keltgan elementlar rostdan kelsa undan keyingina videocard componentni ishlat deyildi// va videocardga props qilib itemlar berib qo'yildi qaysi itemlar main componentda serverdan chaqirilgan data.itemi bor vidos o'zgaruvchini bu componentga props orqali kelgan videos o'zgaruvchini arrayida serverdan kelgan itemlar yani bu itemlar map qilinib itemlar tsikilga qo'yildi endi bu itemlarda videcardda ishlatish mumkun   */}
                </Box>
            ))}
        </Stack>
    );
};

export default Videos;
