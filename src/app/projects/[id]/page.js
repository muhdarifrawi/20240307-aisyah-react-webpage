import { promises as fs } from 'fs';
import Link from 'next/link';
import commonStyles from "../../css/common.module.css";
import ImageNavbar from "../../imageNavBar.js"
import imageNavbar from '@/app/imageNavBar';

export default async function ProjectsPage({ params }) {
    console.log("=================== In ProjectsPage ======================");
    const file = await fs.readFile(process.cwd() + "/src/app/data/projects.json",
        "utf8");
    const data = JSON.parse(file);
    const projects = data.projects;
    const currentProject = projects.filter(project => project.projectId === params.id);
    // console.log("projects: ", projects);
    // console.log("current project: ", currentProject);
    // console.log("iamge path: ", projects[0]["projectPictures"][0])
    let imgPath = "";
    if (currentProject[0]["projectPictures"][0]) {
        imgPath = `../.` + currentProject[0]["projectPictures"][0]
    }

    return (
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
                    {/* <div className={commonStyles.imageContainer}>
                        <img className={commonStyles.projectImages}
                            src={imgPath} />
                    </div> */}
                    {/* <div className={commonStyles.imageNav}>
                        <button className={commonStyles.imageNavBtn}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                                <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"/>
                            </svg>
                        </button>
                        <span id="imgNumber">1</span>
                        <button className={commonStyles.imageNavBtn}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                                <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/>
                            </svg>
                        </button>
                    </div> */}
                    <ImageNavbar data={currentProject}></ImageNavbar>
                </section>
                <section className={commonStyles.descriptionCard}>
                    <div className={commonStyles.titleContent}>
                        <h1>{currentProject[0]["projectName"]},</h1>
                        <p>{currentProject[0]["projectYear"]}</p>
                        <p>{currentProject[0]["projectMedium"]}</p>
                    </div>
                    <div className={commonStyles.descriptionContent}>
                        {
                            currentProject[0]["projectDescription"].map((p, i) => {
                                return <p id={currentProject[0]["projectId"] + "-desc-" + i}>{p}</p>
                            })
                        }
                    </div>
                </section>
            </section>
            <section className={[commonStyles.mobileFormat, commonStyles.mobile].join(" ")}>
                <section>
                    <div className={commonStyles.imageContainer}>
                        <img className={commonStyles.projectImages}
                            src={imgPath} />
                    </div>
                </section>
                <section className={commonStyles.descriptionCard}>
                    <div className={commonStyles.titleContent}>
                        <h1>{currentProject[0]["projectName"]},</h1>
                        <p>{currentProject[0]["projectYear"]}</p>
                        <p>{currentProject[0]["projectMedium"]}</p>
                    </div>
                    <div className={commonStyles.descriptionContent}>
                        {
                            currentProject[0]["projectDescription"].map((p, i) => {
                                return <p id={currentProject[0]["projectId"] + "-desc-" + i}>{p}</p>
                            })
                        }
                    </div>
                </section>
            </section>
        </section>
    );
}