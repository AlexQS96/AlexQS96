import Head from 'next/head'
import { useContext } from 'react';
import { PorfolioContext } from '../context/AppContext';
import { AboutBlock, ContactBlock, ProjectsBlock, ServicesBlock, SkillsBlock, WelcomeBlock } from '../components/homeSections';

export default function Home() {
  
  const {languageSelected, pageLanguage} = useContext(PorfolioContext);

  return (
    <>
      <Head>
        <title>{pageLanguage.title}</title>
      </Head>

      <WelcomeBlock
        pageLanguage={pageLanguage}
      />

      <AboutBlock
        pageLanguage={pageLanguage}
      />

      <SkillsBlock
        pageLanguage={pageLanguage}
      />

      <ProjectsBlock
        pageLanguage={pageLanguage}
        languageSelected={languageSelected}
      />

      <ServicesBlock
        pageLanguage={pageLanguage}
      />

      <ContactBlock
        pageLanguage={pageLanguage}
      />
    </>
  )
}
