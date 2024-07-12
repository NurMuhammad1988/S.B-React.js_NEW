// import "./app-info.css";
import "./app-info.scss";//scssni chaqirish


const AppInfo = ({ allMoviesCount, favoriteMoviesCount }) => (
    <div className="app-info">
        {/* inlise style in;ine stylelar berganda bootstrapni stylelari o'chirib turildi chunki inline stylelar yakka o'zi yozilishi kerak ekan yani pxni react aftamatik tarzda qo'yadi>>>style={{ fontSize: 90 }} inline stylelarda lekin pxdan boshqalarda masalan remda rem yozilishi kerak>>>style={{fontSize: "30rem"}} inline styleda animatsiyalarniham qilish mumkun>>>style={{ fontSize:"1rem" , fontWeight: "bold", animation: "all", WebkitAnimation: "all" } } */}
        <p className="fs-3 text-uppercase">
            Barcha kinolar soni: {allMoviesCount}
        </p>
        <p className="fs-4 text-uppercase">
            Sevimli Filmlar:{favoriteMoviesCount}{" "}
        </p>
    </div>
);
export default AppInfo;
