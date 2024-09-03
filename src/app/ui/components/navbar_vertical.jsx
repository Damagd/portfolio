'use client'

import Link from 'next/link';
import styles from './navbar.module.css';
import { usePathname } from 'next/navigation';

export default function NavBarVertical() {
    const pathname = usePathname();
    return (
			<>
				<div className={styles.navigator_vertical_container}>
					<nav className={styles.navigator_vertical}>
							<li className={`${styles.navigator_vertical} ${styles.element}`}>
								<div className={styles.effect}/>
								<a href='#home'>
									<div>
										HOME
									</div>
								</a>
							</li>
							<li className={`${styles.navigator_vertical} ${styles.element} ${pathname === '/profile' ? styles.selected_h : ''}`}>
								<div className={styles.effect}/>
								<Link href="/profile">
									<div>
										PROFILE
									</div>
								</Link>
							</li>
							<li className={`${styles.navigator_vertical} ${styles.element} ${pathname === '/work' ? styles.selected_h : ''}`}>
								<div className={styles.effect}/>
								<Link href="/work" className=''>
									<div>
										WORK PROCESS
									</div>
								</Link>
							</li>
							<li className={`${styles.navigator_vertical} ${styles.element} ${pathname === '/experience' ? styles.selected_h : ''}`}>
								<div className={styles.effect}/>
								<Link href="/experience">
									<div>
										JOB EXPERIENCE
									</div>
								</Link>
							</li>
							<li className={`${styles.navigator_vertical} ${styles.element} ${pathname.includes('/projects') ? styles.selected_h : ''}`}>
								<div className={styles.effect}/>
								<Link href="/projects">
									<div>
										PROJECTS
									</div>
								</Link>
							</li>
					</nav>
				</div>
			</>
    );
}