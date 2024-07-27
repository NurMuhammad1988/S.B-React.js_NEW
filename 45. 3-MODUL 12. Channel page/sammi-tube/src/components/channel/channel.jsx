import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@mui/material";
import { ApiService } from "../../service/api.service";

const Channel = () => {
    const [channelDetail, setChannelDetail] = useState([]);
    const [videos, setVideos] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const getData = async () => {
            try {
                const dataChannelDetail = await ApiService.fetching(
                    `channels?part=snippet&id=${id}`
                );

                console.log(dataChannelDetail);//dataChannelDetail serverdan >>bu channels?part=snippet&id=${id} malumotlarni oldimi yo'qmi ko'rish uchun

                setChannelDetail(dataChannelDetail );
                const dataVideo = await ApiService.fetching(
                    `search?.channelId=${id}&part=snippet`
                );

                setVideos(dataVideo);
            } catch (error) {
                console.log(error);
            }
        };
        getData();
    }, [id]); //id o'zgarganda useeffect ishga tushadi (dependeses usestateni ikkinchi parametr)

    return (
        <Link to={"/"}>
            <Button>Main: {id}</Button>
        </Link>
    );
};

export default Channel;
