import { Stack } from "@mui/material";
import { category } from "../../constants";
import { colors } from "../../constants/colors";

const Category = ({ selectedCatigoryHandler, selectedCategory }) => {
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
                        color: item.name === selectedCategory && "#fff",
                    }}
                    onClick={() => selectedCatigoryHandler(item.name)}
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
                    <span style={{ opacity: "1", marginRight: "20px" }}>
                        {item.name}
                    </span>
                </button>
            ))}
        </Stack>
    );
};

export default Category;
