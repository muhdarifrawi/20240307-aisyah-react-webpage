// import Image from "next/image";
// import styles from "./page.module.css";
//import Projects from "./pages/projects/page";
//import About from "./about/page";
import Link from "next/link";
import {promises as fs} from 'fs';
import commonStyles from "./css/common.module.css"

export default async function Home() {
  // creating and iterating the cards so it looks neater in code. 
  const file = await fs.readFile(process.cwd() + "/src/app/data/projects.json", 
                                    "utf8");
  const data  = JSON.parse(file);
  const projectsMobile = Object.keys(data.projects).map((obj,i) => {
    const images = data.projects[obj].projectPictures.map(img => {
      return <img className={commonStyles.image} src={img}/>
    })
    const id = data.projects[obj].projectId;
    console.log("id from pages", id);
    return (
        <Link href={`/projects/${id}`}>
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
    const images = <img className={commonStyles.image} src={imageLinks}/>
    const dataLength = Object.keys(data.projects).length;
    const id = data.projects[obj].projectId;
    console.log("==========");
    console.log("id from pages", id);
    console.log(dataLength);
    return (
        <Link href={`/projects/${id}`} className={commonStyles.desktopScale} id={"desktop-" + id}>
        <section className={commonStyles.card}>
          {images}
        </section>
        </Link>
    )
  });  

  //console.log(projects);
  // This is the primary return that renders out the page
  return (
    <main className={commonStyles.container}>
      <h1>This is the homepage</h1>
      {/* <Link href="/projects">Projects</Link>
      <Link href="/about">About</Link> */}

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
    
    // <main>
    //   <Projects></Projects>
    //   <About></About>
    // </main>
  );
}
