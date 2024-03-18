import { setConfig } from "next/config"
import commonStyles from "../css/common.module.css"

export default function Projects(){
    return(
        <section className={commonStyles.container}>
            <h1 className={commonStyles.title}>
                Projects
            </h1>
            <section className={commonStyles.section}>
                <img src="./images/sample-1.jpg" 
                    className={commonStyles.display}/>
            </section>
        </section>
        
    );
}