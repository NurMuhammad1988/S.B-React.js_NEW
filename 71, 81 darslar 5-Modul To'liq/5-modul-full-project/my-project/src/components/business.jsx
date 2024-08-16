import { layout, styles } from "../util/style";
import { Button } from "./button";
import { features } from "../util/constans";
import FeatureCard from "./feature-card";

const Business = () => {
    return (
        <section id="featurs" className={layout.section}>
            <div className={layout.sectionInfo}>
                <h2 className={`${styles.heading2}`}>
                    Biznes rivojlantiring, <br className="sm:block hidden" />
                    mablag'ni biz beramiz
                </h2>
                <p className={` ${styles.paragraph} max-w-[550px] mt-5`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Asperiores dolorem fugit qui deserunt et laudantium
                    aspernatur excepturi! Sit, nihil aut?????????
                </p>
                <Button styles={"mt-10"} />
            </div>

            <div className={`${layout.sectionImg} flex-col`}>
                {features.map((feature, idx) => (
                    <FeatureCard key={feature.id} {...feature} idx={idx} />
                ))}
            </div>
        </section>
    );
};

export default Business;
