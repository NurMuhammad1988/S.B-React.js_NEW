import { Stack } from "@mui/material";
import { category } from "../../constants";
import { colors } from "../../constants/colors";

////                 usestatedan keletgan ikita massivlar
const Category = ({ selectedCategoryHandler, selectedCategory }) => {
    return (
        <Stack direction={"row"} sx={{ margin: "auto", display: "flex" }}>
            {/* bu material uini stack componentiga ushbu style berilgan edi>>>sx={{overflowX: "scroll" }} yani agar category function componentni elementlari uzun bo'lib x o'qi bo'yicha ekranga sig'may qolsa scroll bo'lsin chapga o'ngga yursin ekranga sig'may qolgan elementlarham scroll sabab ko'rinsin deyilganda (yani darsda ustozni manitorida)lekin hozirda bu dars qilinayotgan manitor ancha katta bo'lganligi sababli bu styleni o'chirib qo'ydim chunki scroll hunuk ko'rinayapti buni o'rniga>>>sx={{margin: "auto"}} style qo'yildi sabab category component elementlari bilan manitorni o'rtasida turishi uchun agar kichkinaroq manitorda sayt ko'rilsa ustoz yozgan stylelarni yozib qo'yish kerak ???????????LEKIN BU HOLATDA SAYT RESPONSE BO'LMAYAPTI YANI BOSHQA QURILMALARGA MOSLASHMAYAPTI?????????????????   */}
            {category.map((item) => (
                <button
                    key={item.name}
                    className="category-btn"
                    style={{
                        borderRadius: "0",
                        background:
                            item.name === selectedCategory && colors.secondary,
                            // yani setstateni birinchi qiymatini default holati selectedcategoryga teng
                        color: item.name === selectedCategory && "#fff",
                    }}
                    // agar index.jsdan map qilingan category massivini item.namelarini   backgroundi: yani birinchi string malumotlarini backgroundi qattiy teng bo'lsa  selectedCategoryga yani main componentda yozilgan classga activ bo'lib qattiy teng bo'lsa colorsdagi secondariyni ishlat yokida default holatda qolsin yani default holati oq//////agar color: agar item.namelarni colori qattiy teng bo'lsa selectedCategory yani activ classga item.namelarni rangini oq qilib qo'y default holatda esa qora
                    onClick={() => selectedCategoryHandler(item.name)}
                    // default holatda Newda turipti yani map qilingan category massivini birinchi namesi "New" string default holatda turipti qolganlariga bosganda esa activ class bosilgani bo'ladi
                >
                    <span
                        style={{
                            color:
                                item.name === selectedCategory
                                    ? "#fff"
                                    : colors.secondary,
                            marginRight: "15px",
                        }}
                    >
                        {item.icon}
                    </span>
                    {/* bu birinchi spanda map qilingan categoryni iconlar bor bunga agar item icon selectedCategoryga yani activ classga teng bo'lsa rangini  oq qil yokida colorsni ichidagi secondary rangidada qotib tur deyilgan desaham bo'ladi */}

                    <span style={{ opacity: "1", marginRight: "20px" }}>
                        {item.name}
                    </span>
                    {/* yani bu item.namelarni default stylelari yuqoridagi if elslar esa defaultmas holatlar yani activ class uchun */}
                </button>
            ))}
        </Stack>
    );
};

export default Category;
