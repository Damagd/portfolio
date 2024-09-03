import { Inter } from "next/font/google";
import "./globals.css";
import './app.css';

import Title from "./ui/components/title";
import Nav from "./ui/components/nav";
import NavBar from "./ui/components/navbar";
import Modal from "./ui/components/Modal";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Keivin's Portfolio",
  description: "Portfolio of Keivin Martínez",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Modal/>

        <header className='portada fadeIn' id='home'>
          <Title></Title>
          <Nav/>
          <div className={"blur-overlay-screen "}></div>
        </header>
        <main id='main' className='main fadeIn'>
          <NavBar></NavBar>
          <article className='page-container'>
            {children}
          </article>
        </main>
      </body>
    </html>
  );
}
