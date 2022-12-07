import Header from "./Header"
import Footer from "./Footer"
import { useEffect } from "react"

export default function Layout ({ children }) {

  useEffect(() => {    
    setTimeout(() => {
      butter.init({
        wrapperId: 'momentum',
        wrapperDamper: 0.07,
        cancelOnTouch : true
      })
    }, 500);
  }, [])

  return (
    <>
      <Header/>
      <main>
      {children}
      </main>
      <Footer/>
    </>
  )
}
