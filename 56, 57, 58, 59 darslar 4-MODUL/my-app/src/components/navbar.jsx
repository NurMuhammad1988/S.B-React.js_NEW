import { Link } from "react-router-dom";
import { logo } from "../constants";
import { useSelector } from "react-redux";

const Navbar = () => {
    const { loggedIn, user } = useSelector((state) => state.auth);
    // bu holatda loddedIn slice papkadagi auth.jsdan keletgan boshlang'ich qiymati false bo'lgan state>>> loggedIn: false, distruptatsa bo'lgani uchun alohida import qilinmadi chunku bu loggedinni onasi default qilib export qilingan

    console.log(loggedIn); //agar user login qilib kirgan bo'lsa true turipti agar sayt refresh qilinsa false bo'lib qolepti chunki user saytga kirgandan keyin userni malumotlari saqlanib qolmadi login.jsxda shu ish qilinishi kerak

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

                            <button className="btn btn-outline-danger">
                                Logout User 
                            </button>
                        </>
                    ) : (
                        // yani bu holatda slice papkadagi auth.jsdan keletgan boshlang'ich qiymati false bo'lgan loggedIn va user nullmas   true bo'lsa yani user omadli ro'yhatdan o'tsa loggedInni yonidagi userni ichiga usernameni qo'yish aytildi va agar loggedIn false bo'sa pastdagi login va register linklar berib qo'yildi yani shunda user ro'yhatdan o'tgan bo'lsa auth.jsdagi signUserSucces funksyalar ishlab true ishleydi agar false bo'lsa login register qil degan linklar ishleydi

                        <>
                            <Link
                                to={"/login"}
                                className="me-3 py-2 text-white text-decoration-none"
                            >
                                Login
                            </Link>

                            <Link
                                to={"/register"}
                                className="me-3 py-2 text-white text-decoration-none"
                            >
                                Register
                            </Link>
                        </>
                    )}

                    {/* <Link
                        to={"/login"}
                        className="me-3 py-2 text-white text-decoration-none"
                    >
                        Login
                    </Link>


                    <Link
                        to={"/register"}
                        className="me-3 py-2 text-white text-decoration-none"
                    >
                        Register
                    </Link> */}
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
