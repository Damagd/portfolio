import { ListPointCard } from "../ui/components/ListPointCard";
import PageLayout from "../ui/layouts/PageLayout";

import styles from './ListPointCardPage.module.css'

export default function JobHome() {
  return (
    <PageLayout title={'Job Experience'}>
      <ul className={styles.list_points}>
        <ListPointCard title={'Freelance Developer'} technologies={['Front-End', 'Back-End', 'UX/UI', 'Programming', 'HTML', 'CSS', 'JavaScript', 'Figma', 'Others']} date={'April 2023 - Currently'}>
          As a freelance developer, right now I specialize in static promotional websites, mostly for small/startup businesses. Depending on the business, creative freedom, and client vision, I use different technologies to accomplish the desirable product. You can check more of my work process in the "Work Process" section of this portfolio.
        </ListPointCard>
        <ListPointCard title={'Full Stack Developer - RADI Project'} technologies={['SCRUM', 'Agile', 'Front-End', 'Back-End', 'HTML', 'CSS', 'JavaScript', 'PHP Laravel', 'JQuery', 'Figma', 'UML']} date={'August 2021 - December 2022'} project={'https://www.youtube.com/watch?v=iA-v5bz-jN8'}>
          I was part of the RADI project’s development team, to create a system capable of  documenting projects carried out in the IT department of the Faculty. You can check more about this project in the "Projects" section of this portfolio.
        </ListPointCard>
      </ul>
    </PageLayout>
  )
}