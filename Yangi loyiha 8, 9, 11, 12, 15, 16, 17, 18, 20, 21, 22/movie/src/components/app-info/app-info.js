import "./app-info.css"

const AppInfo = ({allMoviesCount, favoriteMoviesCount}) => (
  <div className="app-info">
    {/* inlise style in;ine stylelar berganda bootstrapni stylelari o'chirib turildi chunki inline stylelar yakka o'zi yozilishi kerak ekan yani pxni react aftamatik tarzda qo'yadi>>>style={{ fontSize: 90 }} inline stylelarda lekin pxdan boshqalarda masalan remda rem yozilishi kerak>>>style={{fontSize: "30rem"}} */}
    <p className="fs-3 text-uppercase" style={{ fontSize: 90 }}>Barcha kinolar soni: {allMoviesCount}</p>
    <p className="fs-4 text-uppercase">Sevimli Filmlar:{favoriteMoviesCount} </p>

  </div>
)
22. Inline style va SCSS darsi  qoldi
export default AppInfo