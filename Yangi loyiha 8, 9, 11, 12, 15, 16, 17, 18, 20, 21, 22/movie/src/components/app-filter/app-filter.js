import "./app-filter.css";
const AppFilter = ({updateFilterHandler, filter}) => {
    return (
        <div className="btn-group ">
            {btnsArr.map((btn) => (
                <button key={btn.name} 
                className={`btn ${filter === btn.name ? "btn-dark" : "btn btn-outline-dark"}`} 
                onClick={() => updateFilterHandler(btn.name)} type="button">
                    {btn.label}
                    {/* yani endi bitta buttonda btnsArr o'zgaruvchi map qilingani sabab btnsArrni hamma qiymatlari map sabab nusxalandi va key bilan btnsArrni label: qiymatlari berib qo'yildi   */}
                </button>
            ))}

            {/* <button className="btn btn-outline-dark" type="button">
                Mashxur kinolar
            </button>
            <button className="btn btn-outline-dark" type="button">
                Eng ko'p ko'rilgan kinolar
            </button> //btnsArr o'zgaruvchi sabab bu ikkita button chernavikga olib turildi */}
        </div>
    );
};

const btnsArr = [
    { name: "all", label: "Barcha kinolar" },
    { name: "popular", label: "Mashxur kinolar" },
    { name: "mostViewers", label: "Eng ko'p ko'rilgan kinolar" },
];

export default AppFilter;
