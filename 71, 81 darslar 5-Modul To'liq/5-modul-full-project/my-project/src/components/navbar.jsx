import { useState } from "react";
import { logo, menu, close } from "../assets";
import { navigationLinks } from "../util/constans";
import { styles } from "../util/style"; //avtamatic tarzda import bo'ladi yani pastga stylelar chaqirilgandan import bo'ladi

const Navbar = () => {
    const [toggleNav, setToggleNav] = useState(false);
    const [active, setActive] = useState("home");

    const toggleHandler = () => setToggleNav((prev) => !prev); //yani true bolganda false qiladi false bo'lganda true qiladi bu pastda imgni parametrlariga chaqirilgan
    const activeHandler = (id) => setActive(id);

    return (
        <div className={`w- full py-6 ${styles.flexBetween}`}>
            {/* Logo */}
            <img
                src={logo}
                alt="logo"
                className="w-[130px] h-[35px] cursor-pointer"
            />

            {/* navigation link */}
            <ul className=" list-none  sm:flex hidden justify-end items-center flex-1">
                {navigationLinks.map((nav, idx) => (
                    <li
                        key={nav.id}
                        className={`    
                         ${
                             idx === navigationLinks.length - 1
                                 ? "mr-0"
                                 : "mr-10"
                          }
                        
                        ${active === nav.id ? "text-white" : "text-slate-900"}

                        font-montserrat font-normal cursor-pointer text-[16px] text-white hover:text-white transition-all duration-500`}
                        onClick={() => activeHandler(nav.id)}
                    >
                        {/* {nav.title} */}
                        <a href={`#${nav.id}`}>{nav.title}</a>
                        {/* raectda id shunday qilib chaqirilar ekan */}
                    </li>
                ))}
            </ul>
            {/* Navigation btn */}
            <div className={`sm:hidden flex flex-1 justify-end items-center`}>
                <img
                    src={toggleNav ? close : menu}
                    alt="nav"
                    className="w-[30px] h-[30px] object-contain"
                    onClick={toggleHandler}
                />

                <div
                    className={`${
                        !toggleNav ? "hidden" : "flex"
                    } p-6 absolute top-20 right-0 left-0 w-full sidebar bg-black-gradient z-[99]`}
                >
                    <ul className=" list-none  flex justify-center items-center flex-1 flex-wrap  ">
                        {navigationLinks.map((nav, idx) => (
                            <li
                                key={nav.id}
                                className={`    
                             ${
                                 idx === navigationLinks.length - 1
                                     ? "mr-0"
                                     : "mr-10"
                             }
                            
                            ${
                                active === nav.id
                                    ? "text-white"
                                    : "text-amber-800"
                            }
    
                            font-montserrat font-normal cursor-pointer text-[16px] text-white
                            
                            hover:text-white transition-all duration-500`}
                                onClick={() => activeHandler(nav.id)}
                            >
                                {/* {nav.title} */}
                        <a href={`#${nav.id}`}>{nav.title}</a>

                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;


