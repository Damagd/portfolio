import { Card } from "../ui/components/Card";
import { SpotLightElement } from "../ui/components/SpotLightElement";
import PageLayout from "../ui/layouts/PageLayout";

import p from './../utils/projects.json';

export default async function ProjectsPage()  {
  const projects = [...p.p];

  return (
    <PageLayout title={'My Projects'}>
        <div className="content-cards">
            {projects.map((project, i) => {
                return (
                  <SpotLightElement key={i}>
                    <Card project={project}></Card>
                  </SpotLightElement>
                )
              })
            }
        </div>
    </PageLayout>
  )
}