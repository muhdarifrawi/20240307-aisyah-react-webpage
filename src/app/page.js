// import Image from "next/image";
// import styles from "./page.module.css";
import Projects from "./projects/page";
import About from "./about/page";
import Link from "next/link"

export default function Home() {
  return (
    <main>
      <h1>This is the homepage</h1>
      <Link href="/projects">Projects</Link>
      <Link href="/about">About</Link>
    </main>
    
    // <main>
    //   <Projects></Projects>
    //   <About></About>
    // </main>
  );
}
