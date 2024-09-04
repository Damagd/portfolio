import ImageClicked from "../ui/components/ImageClicked";
import { ListPoint } from "../ui/components/ListPoint";
import PageLayout from "../ui/layouts/PageLayout";

export default function Page() {
    return (
        <PageLayout title={"My Work Process"}>
            <ol className="list-points" type="1" style={{gap: '2rem'}}>
                
                <p>
                Depending on the size of the project, the level of detail required, and/or the client's specifications, some steps may be added or omitted.
                <br/>
                This is a summarized version of my work process; additional steps or details may be omitted to keep it concise.
                </p>

                <div className="separator"></div>
                <h3>Definition:</h3>
                <ListPoint number={1}>
                    {[<p key={1}>
                        For my development process, I start by gathering and defining all project specifications. For larger or personal projects, or if requested by a client, I define <b>detailed documentation</b> for the requirements. For smaller client projects, I simply inform them of the project scope.
                    </p>,
                    <></>
                    ]}
                </ListPoint>
                <ListPoint number={2}>
                    {[<p>
                        After defining the project scope, I choose the <b>most suitable technologies</b>. For most small projects, I avoid overcomplicating technology choices. If a project requires unfamiliar technology, I <b>take the time to learn the basics to effectively work with it</b>. Typically, I use <b>React</b> for the front-end and <b>PHP Laravel</b> for the back-end as a base stack for <b>web development</b>.
                    </p>,
                    <></>]}
                </ListPoint>
                <div className="separator"></div>
                <h3>Design:</h3>
                <ListPoint number={3}>
                    {[<p key={1}>
                        Finally, once everything else is defined, I begin the design process with a <b>low-fidelity mockup</b>. I create these prototypes on paper or using <b>Excalidraw</b> for a quicker, more efficient design. I move on to the next step after the client approves this initial design, if it is a client project.
                    </p>,
                    <article className="image-grid" key={2}>
                        <ImageClicked classN="image-grid-col-2 image-grid-row-2" src="./images/process/excali_main.png" alt={'Main example of a low-fidelity prototype made in Excalidraw. Full Low-fidelity prototype of this portfolio'}/>
                        <ImageClicked src="./images/process/excali3.png" alt={'Example 1 low-fidelity prototype. Landing page of this portfolio'} />
                        <ImageClicked src="./images/process/excali4.png" alt={'Example 2 low-fidelity prototype. Landing page of this portfolio mobile screen version'} />
                        <ImageClicked src="./images/process/excali1.png" alt={'Example 3 low-fidelity prototype. My work process page of this portfolio'} />
                        <ImageClicked src="./images/process/excali2.png" alt={'Example 4 low-fidelity prototype. My work process page of this portfolio mobile screen version'} />
                    </article>]}
                </ListPoint>
                <ListPoint number={4}>
                    {[<p key={1}>
                        Once I have a rough idea of the project's look and receive client approval (if applicable), I use <b>Figma</b> to create a <b>wireframe prototype</b>. For smaller projects or those with minimal design requirements, I may skip this step to save time.
                    </p>, 
                    <article className="image-grid" key={2}>
                        <ImageClicked classN="image-grid-col-2 image-grid-row-2" src="./images/process/medium_main.png" alt={'Example of a Wireframe prototype made in Figma'} />
                    </article>]}
                </ListPoint>
                <ListPoint number={5}>
                    {[<p key={1}>
                        In <b>Figma</b>, I create the final <b>High-Fidelity mockup</b>, which is usually the definitive design. The level of detail varies based on time, project size, and user requirements. For larger projects or team-based work, I thoroughly define aspects like <b>atomic design, animations, transitions, flows, variants, fonts, colors</b>, and other things. For smaller or quicker projects, such as a static page, I focus on key elements to outline the overall design.
                    </p>,
                    <article className="image-grid" key={2}>
                        <ImageClicked classN="image-grid-col-2 image-grid-row-2" src="./images/process/working_on1.PNG" alt={'Example - High fidelity mockup of a personal project - In process'}/>
                        <ImageClicked src="./images/process/working_on.PNG" alt={'Example - Final Mockup of an personal project application - In process'}/>
                        <ImageClicked src="./images/process/mockup1.PNG" alt={'Example - High fidelity mockup of FindIt - Mobile App'}/>
                        <ImageClicked src="./images/process/mockup1_prototype.PNG" alt={'Example - High fidelity mockup of FindIt with prototyping - Mobile App'}/>
                        <ImageClicked src="./images/process/atoms.png" alt={'Example of Atomic design - Atoms'} />
                        <ImageClicked src="./images/process/moleculas.png" alt={'Example of Atomic design - Molecules'} />
                        <ImageClicked src="./images/process/organism.png" alt={'Example of Atomic design - Organisms'} />
                        <ImageClicked src="./images/process/templates.png" alt={'Example of Atomic design - Templates'} />
                        <ImageClicked src="./images/process/high_fi_main.png" alt={'Example - Final mockup of this portfolio'} />
                    </article>]}
                </ListPoint>
                <p>Although I'm not a graphic designer or a UX/UI expert, I follow basic UX and UI principles to create a well-designed product.</p>
                <div className="separator"></div>
                <h3>Development:</h3>
                <ListPoint number={6}>
                    {[<p key={1}>
                        Once the design is defined and approved, I begin (or in parallel) coding using the chosen technologies, languages, and frameworks. During this phase, I provide regular updates of the project to the client (if applicable).
                    </p>,<></>]}
                </ListPoint>
                <div className="separator"></div>
                <h3>Deployment and Maintenance:</h3>
                <ListPoint number={7}>
                    {[<p key={1}>
                        Finally, after the project is completed, I deliver it to the client and/or deploy it myself. If there is a client, I typically ask whether they would like me to handle the deployment or if they prefer to manage it themselves.
                    </p>,<></>]}
                </ListPoint>
                <ListPoint number={8}>
                    {[<p key={1}>
                        After delivering the product, I usually offer a limited period of maintenance. For more complex projects, I provide the client with a manual on how to use the product's functions and let them know they can contact me if any issues arise.
                    </p>,<></>]}
                </ListPoint>
            </ol>
        </PageLayout>
    )
}