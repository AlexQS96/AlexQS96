import Link from 'next/link'
import useWindowSize from '../hooks/useWindowSize'
import { openNav, logoNav} from '../utils/tools'
import { SwitchDarkMode } from '../components/darkModeSwitch'
import { useContext } from 'react'
import { PorfolioContext } from '../context/AppContext'
import { MailLogo, LogoPage, BurgerMenu } from './PageIcons'

export default function Header () {
  
  const {languageSelected, changeLang, pageLanguage} = useContext(PorfolioContext);

  const window = useWindowSize()

  return (
    <header>
      <nav>
        <Link href="/" aria-label='Home' onClick={() => logoNav()}><LogoPage/></Link>
        {
            window.width < 768 &&
            <div onClick={() => openNav()}><BurgerMenu /></div>
        }

        <ul className='nav'>
          {
            window.width < 768 &&
            <span onClick={() => openNav()}>X</span>
          }
          <SwitchDarkMode/>
          <li onClick={()=> {window.width < 768 && openNav(); changeLang(languageSelected === 'es'? 'en' : 'es');}}>
            <div id='navOpt' data-change-lang>
              <p>文</p>
              <p>{languageSelected.toUpperCase()}</p>
            </div>
            {window.width < 768 && <p>{languageSelected === 'es'? 'Español' : 'English'}</p>}
          </li>
          <li>
            <Link href='/contact' id='navOpt' onClick={() => window.width < 768 && openNav()}>
              <MailLogo/>
              {window.width < 768 && <p>{pageLanguage.contactBtn}</p>}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}