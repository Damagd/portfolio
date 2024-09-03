import GithubIcon from '../icons/githubicon'
import LinkIcon from '../icons/LinkIcon';
import styles from './ListPointCard.module.css'
import { SpotLightElement } from './SpotLightElement';

export function ListPointCard({children, title, technologies = [], date, project = null}) {
	return(
		<li className="point-item">
			<div className={`point-container`} >
				<div className="point">
				</div>
			</div>
			<article className={styles.point_card_container}>
				<time className={styles.time_job}>
					<small>{date}</small>
				</time>
				<SpotLightElement>
					<div className={styles.card_job_body}>
						<h4>{title}</h4>
						<span className={styles.container_technologies}>
							{
								technologies.map((technology, i) => {
									return (
										<div key={i} className={styles.technology}>
											{technology}
										</div>
									);
								})
							}
						</span>
						<p>
							<small className={styles.text}>
								{children}
							</small>
						</p>
						<span className={styles.false_links_icon}></span>
						<span className={styles.links_icon}>
							{project && 
							<a title='Work evidence' href={project} target="_blank">
								<LinkIcon />
							</a>
							}
							
					</span>
					</div>
				</SpotLightElement>
			</article>
		</li>
	)
  }