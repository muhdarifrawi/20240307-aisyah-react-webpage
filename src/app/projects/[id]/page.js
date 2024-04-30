import { promises as fs } from 'fs';
import Link from 'next/link';
import commonStyles from "../../css/common.module.css";
import ImageNavbar from "../../imageNavBar.js"

export default async function ProjectsPage({ params }) {
    console.log("=================== In ProjectsPage ======================");
    const file = await fs.readFile(process.cwd() + "/src/app/data/projects.json",
        "utf8");
    const data = JSON.parse(file);
    const projects = data.projects;
    const currentProject = projects.filter(project => project.projectId === params.id);

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
                    <div className={commonStyles.imageSection}>
                        <ImageNavbar data={currentProject}></ImageNavbar>
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