import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Main = () => {
    return (
        <Link to={"/channel"}>
              {/* Linkda to atributu bor bu to marshututatsa uchun kerak masalan toga bu buttongga click bo'lganda qayerga borish kerakligi aytildi shunda user buttonga bosganda  linkdagi todagi adressga yo'naltiriladi  */}
            <Button>Channel</Button>
        </Link>
    );
};

export default Main;
