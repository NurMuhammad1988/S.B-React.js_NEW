// import React from "react";
import {
    Billing,
    Business,
    CTA,
    Clients,
    Contract,
    Footer,
    Home,
    Navbar,
    Statistics,
    Testimonials,
} from "./components";

import { styles } from "./util/style";

const App = () => {
    return (
        <div className="bg-primary w-full overflow-hidden ">
            {/*  Navbar */}
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.container} `}>
                    <Navbar />
                    {/* <Home />  */}
                    {/* Home bu joyda turganda respons bo'lganda padding leftlari o'zgarib ketdi shu sabab pastga alohida qo'yildi */}
                </div>
            </div>
            {/* Home */}
            <div className={`bg-primary ${styles.flexStart}`}>
                <div className={`${styles.container}`}>
                    <Home />
                </div>
            </div>

            <div
                className={`  bg-primary ${styles.paddingX} ${styles.flexCenter}`}
            >
                <div className={`${styles.container} `}>
                    <Statistics />
                    <Contract />
                    <Billing />
                    <Business />
                    <Testimonials />
                    <Clients />
                    <CTA />
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default App;
