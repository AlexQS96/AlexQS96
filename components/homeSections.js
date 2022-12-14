import { createElement } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    WebLogo,
    LiveLogo,
    StoreLogo,
    GithubLogo,
    CSSLogo,
    ExpressLogo,
    SocketIOLogo,
    HTMLLogo,
    MongoDBLogo,
    MYSQLLogo,
    NextJSLogo,
    NGINXLogo,
    NodeJSLogo,
    LinkedinLogo,
    WhatsappLogo,
    FacebookLogo,
} from "./PageIcons";
import projectsdb from "../pages/db/projects.json";

export const WelcomeBlock = ({ pageLanguage }) => {
    return (
        <section className="welcome">
            <div>
                <p>{pageLanguage.aboutTitle}</p>
                <p>{pageLanguage.welcome}</p>
            </div>

            <div>
            <Image
                style={{ width: "auto", height: "auto" }}
                quality={100}
                src="/img/laptop.png"
                alt="laptop"
                width={800}
                height={500}
                priority={true}
            />
            </div>
        </section>
    );
};

export const AboutBlock = ({ pageLanguage }) => {
    return (
        <section>
            <h1>{pageLanguage.aboutMe}</h1>
            <section className="about">
                <Image
                    src="/img/profile.png"
                    alt="image profile"
                    width={550}
                    height={550}
                    quality={100}
                />

                <section>
                    <span id="bluebox" />
                    <article>
                        <h1>{pageLanguage.aboutTitle}!</h1>
                        <p>{pageLanguage.aboutContent}</p>
                    </article>

                    <div className="social">
                        <div>
                            <h6>{pageLanguage.findMe}</h6>
                            <div>
                                <a
                                    href="https://github.com/alexqs96"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    <GithubLogo />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/alexander-mamani"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    <LinkedinLogo />
                                </a>
                                <a
                                    href="https://wa.me/+5491122636544"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    <WhatsappLogo />
                                </a>
                                <a
                                    href='https://www.facebook.com/profile.php?id=100041428520951'
                                    tar8et="_blank"
                                    rel="noreferrer noopener"
                                >
                                    <FacebookLogo />
                                </a>
                            </div>
                        </div>
                        <a
                            className="button_1"
                            href="/img/cv_alexander_mamani.pdf"
                            without="true"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            {pageLanguage.downloadcv}
                        </a>
                    </div>
                </section>
            </section>
        </section>
    );
};

export const SkillsBlock = ({ pageLanguage }) => {
    return (
        <section className="skills svgFill">
            <h1>{pageLanguage.skillsTitle}</h1>
            <div>
                <figure>
                    <NextJSLogo /> NEXTJS
                </figure>
                <figure>
                    <SocketIOLogo /> SOCKETIO
                </figure>
                <figure>
                    <ExpressLogo /> EXPRESS
                </figure>
                <figure>
                    <NGINXLogo /> NGINX
                </figure>
                <figure>
                    <NodeJSLogo /> NODEJS
                </figure>
                <figure>
                    <MYSQLLogo /> MYSQL
                </figure>
                <figure>
                    <MongoDBLogo /> MONGODB
                </figure>
                <figure>
                    <HTMLLogo /> HTML5
                </figure>
                <figure>
                    <CSSLogo /> CSS3
                </figure>
            </div>
        </section>
    );
};

export const ProjectsBlock = ({ pageLanguage, languageSelected }) => {
    const techImages = {
        NextJSLogo: NextJSLogo,
        NGINXLogo: NGINXLogo,
        ExpressLogo: ExpressLogo,
        NodeJSLogo: NodeJSLogo,
        SocketIOLogo: SocketIOLogo,
        MongoDBLogo: MongoDBLogo,
        MYSQLLogo: MYSQLLogo,
    };

    return (
        <section className="projects">
            <h1 data-projects>{pageLanguage.projectsTitle}</h1>
            {projectsdb.map((project, index) => (
                <div className="project_detail" key={index}>
                    <div data-devices>
                        <Image
                            src={`/img/screens/${project.screens[0]}`}
                            alt="Desktop"
                            width={625}
                            height={425}
                            quality={100}
                        />
                        <Image
                            src={`/img/screens/${project.screens[1]}`}
                            alt="Phone"
                            width={625}
                            height={425}
                            quality={100}
                        />
                    </div>
                    <section>
                        <div data-details>
                            <h1>{project.name}</h1>
                            {project.wip ? (
                                <h6>{pageLanguage.wip}</h6>
                            ) : undefined}

                            <div data-row-tech className="svgFill">
                                {project.tech.map((tech, index) =>
                                    createElement(techImages[tech], {
                                        key: index,
                                    })
                                )}
                            </div>

                            <p>
                                {languageSelected === "es"
                                    ? project.aboutES
                                    : project.aboutEN}
                            </p>

                            <div data-row-tech className="svgFill">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    <GithubLogo />
                                </a>
                                <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    <WebLogo />
                                </a>
                            </div>
                        </div>
                    </section>
                </div>
            ))}
        </section>
    );
};

export const ContactBlock = ({pageLanguage}) => {
  return (
    <section className="contactme">
        <h2>{pageLanguage.ctaTitle}</h2>
        <Link href='contact' className='button_1'>{pageLanguage.cta}</Link>
    </section>
  )
}
