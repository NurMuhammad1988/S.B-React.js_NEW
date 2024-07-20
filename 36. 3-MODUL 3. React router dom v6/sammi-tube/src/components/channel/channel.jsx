import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Channel = () => {
    return (
        <Link to={"/"}>
            {/* Linkda to atributu bor bu to marshututatsa uchun kerak masalan toga bu buttongga click bo'lganda qayerga borish kerakligi aytildi shunda user buttonga bosganda  linkdagi todagi adressga yo'naltiriladi  */}
            <Button>Main</Button>
        </Link>
    );
};

export default Channel;
