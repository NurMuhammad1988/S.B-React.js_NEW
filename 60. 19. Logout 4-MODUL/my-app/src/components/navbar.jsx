import { Link } from "react-router-dom";
import { logo } from "../constants";
import { useSelector } from "react-redux";

const Navbar = () => {
    const { loggedIn, user } = useSelector((state) => state.auth);

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
                                User Logout!!!
                            </button>
                        </>
                    ) : (
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
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
