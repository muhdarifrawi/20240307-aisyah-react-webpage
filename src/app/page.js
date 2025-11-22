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
  

  // This is the primary return that renders out the page
  return (
    <main className={commonStyles.container}>

      <div className={commonStyles.mobile}>
        <section className={commonStyles.alignCenter}>
          <h1>This page is currently not available.</h1>
        </section>
      </div>
      <div className={commonStyles.desktop}>
        <section>
          <h1>This page is currently not available.</h1>
        </section>
      </div>
      
    </main>
  );
}
