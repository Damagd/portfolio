'use client'

import FigmaIcon from "../../ui/icons/figmaicon";
import GithubIcon from "../../ui/icons/githubicon";

import styles from '../../ui/components/modal.module.css';
import LinkIcon from "../../ui/icons/LinkIcon";
import { Suspense, useEffect, useState } from "react";

import p from '../../utils/projects.json';
import { useSearchParams } from "next/navigation";
import PageLayout from "../../ui/layouts/PageLayout";
import HeaderProject from "../../ui/components/HeaderProject";

export default function ProjectPage() {
    const search = useSearchParams();
	const [project, setProject] = useState(null);
	const [formattedText, setFormattedText] = useState(null);

	useEffect(() => {
		const pId = search.get('p') || '0';
		const projectId = parseInt(pId);
		const projectaux = structuredClone(p?.p[projectId]);

		if(projectaux){
			const text = projectaux?.description.split('/*');
			setProject(structuredClone(p.p[projectId]));
			
			setFormattedText([...text]);
		}
	},[project]);

  return (
	<article className={styles.project_container}>
		{
			project &&
			<>
				<section className={styles.project_body}>
					<div className={styles.project_element}>
						<h3>Description:</h3>
						{
							formattedText?.map((text, index) => {
								return (
									<div key={index}>
									<p>{text}</p>
									{index < formattedText.length-1 && <br />}
								</div>
								)}
							)
						}
					</div>
					<div className={styles.project_element}>
						<h3>Languages, technologies, and methodologies:</h3>
						<span className="container-technologies">
							{
								project?.technologies.map((tech) => {
									return (
										<div key={tech} className="technology">
											{tech}
										</div>
									)
								})
							}
						</span>
					</div>
					<div className={styles.project_element}>
						<h3>Delivery date:</h3>
						<p>{project?.date}</p>
					</div>
					{project?.video &&
					<div className={styles.project_element}>
						<h3>Demo:</h3>
						<iframe width="100%" height='400px' style={{borderRadius: '0.375rem'}} src={project?.video} title={project?.title} frameBorder="0"></iframe>
					</div>}
				</section>
				{
					project?.links &&
					<footer className={styles.project_footer}>
						<h3>Links:</h3>
						<span className="links-icon">
							{
								project?.links.map((link) => {
									return (
										<a title={link.page + ' project'} href={link.link} key={link.page} target="_blank">
											{link.page === 'demo' && <LinkIcon />}
											{link.page === 'github' && <GithubIcon />}
											{link.page === 'figma' && <FigmaIcon />}
										</a>
									);
								})
							}
						</span>
					</footer>
				}

			</>
		}
		{
			!project &&
			<h3>This page is not avaliable...</h3>
		}
	</article>
  )
}