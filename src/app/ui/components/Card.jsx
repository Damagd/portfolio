import Link from 'next/link';
import FigmaIcon from '../icons/figmaicon';
import GithubIcon from '../icons/githubicon';
import YoutubeIcon from '../icons/youtubeicon';
import styles from './card.module.css'
import LinkIcon from '../icons/LinkIcon';

export function Card({project}) {

  return (
    <article className={styles.card}>
      <Link href={{pathname: `/projects/project`, query: { p: project._id, title: project.title}}}  className={styles.card_anchor}>
        <header className={styles.card_image}>
          <img src={project.photo !== '' ? project.photo : photo} width={'100%'}  alt={`image of the project ${project.title}, a ${project.short_description}`} loading="lazy" />
        </header>
        <section className={styles.card_info}>
          <h3 className={styles.escard_title}>{project.title}</h3>
          <span className={styles.container_technologies}>
            {
              project.technologies.map((tech) => {
                return (
                  <div key={tech} className={styles.technology}>
                    {tech}
                  </div>
                )
              })
            }
          </span>
          <small className={styles.card_description}>
            {project.short_description}
          </small>
          <span className={styles.false_links_icon}></span>
        </section>
      </Link>
        <span className={styles.links_icon}>
          {
            project.links?.map((link) => {
              return (
                <a title={link.page + ' project'} href={link.link} key={link.page} target="_blank">
                  {link.page === 'demo' && <LinkIcon />}
                  {link.page === 'github' && <GithubIcon />}
                  {link.page === 'figma' && <FigmaIcon />}
                  {link.page === 'youtube' && <YoutubeIcon />}
                </a>
              );
            })
          }
        </span>
    </article>
  );
}
