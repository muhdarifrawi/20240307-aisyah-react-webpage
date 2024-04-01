import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aisyah Mariah",
  description: "Art through life",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      {/* <nav>
        <ul>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/about">About</Link></li>
        </ul>
      </nav> */}
        {children}
      </body>
    </html>
  );
}
