// import Image from "next/image";
// import styles from "./page.module.css";
//import Projects from "./pages/projects/page";
//import About from "./about/page";
import Link from "next/link";
import {promises as fs} from 'fs';
import commonStyles from "./css/common.module.css"
import Image from "next/image";

export default async function Home() {
  // creating and iterating the cards so it looks neater in code. 
  const file = await fs.readFile("./public/data/projects.json", 
                                    "utf8");
  const data  = JSON.parse(file);
  const projectsMobile = Object.keys(data.projects).map((obj,i) => {
    const imageLinks = data.projects[obj].projectPictures[0]
    const images = <Image className={commonStyles.image} src={imageLinks} width={100} height={100} unoptimized={true}/>
    const id = data.projects[obj].projectId;
    console.log("id from pages", id);
    return (
        <Link href={`/projects/${id}`} key={id}>
        <section className={commonStyles.card}>
          <h1 className={commonStyles.cardTitle}>
            {data.projects[obj].projectName}
          </h1>
          {images}
        </section>
        </Link>
    )
  });
  const projectsDesktop = Object.keys(data.projects).map((obj,i) => {
    const imageLinks = data.projects[obj].projectPictures[0]
    const images = <Image className={commonStyles.image} src={imageLinks} width={100} height={100} unoptimized={true}/>
    const id = data.projects[obj].projectId;
    console.log("==========");
    console.log("id from pages", id);
    return (
        <Link href={`/projects/${id}`} className={commonStyles.desktopScale} id={"desktop-" + id} key={id}>
        <section className={commonStyles.card}>
          {images}
        </section>
        </Link>
    )
  });  

  // This is the primary return that renders out the page
  return (
    <main className={commonStyles.container}>
      <Link href="/about">
        <Image src="/images/logo.png" className={commonStyles.bannerLogo} width={360} height={100} unoptimized={true}/>
      </Link>

      <div className={commonStyles.mobile}>
        <section className={commonStyles.alignCenter}>
          {projectsMobile}
        </section>
      </div>
      <div className={commonStyles.desktop}>
        <section>
          {projectsDesktop}
        </section>
      </div>
      
    </main>
  );
}
