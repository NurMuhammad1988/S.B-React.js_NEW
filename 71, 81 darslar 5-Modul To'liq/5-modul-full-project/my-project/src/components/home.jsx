import { discount, robot } from "../assets";
import { styles } from "../util/style";
import { Button } from "./button";

const Home = () => {
    return (
        <section
            id="home"
            className={`flex md:flex-row py-6 flex-col  ${styles.paddingY}`}
        >
            {/* yuqoridagi sectionga py-6  classini o'zim berdim uztozni kodidan farqi shu */}

            {/* Animaton image */}
            <div className={` flex-1 ${styles.flexStart} md:my-0 my-20 `}>
                <img
                    src={robot}
                    alt="robot"
                    className="w-[100%] h-[100%] relative z-10  rounded-sm"
                />

                {/* <div className="absolute z-[0] w-[40%] h-[35%]top-0 pink__gradient"/>

                <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />

                <div className="absolute z-[0] w-[50%] h-[55%] right-20 bottom-20 blue__gradient"/> */}
            </div>

            {/* Information */}
            {/* pastdagi divda margin top 12 classini o'zim berdim uztozni kodidan farqi shu */}
            <div
                className={`flex-1 ${styles.flexStart} flex-col xl:px-10  sm:px-16 px-6 pb-20 mt-12  relative`}
            >
                {/* Discoun information */}
                <div className=" flex flex-row items-center py-[6px] px-4 rounded-[10px] mb-2 bg-slate-500 bg-discount-gradient">
                    <img
                        src={discount} //rasim shunday chaqiriladi
                        alt="discount"
                        className="w-[32px] h-[32px]"
                    />

                    <p className={`${styles.paragraph} ml-2`}>
                        <span className="text-white">20%</span> Chegirma{" "}
                        <span className="text-white">1 Oylik</span> Hissob Uchun
                    </p>
                </div>

                {/* Title */}
                <div className="w-full ">
                    <h1 className={`${styles.heading1}`}>
                        Yangi Avlod <br />{" "}
                        <span className="text-gradient">To'lov Usuli</span>
                    </h1>
                </div>

                {/* Description */}
                <div className={`${styles.paragraph} mt-5 max-w-[550px]`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae aperiam quos omnis nam qui laborum voluptatem
                    minus quisquam facilis ut?{" "}
                </div>

                {/* Getting started */}

                 <Button styles={`mt-2`}/>

                {/* pastdagi uchta div orqa fon ranglarni kamalak qilib tovlantirish gradiend background */}
                <div className="absolute z-[0] w-[40%] h-[35%]top-0 pink__gradient" />

                <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />

                <div className="absolute z-[0] w-[50%] h-[55%] right-20 bottom-20 blue__gradient" />
            </div>
        </section>
    );
};

export default Home;
