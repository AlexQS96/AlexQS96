import { useState, useEffect } from "react";
import { createContext } from "react";
import translationsData from '../languages'

export const PorfolioContext = createContext();

const PorfolioProvider = ({children}) => {

    const [languageSelected, setLanguageSelected] = useState('es')
    const pageLanguage = translationsData[languageSelected];

    useEffect(() => {
        const langFound = localStorage.getItem('alexlang')

        if (langFound) {
            setLanguageSelected(langFound)
        }
    }, [])

    const changeLang = (lang) => {
        localStorage.setItem('alexlang', lang)
        setLanguageSelected(lang)
    }

    return (
        <PorfolioContext.Provider
         value = {{languageSelected, changeLang, pageLanguage}}
        >
        {children}
        </PorfolioContext.Provider>
    )
}

export default PorfolioProvider;