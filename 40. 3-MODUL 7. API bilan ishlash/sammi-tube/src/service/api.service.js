import axios from "axios";
// npm i axios qilib aynan shu dars uchun yuklangan

const BASE_URL = "https://youtube-v31.p.rapidapi.com";
// endi shu https://youtube-v31.p.rapidapi.com linkgga axios bilan get so'rov jo'natish kerak shunda rapidapi yputubedan bazi server kodlarni tajriba uchunberadi

const options = {
    params: {
        maxResults: "50",
    },

    headers: {
        //"b24dd1ad3bmsh959c49b96b3e0dbp1024f2jsn34dde71fcae3" becet bilan manda ishladi lekin darsda ishlamadi shu sabab agar darsd davomida manda ishlamey qolsa ""stringi bilan api keyni becetni udalit qilib becetni joyiga>>"b24dd1ad3bmsh959c49b96b3e0dbp1024f2jsn34dde71fcae3"<<shuni qo'y
		'x-rapidapi-key': `${process.env.REACT_APP_PUPLIC_KEY}`,
		'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
	}//rapid apini server linki va kalit so'zlari
}; ////api server manizili mahfiy saqlanishi yani user tomoniga browserdan ko'rinmasligi kerak shu sabab bu api yani server manzili process.env.REACT_APP_PUPLIC_KEY qilib .evn filedagi REACT_APP_PUPLIC_KEY mahsus react o'zgaruvchisiga saqlab qo'yildi va bu yerda jsdagi progress o'zgaruvchi parametri sabab headewrs papkani ichiga qo'yildi shunda userga browserdan hech narsa ko'rinmaydi yani asosan evn. va REACT_APP_PUPLIC_KEY filelar va ichidagi kkalitlar ko'rinmeydi agar bu kalitlar real loyihada hammaga ko'rinsa serverdagi narsalarni hamma olib ishlataverishi mumkun yoki buzib tashlashi malumotlarni o'zgartirib tashlashi mumkun
//.evn filega server kalitlari qo'yilgandan keyin loyiha qaytadan yangidan !!!npm start!!! qilib ochilishi kerak

export const ApiService = {
    // ApiService bu constructor funksiya yani exportligini sababi o'zgarmas
    async fetching(url) {
        const response = await axios.get(`${BASE_URL}/${url}`, options);//axios bilan get do'rovni bajarishda becet ichida dynamic yozish  BASE_URLga rapid apini sever linki chaqirilgan url esa keyingi chaqirilishi kerak bo'lgan server urllari<<bullar bitta parametrda shuncha narsa yozildi   ikkinchi parametr options esa shu serverni so'rovidagi optionslar yani parametrlar
        // 1chi parametr url 2chisi esa parametrlarni qabul qiladi await esa async functionni kutib turish buyrug'i yaniserverdan malumotlar kelgancha kutib turadi
        return response.data//responsni qaytar deyildi yani response o'zgaruvchidagi vazifani bajar get so'rovni amalga oshir deyildi va serverdagi faqat data fileni yani data fileni linki get qil deyildi axios shuniu bajaradi
    },
};
