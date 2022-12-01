import '../styles/globals.css'
import { useState, useEffect } from 'react'
import { ThemeProvider } from 'next-themes'
import Layout from '../components/Layout'
import PorfolioContext from '../context/AppContext'
import { GoUpLogo } from '../components/PageIcons'

function GoUpBtn(){

    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 3000) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);

    function ScrollToTop() {
        setTimeout(() => {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }, 100);
    }

  return (
    <>
      {
      showTopBtn &&
      <button className="goUp" onClick={() => ScrollToTop()}><GoUpLogo/></button>
      }
    </>
  )
}

export default function Porfolio({ Component, pageProps }) {

  return(
    <>
    <PorfolioContext>
      <ThemeProvider defaultTheme="light">
      <Layout>
        <Component {...pageProps} />
        <GoUpBtn/>
      </Layout>
      </ThemeProvider>
    </PorfolioContext>
    </>
  )
}