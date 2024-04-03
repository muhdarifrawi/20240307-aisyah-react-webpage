import {promises as fs} from 'fs';
import Link from 'next/link';
import commonStyles from "../../css/common.module.css";

export default async function ProjectsPage({params}){
    const file = await fs.readFile(process.cwd() + "/src/app/data/projects.json", 
                                    "utf8");
    const data  = JSON.parse(file);
    const projects = Object.keys(data.projects).map((obj,i) => {
        if(data.projects[obj].projectId == params.id){
            console.log("checking id filter", data.projects[obj]);
            
            return data.projects[obj]
        }
    });
    //console.log("iamge path: ", projects[0]["projectPictures"][0])
    let imgPath="";
    if(projects[0]["projectPictures"][0]){
        imgPath =  `../.` + projects[0]["projectPictures"][0]
    }
    return(
        <section className={commonStyles.container}>
            <section>
                <Link href="/">
                    <button className={commonStyles.backButton}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" 
                        viewBox="-150 -960 960 960" width="24">
                        <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"/>
                        </svg>
                    </button>
                </Link>
            </section>
            <section>
                <div className={commonStyles.imageContainer}>
                    <img className={commonStyles.projectImages} 
                    src={imgPath}/>
                </div>
            </section>
            <section className={commonStyles.descriptionCard}>
                <div className={commonStyles.titleContent}>
                    <h1>{projects[0]["projectName"]},</h1>
                    <p>{projects[0]["projectYear"]}</p>
                    <p>{projects[0]["projectMedium"]}</p>
                </div>
                <div className={commonStyles.descriptionContent}>
                    <p>{projects[0]["projectDescription"]}</p>
                </div>
            </section>
            
        </section>
    );
}