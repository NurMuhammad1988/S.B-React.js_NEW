import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
    params: {
        maxResults: "50",
    },

    headers: {
        //"b24dd1ad3bmsh959c49b96b3e0dbp1024f2jsn34dde71fcae3" becet bilan manda ishladi lekin darsda ishlamadi shu sabab agar darsd davomida manda ishlamey qolsa ""stringi bilan api keyni becetni udalit qilib becetni joyiga>>"b24dd1ad3bmsh959c49b96b3e0dbp1024f2jsn34dde71fcae3"<<shuni qo'y
        "x-rapidapi-key": `${process.env.REACT_APP_PUPLIC_KEY}`,
        "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
        
    },
};

export const ApiService = {
    async fetching(url) {
        const responses = await axios.get(`${BASE_URL}/${url}`, options);
        return responses.data;
    },
};
