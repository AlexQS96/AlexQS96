import Head from 'next/head'
import projectsdb from './db/projects.json'
import Link from 'next/link';
import Image from 'next/image';
import { useContext, createElement } from 'react';
import { PorfolioContext } from '../context/AppContext';
import { RevealWrapper } from 'next-reveal'
import { WebLogo, LiveLogo, StoreLogo, GithubLogo, CSSLogo, ExpressLogo, SocketIOLogo, HTMLLogo, MongoDBLogo, MYSQLLogo, NextJSLogo, NGINXLogo, NodeJSLogo, LinkedinLogo, WhatsappLogo, FacebookLogo} from '../components/PageIcons';

export default function Home() {

  const techImages = {
    NextJSLogo: NextJSLogo,
    NGINXLogo: NGINXLogo,
    ExpressLogo: ExpressLogo,
    NodeJSLogo: NodeJSLogo,
    SocketIOLogo: SocketIOLogo,
    MongoDBLogo: MongoDBLogo,
    MYSQLLogo: MYSQLLogo
  };

  const {languageSelected, pageLanguage} = useContext(PorfolioContext);

  return (
    <>
      <Head>
        <title>{pageLanguage.title}</title>
      </Head>

      <RevealWrapper>
        <section className='welcome'>
          <RevealWrapper origin='left' className="load-hidden">
            <p>{pageLanguage.aboutTitle}</p>
            <p>{pageLanguage.welcome}</p>
          </RevealWrapper>

          <RevealWrapper origin='right' className="load-hidden">
            <Image style={{width: 'auto', height: 'auto'}} quality={100} src='/img/laptop.png' alt='laptop' width={800} height={500} priority={true}/>
          </RevealWrapper>
        </section>
      </RevealWrapper>

      <RevealWrapper>
        <h1>{pageLanguage.aboutMe}</h1>
        <section className='about'>
          <Image src='/img/profile.png' alt='image profile' width={550} height={550} quality={100}/>

          <section>
            <span id='bluebox'/>
            <article>
              <h1>{pageLanguage.aboutTitle}!</h1>
              <p>{pageLanguage.aboutContent}</p>
            </article>

            
            <div className='social'>
              <div>
                <h6>{pageLanguage.findMe}</h6>
                <div>
                <a href='https://github.com/alexqs96' target="_blank" rel="noreferrer noopener"><GithubLogo/></a>
                <a href='https://www.linkedin.com/in/alexander-mamani' target="_blank" rel="noreferrer noopener"><LinkedinLogo/></a>
                <a href='https://wa.me/+5491122636544' target="_blank" rel="noreferrer noopener"><WhatsappLogo/></a>
                <a href='https://www.facebook.com/profile.php?id=100041428520951' target="_blank" rel="noreferrer noopener"><FacebookLogo/></a>
                </div>
              </div>
              <a className='button_1' href='/img/cv_alexander_mamani.pdf' without='true' rel="noopener noreferrer" target="_blank">{pageLanguage.downloadcv}</a>
            </div>
          </section>
        </section>
      </RevealWrapper>

      <RevealWrapper>
        <section className="skills svgFill">
          <h1>{pageLanguage.skillsTitle}</h1>
          <div>
            <figure><NextJSLogo/> NEXTJS</figure>
            <figure><SocketIOLogo/> SOCKETIO</figure>
            <figure><ExpressLogo/> EXPRESS</figure>
            <figure><NGINXLogo/> NGINX</figure>
            <figure><NodeJSLogo/> NODEJS</figure>
            <figure><MYSQLLogo/> MYSQL</figure>
            <figure><MongoDBLogo/> MONGODB</figure>
            <figure><HTMLLogo/> HTML5</figure>
            <figure><CSSLogo/> CSS3</figure>
          </div>
        </section>
      </RevealWrapper>

      <section className='projects'>
      <h1 data-projects>{pageLanguage.projectsTitle}</h1>
      {
      projectsdb.map((project) => (
        <RevealWrapper key={project.id}>
          <div className='project_detail'>
            <div data-devices>
              <Image src={`/img/screens/${project.screens[0]}`} alt='Desktop' width={625} height={425} quality={100}/>
              <Image src={`/img/screens/${project.screens[1]}`} alt='Phone' width={625} height={425} quality={100}/>
            </div>
            <section>
              <div data-details>
                <h1>{project.name}</h1>
                {project.wip? <h6>{pageLanguage.wip}</h6> : undefined}
                
                <div data-row-tech className='svgFill'>
                {
                  project.tech.map((tech, index) => (
                    createElement(techImages[tech],{key: index})
                  ))
                }
                </div>
                
                <p>{languageSelected === 'es'? project.aboutES : project.aboutEN}</p>

                <div data-row-tech className='svgFill'>
                  <a href={project.github} target="_blank" rel="noreferrer noopener"><GithubLogo/></a>
                  <a href={project.url} target="_blank" rel="noreferrer noopener"><WebLogo/></a>
                </div>
              </div>

            </section>
          </div>
        </RevealWrapper>
      ))
      }
      </section>

      <RevealWrapper>
        <h1>{pageLanguage.servicesTitle}</h1>
        <section className='services svgFill'>
          <div>
            <article data-title-services>
              <WebLogo/>
              <h3>{pageLanguage.webServiceTitle}</h3>
            </article>
            <p>{pageLanguage.webService}</p>
          </div>
          <div>
            <article data-title-services>
              <LiveLogo/>
              <h3>{pageLanguage.streamingServiceTitle}</h3>
            </article>
            <p>{pageLanguage.streamingService}</p>
          </div>
          <div>
            <article data-title-services>
              <StoreLogo/>
              <h3>{pageLanguage.storeServiceTitle}</h3>
            </article>
            <p>{pageLanguage.storeService}</p>
          </div>
        </section>
      </RevealWrapper>

      <RevealWrapper>
        <section className="contactme">
          <h2>{pageLanguage.ctaTitle}</h2>
          <Link href='contact' className='button_1'>{pageLanguage.cta}</Link>
        </section>
      </RevealWrapper>
    </>
  )
}
