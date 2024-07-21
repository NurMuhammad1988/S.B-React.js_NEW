import {
    Checkroom,
    DeveloperMode,
    FaceRetouchingNatural,
    FitnessCenter,
    GraphicEq,
    Home,
    LiveTv,
    MusicNote,
    OndemandVideo,
    School,
    SportsEsports,
    TheaterComedy,
} from "@mui/icons-material";

export const logo = "https://sammi.ac/favicon.svg";
// bu logo uchun qo'yildi

export const category = [
    // bu holatdagi Home, OndemandVideo va qolganlari iconlar hissoblanadi yani material uidan keletgan iconlar material ui cdndan yukalanganday bu iconlarham yuklanadi package.json fileda ko'rish mumkun
    { name: "New", icon: <Home /> },
    { name: "Movie", icon: <OndemandVideo /> },
    { name: "Live", icon: <LiveTv /> },
    { name: "Gaming", icon: <SportsEsports /> },
    { name: "Education", icon: <School /> },
    { name: "Sport", icon: <FitnessCenter /> },
    { name: "Comedy", icon: <TheaterComedy /> },
    { name: "Podcast", icon: <GraphicEq /> },
    { name: "Fashion", icon: <Checkroom /> },
    { name: "Crypto", icon: <DeveloperMode /> },
    { name: "Gym", icon: <FitnessCenter /> },
    { name: "Beauty", icon: <FaceRetouchingNatural /> },
    { name: "Music", icon: <MusicNote /> },
]; ////yani bular oddiy massivlar massivga ikkita qiymat berilepti birinchisi name yani map bilan tsikilga qo'yish uchun yani foydalanish uchun ikkinchi qiymati esa iconlar iconlarga esa material ui dan iconlar chaqirib olib kelinib qo'yildi va bu massiv category jsx fileda map qilinib bitta buttonni ichiga spanlar yozilib name va iconlar berilib va stylelar hoverlar berilib shu stylelar map sabab bitta button va spanga berilgan bo'lsaham mapni ichidagi hamma itemlarga yani elementlariga yani shu category o'zgaruvchi ichidagi massivlarga tasir qilib hamma button va spanlar bittada stylelarga ega bo'ldi   
