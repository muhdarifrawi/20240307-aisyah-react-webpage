import commonStyles from "../css/common.module.css"
import Image from "next/image";
import Link from "next/link";

export default function About(){
    return(
        <section className={commonStyles.container}>
            <section>
                <Link href="/">
                    <button className={commonStyles.backButton}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24"
                            viewBox="-150 -960 960 960" width="24">
                            <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" />
                        </svg>
                    </button>
                </Link>
            </section>
            <section className={[commonStyles.desktopFormat, commonStyles.desktop].join(" ")}>
                <section className={commonStyles.imageSection}>
                    <section className={commonStyles.imageContainer}>
                        <Image src="/images/aisyah.JPG" className={commonStyles.projectImages} width={100} height={100} unoptimized={true} placeholder="blur"/>
                    </section>
                </section>
                <section>
                    <h1 className={commonStyles.title}>
                        About
                    </h1>
                    <section className={commonStyles.section}>
                        <p className={commonStyles.descriptionText}>
                            Aisyah is an art therapist and art practitioner guided by compassion and curiosity. 
                            Her art therapy journey was a natural synthesis of her formal training in the arts, 
                            and her will to purposefully serve the community. She holds experience from working 
                            and volunteering in the social service space. 
                        </p>
                        <p className={commonStyles.descriptionText}>
                            Since the course of her training, Aisyah continues to develop sensitivities to work 
                            with clients authentically and with dignity. She recognises the uniqueness of each 
                            person, and aspires to empower individuals through empathy and humility.  
                        </p>
                        <p className={commonStyles.descriptionText}>
                            As an art therapist, her interests lie in navigating spirituality, multi-faith and 
                            multi-cultural practice, and end-of-life care. In her art practice, she is drawn to 
                            intuitive and meditative processes, and exploring meaning behind materiality.
                        </p>
                    </section>
                </section>
            </section>
            <section className={[commonStyles.mobileFormat, commonStyles.mobile].join(" ")}>
                <section className={commonStyles.imageSection}>
                    <section className={commonStyles.imageContainer}>
                        <Image src="/images/aisyah.JPG" className={commonStyles.projectImages} width={100} height={100} unoptimized={true} placeholder="blur"/>
                    </section>
                </section>
                <section>
                    <h1 className={commonStyles.title}>
                        About
                    </h1>
                    <section className={commonStyles.section}>
                        <p className={commonStyles.descriptionText}>
                            Aisyah is an art therapist and art practitioner guided by compassion and curiosity. 
                            Her art therapy journey was a natural synthesis of her formal training in the arts, 
                            and her will to purposefully serve the community. She holds experience from working 
                            and volunteering in the social service space. 
                        </p>
                        <p className={commonStyles.descriptionText}>
                            Since the course of her training, Aisyah continues to develop sensitivities to work 
                            with clients authentically and with dignity. She recognises the uniqueness of each 
                            person, and aspires to empower individuals through empathy and humility.  
                        </p>
                        <p className={commonStyles.descriptionText}>
                            As an art therapist, her interests lie in navigating spirituality, multi-faith and 
                            multi-cultural practice, and end-of-life care. In her art practice, she is drawn to 
                            intuitive and meditative processes, and exploring meaning behind materiality.
                        </p>
                    </section>
                </section>
            </section>
        </section>
    );
}