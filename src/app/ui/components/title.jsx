'use client'
import GithubIcon from '../icons/githubicon';
import LinkedinIcon from '../icons/linkedicon';

import { useEffect, useState } from 'react';
import CIcon from '../icons/cicon';
import CPlusIcon from '../icons/cplusicon';
import KnowledgeCard from './knowledge_card';
import { SpotLightElement } from './SpotLightElement';

export default function Title() {
	const [width, setWidth] = useState(0);
	const [height, setHeight] = useState(0);

	useEffect(()=> {
		setHeight(window.innerHeight);
		setWidth(window.innerWidth);

		const resize = () => {
			setHeight(window.innerHeight);
			setWidth(window.innerWidth);
		}

		window.addEventListener('resize', resize)

		return (() => {
			window.removeEventListener('resize', resize);
		})
	}, []);

	return (
		<section className='portada-elements'>

			<div className='title'>
				{
				(width < 500 || (width < height)) 
				? <>
					<div className='title-text'>
						<small>Hello!</small>
						<h1>I'm <strong>Keivin Martínez</strong>,</h1>
						<small>welcome to my portfolio</small>
					</div>
					<div className="links-icon">
						<a href="https://www.linkedin.com/in/keivin-martínez/" target="_blank"><LinkedinIcon /></a>
						<a href="https://github.com/Damagd" target="_blank"><GithubIcon /></a>
					</div>
				</>
				: <>
					<div className="links-icon">
						<a href="https://www.linkedin.com/in/keivin-martínez/" target="_blank"><LinkedinIcon /></a>
						<a href="https://github.com/Damagd" target="_blank"><GithubIcon /></a>
					</div>
					<div style={{width: '4.5rem'}}></div>
					<div className='title-text'>
						<SpotLightElement borderR={'26px'}>
							<div style={{padding: '0.3125rem'}}>
								<small>Hello!</small>
								<h1>I'm <strong>Keivin Martínez</strong>,</h1>
								<small>welcome to my portfolio</small>
							</div>
						</SpotLightElement>
					</div>
				</>
				}
			</div>
			<aside className='currently-part'>
				<div className="card-currently">
					<h3 style={{fontSize: 'large', fontWeight: 'bold', textAlign: 'center'}}>I'm a developer with knowledge in</h3>
					<KnowledgeCard title={'Programming Languages and others'}>
						<div className='technology'>
							C
						</div>
						<div className='technology'>
							C++
						</div>
						<div className='technology'>
							JavaScript
						</div>
						<div className='technology'>
							PHP
						</div>
						<div className='technology'>
							HTML
						</div>
						<div className='technology'>
							CSS
						</div>
					</KnowledgeCard>
					<KnowledgeCard title={'Frameworks, libraries and Methodologies'}>
						<div className='technology'>
							SCRUM
						</div>
						<div className='technology'>
							PMBOK
						</div>
						<div className='technology'>
							AGILE
						</div>
						<div className='technology'>
							ReactJs
						</div>
						<div className='technology'>
							Laravel
						</div>
						<div className='technology'>
							MVC
						</div>
						<div className='technology'>
							Bootstrap
						</div>
						<div className='technology'>
							Threejs
						</div>
						<div className='technology'>
							JavaFX
						</div>
						<div className='technology'>
							Node.js
						</div>
						<div className='technology'>
							Flutter
						</div>
					</KnowledgeCard>
					<KnowledgeCard title={'Tools & Softwares'}>
						<div className='technology'>
							IntelliJ
						</div>
						<div className='technology'>
							NetBeans
						</div>
						<div className='technology'>
							VSCode
						</div>
						<div className='technology'>
							Git
						</div>
						<div className='technology'>
							Figma
						</div>
					</KnowledgeCard>
					<KnowledgeCard title={'Aptitudes'}>
						<div className='technology'>
							Responsability
						</div>
						<div className='technology'>
							Initiative
						</div>
						<div className='technology'>
							Teamworker
						</div>
						<div className='technology'>
							Leadership
						</div>
						<div className='technology'>
							Problem solving skills
						</div>
					</KnowledgeCard>
				</div>
			</aside>
		</section>
		
	)
}