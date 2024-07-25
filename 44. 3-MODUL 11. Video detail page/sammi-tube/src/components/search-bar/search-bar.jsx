import { Paper, IconButton } from "@mui/material";
import { colors } from "../../constants/colors";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; //usenavigate hooki react router domni hooki vazifasi yani user bu search-bar comonentidan foydalanib nimadur harakat qilganda bu search-bar componentidan boshqa comonentga yo'naltiradi yani bu holatda search componentga
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
    const navigate = useNavigate();
    const [value, setValue] = useState("");

    const changeHandler = (e) => {
        e.preventDefault();
        // console.log(value);//inputga tushgan malumotni usestatedagi bo'sh stringga olib y
        if (value) {
            navigate(`/search/${value}`);
            setValue(" "); //YANI INPUTGA SUBMIT BO'LGANDA INPUT TOZALANIB QOLADI VA VAZIFA BAJARILADI???
        }
    };

    return (
        <Paper
            onSubmit={changeHandler}
            component={"form"}
            sx={{
                border: `1px solid ${colors.secondary}`,
                pl: 2,
                boxShadow: "none",
            }}
        >
            <input
                type="text"
                placeholder="Search..."
                className="search-bar"
                onChange={(e) => setValue(e.target.value)}
                value={value}
                // value use statedan kelEtgan boshlang'ich qiymati bo'sh object agar inputda onchage hodisasi sodir bo'lsa setvalue funksiya ishga tushib inputni qiymatlarini olib beradi va bu qiymatlar valuda saqlanadi va bu inputni ona divi paperga submit hodisasi bo'lganda changeHandler funksiyasi ishlab inputdagi qiymatni olib beradi va agar valu o'zgaruvchi true bo'lsa yani bo'sh bo'lmasa yani submit bo'lsa navigate funksiyasi bilan submitdagi malumotni string qiliob search componentga jo'nat deyildi endi inputda valu qiymati bor agar valuega user qiymat bersa navigation sabab osha qiymatni izlash uchun search componentga yo'naltiriladi
            />

           

            <SearchIcon />
        </Paper>
    );
};

export default SearchBar;
