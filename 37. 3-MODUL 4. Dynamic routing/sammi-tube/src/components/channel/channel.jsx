import { Link ,useParams } from "react-router-dom";// useParams react router domni hooki hissoblanadi yani funksiya vazifasi saytdagi parametrlar bilan ishlaydi urldagi parametrlar bilan ishlaydi


import { Button } from "@mui/material";

const Channel = () => {

    const params = useParams()
    console.log(params);//dynamic keladigan idlarni ko'rish uchun

    return (
        <Link to={"/"}>
            {/* Linkda to atributi bor bu to marshututatsa uchun kerak masalan toga bu buttongga click bo'lganda qayerga borish kerakligi aytildi shunda user buttonga bosganda  linkdagi todagi adressga yo'naltiriladi  */}
            <Button>Main</Button>
        </Link>
    );
};

export default Channel;
