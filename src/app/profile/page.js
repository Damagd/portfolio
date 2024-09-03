import PageLayout from "../ui/layouts/PageLayout";
import { ListPoint } from "../ui/components/ListPoint";

export default function Home() {
    return (
        <PageLayout title={'My Profile'}>
            <ul className="list-points">
                <ListPoint>
                    <p>
                        Hello! I am Keivin, a <b>Developer</b>.
                    </p>
                </ListPoint>
                <ListPoint>
                    <p>
                        I have completed/finished my bachelor's in <b>Intelligent Systems</b> from the <b>"Universidad Autónoma de San Luis Potosí" (México)</b>, and I recently finished the process of getting my degree.
                    </p>
                </ListPoint>
                <ListPoint>
                    <p>
                        Right now I'm focused on <b>getting more experience</b> in <b>web and application development</b> with modern tools and technologies like <b>React, Flutter, Next.js, etc</b>.
                    </p>
                </ListPoint>
                <ListPoint>
                    <p>
                        I am working as a <b>freelance developer</b>, primarily working on small projects and static websites for clients with small businesses or those needing a way to establish their presence. 
                    </p>
                </ListPoint>
                <ListPoint>
                    <p>
                        However, I would still like to be part of a company or team to further develop my skills and work on more significant projects.
                    </p>
                </ListPoint>
                <ListPoint>
                    <p>
                        Besides web development, I'm interested in <b>low level programming</b>, making code that are less "abstract" and more aware of what the computer is doing.
                    </p>
                </ListPoint>
                <ListPoint>
                    <p>
                        That said, I'm <b>open to learning and working</b> with any programming language, technology or subject of computer science. <b>As long as the project is interesting, I'm in!</b>
                    </p>
                </ListPoint>
                <ListPoint>
                    <p>
                        This portfolio was made as a <b>extension for my resume</b>, so I can be more detailed about my projects and process work. It was made with Next.Js and parts of my last portfolio.
                    </p>
                </ListPoint>
                <ListPoint>
                    <p>
                        You can check my last portfolio <a href="https://damagd.github.io/keivin-s-portfolio/" target="_blank">here</a>
                    </p>
                </ListPoint>
                <ListPoint>
                    <p>
                        If you have any question about one of my projects or you would like to work with me, or anything related to work, feel free to <b>contact me through my <a href="https://www.linkedin.com/in/keivin-martínez/" target="_blank">LinkedIn</a> or my phone if you've come from my resume</b>.
                    </p>
                </ListPoint>
            </ul>
        </PageLayout>
    )
}