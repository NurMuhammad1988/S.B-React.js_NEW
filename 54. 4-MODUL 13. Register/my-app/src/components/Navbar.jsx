import { Link } from "react-router-dom";
import { logo } from "../constants";

const Navbar = () => {
    return (
        <div>
            <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom container pt-3">
                <Link to={"/"}>
                    <div className="w-25">
                        {/* Link bilan logo imgga bosganda asosiy sahifaga o'tib ketadigan qilindi// bu marshut app.jsda routerda marshutlab qo'yilgan   */}
                        <img src={logo} width={200} height={50} alt="img" />
                    </div>
                </Link>

                <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
                    <Link
                        // Link bilan Login textiga bosilganda Login componentga o'tadi// bu marshut app.jsda routerda marshutlab qo'yilgan
                        to={"/login"}
                        className="me-3 py-2 text-white text-decoration-none"
                    >
                        Login
                    </Link>

                    <Link
                        // Link bilan Register textiga bosilganda Register componentga o'tadi// bu marshut app.jsda routerda marshutlab qo'yilgan
                        to={"/register"}
                        className="me-3 py-2 text-white text-decoration-none"
                    >
                        Register
                    </Link>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
