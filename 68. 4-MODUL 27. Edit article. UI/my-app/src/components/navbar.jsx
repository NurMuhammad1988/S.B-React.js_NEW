import { Link, useNavigate } from "react-router-dom";
import { logo } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../helpers/persistance-storage";
import { logoutUser } from "../slice/auth";

const Navbar = () => {
    const { loggedIn, user } = useSelector((state) => state.auth);

    const navigate = useNavigate();

    const dispatch = useDispatch(); //holatni yangilash va yangi holatni qaytarish uchun

    const logoutHandleer = () => {
        dispatch(logoutUser()); // slice papkani ichida yozilgan reducer ona funksiyasi bolasi logoutUserni ohirgi holatini olish uchun
        removeItem("token"); //helpers papkani ichidagi persistance-storage fileda yozilgan funksiya vazifasi localstoragedagi tokenni udalit qilish
        navigate("/login"); //yo'naltirish yani agar logoutUserdagi ohirgi holat user login qilgan bo'lsa bu logouthandler funksiya pstdagi buttonga  bosilganda userni login.jsx filega yo'naltiradi yani user loyihadan chiqib ketadi va boshqatdan login qilish bo'limiga tushadi bunga sabab localstorgedan server bergan tokeni udalit bo'lgani uchun yani logoutHandleer ona funksiyani ichidagi bu ohirgi ikkala funksiya birdey ishleydi
    };

    return (
        <div>
            <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom container pt-3">
                <Link to={"/"}>
                    <div className="w-25">
                        <img src={logo} width={200} height={50} alt="img" />
                    </div>
                </Link>

                <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
                    {loggedIn ? (
                        <>
                            <p className="me-3 m-0 py-2 text-white text-decoration-none">
                                {/* {user.username} */}

                                {` Username:   ${user.username} `}
                            </p>

                            <button className="btn btn-outline-warning mx-2">
                                <Link
                                    to={"/create-article"}
                                    className="me-3 py-2 text-white text-decoration-none"
                                >
                                    Create article
                                </Link>
                            </button>

                            <button
                                className="btn btn-outline-danger"
                                onClick={logoutHandleer}
                            >
                                Logout Chiqish
                            </button>
                            {/* endi bu buttonga bosilganda userni loyihadan chiqarib qaytadan login qilish uchun loginga jo'natiladi yani qaytadan login parol terishi kerak browserdan localstoragedan tokeni udalit bo'ladi */}
                        </>
                    ) : (
                        <>
                            <button className="btn btn-outline-secondary mx-2 ">
                                <Link
                                    to={"/login"}
                                    className="me-3 py-2 text-white text-decoration-none"
                                >
                                    Login
                                </Link>
                            </button>

                            <button className="btn btn-outline-secondary ">
                                <Link
                                    to={"/register"}
                                    className="me-3 py-2 text-white text-decoration-none"
                                >
                                    Register
                                </Link>
                            </button>
                        </>
                    )}
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
