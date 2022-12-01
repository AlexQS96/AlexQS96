import { useState, useEffect, useContext } from 'react'
import { useTheme } from 'next-themes'
import useWindowSize from '../hooks/useWindowSize';
import { PorfolioContext } from '../context/AppContext';

export const MoonLogo = () => (
    <svg width="24px" height="24px" viewBox="0 0 280.1 280.02">
        <path
            className="svgFill"
            fill="#000"
            d="M268.87,170.22A115.14,115.14,0,0,1,109.66,11.07,7.17,7.17,0,0,0,101.54.32,142.91,142.91,0,1,0,279.73,178.39a7.16,7.16,0,0,0-10.86-8.17Z"
        />
    </svg>
);

export const SunLogo = () => (
    <svg width="24px" height="24px" viewBox="0 0 24 24">
        <path
            className="svgFill"
            fill="#000"
            d="M17 12c0 2.762-2.238 5-5 5s-5-2.238-5-5 2.238-5 5-5 5 2.238 5 5zm-9.184-5.599l-3.594-3.594-1.414 1.414 3.594 3.595c.402-.537.878-1.013 1.414-1.415zm4.184-1.401c.34 0 .672.033 1 .08v-5.08h-2v5.08c.328-.047.66-.08 1-.08zm5.598 2.815l3.594-3.595-1.414-1.414-3.594 3.595c.536.402 1.012.878 1.414 1.414zm-12.598 4.185c0-.34.033-.672.08-1h-5.08v2h5.08c-.047-.328-.08-.66-.08-1zm11.185 5.598l3.594 3.593 1.415-1.414-3.594-3.594c-.403.537-.879 1.013-1.415 1.415zm-9.784-1.414l-3.593 3.593 1.414 1.414 3.593-3.593c-.536-.402-1.011-.877-1.414-1.414zm12.519-5.184c.047.328.08.66.08 1s-.033.672-.08 1h5.08v-2h-5.08zm-6.92 8c-.34 0-.672-.033-1-.08v5.08h2v-5.08c-.328.047-.66.08-1 .08z"
        />
    </svg>
);

export const SwitchDarkMode = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const window = useWindowSize()
  const {pageLanguage} = useContext(PorfolioContext);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
        <li onClick={() => setTheme(theme === "light"? 'dark' : 'light')}>
            <div id='navOpt' className='svgFill'>{theme === "light"? <MoonLogo/> : <SunLogo/>}</div>
            {window.width < 768 && <p>{theme === 'light'? pageLanguage.darkMode : pageLanguage.lightMode}</p>}
        </li>
  )
}