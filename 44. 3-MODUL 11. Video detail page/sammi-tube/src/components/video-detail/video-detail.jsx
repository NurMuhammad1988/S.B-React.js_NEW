import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ApiService } from "../../service/api.service";
import { Box } from "@mui/material";
// import ReactPlayer from "react-player";
import ReactPlayer from "react-player"

const VideoDetail = () => {
    const [videoDetail, setVideoDetail] = useState(null);

    const { id } = useParams();

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await ApiService.fetching(`videos?part=snippet,statistics&id=${id}`);
                // statistics bu rapid api serverdan keletgan vidoni malumotlari
                console.log(data);

                setVideoDetail(data.items[0]);
            } catch (error) {
                console.log(error);
            }
        };
        getData();
    }, [id]);

    10:50dan boshlab hatoni topsa bo'ladi
    // const {
    //     snippet: {title,channelId,channelTitle,description,tags,thumbnails,},
    //     statistics: { viewCount, likeCount, commentCount },
    // } = videoDetail;

    // bu server apidan keletgan rapid apida yozilgan youtubeni serveridagi videoni malumotlari bularni distruptasa qilib getdata qilinganda endi qisqartirib umumiy qilib videdetail deb chaqirsak bo'ldi shu o'zgaruvchi ichidagi hamma serverga tegishli malumotlar get bo'ladi >>>bunaqa qilib uzun yozib yurish shartmas endi>>>`videos?part=snippet,statistics&id=

    return (
        // <Box minHeight={"90vh"} mb={10}>
        //     <Box display={"flex"}>
        //         <Box width={"75%"}>
        //           <ReactPlayer url={`https://www.youtube.com/watch?v= ${id}`}/>
        //         </Box>
        //         <Box width={"25%"}>Suggested video</Box>
        //     </Box>
        // </Box>

        <div>VideoDetail: {id}</div>
    );
};

export default VideoDetail;
