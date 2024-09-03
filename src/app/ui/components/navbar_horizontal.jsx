'use client'

import Link from 'next/link';
import AboutIcon from '../icons/abouticon';
import HomeIcon from '../icons/homeicon';
import PersonalIcon from '../icons/personalicon';
import WorkIcon from '../icons/workicon';
import WorkProcessIcon from '../icons/workprocessicon';
import styles from './navbar.module.css';
import { usePathname } from 'next/navigation';

export default function NavBarHorizontal() {
    const pathname = usePathname();

    return (
        <nav>
            <ul className={styles.navigator_horizontal}>
                <li className={styles.option_nav_horizontal} tooltip="hola">
                    <Link href={'#home'} className={styles.option_nav_horizontal} >
                        <HomeIcon />
                        <small>Home</small>
                    </Link>
                </li>
                <li className={styles.option_nav_horizontal}>
                    <div className={styles.effect_h}/>
                    <Link href='/profile' className={`${styles.option_nav_horizontal} ${pathname === '/profile' ? styles.selected : ''}`}>
                        <AboutIcon />
                        <small>Profile</small>
                    </Link>
                </li>
                <li className={styles.option_nav_horizontal}>
                    <div className={styles.effect_h}/>
                    <Link href='/work' className={`${styles.option_nav_horizontal} ${pathname === '/work' ? styles.selected : ''}`}>
                        <WorkProcessIcon />
                        <small>Process</small>
                    </Link>
                </li>
                <li className={styles.option_nav_horizontal}>
                    <div className={styles.effect_h}/>
                    <Link href='/experience' className={`${styles.option_nav_horizontal} ${pathname === '/experience' ? styles.selected : ''}`}>
                        <WorkIcon />
                        <small>Experience</small>
                    </Link>
                </li>
                <li className={styles.option_nav_horizontal}>
                    <div className={styles.effect_h}/>
                    <Link href='/projects' className={`${styles.option_nav_horizontal} ${pathname.includes('/projects') ? styles.selected : ''}`}>
                        <PersonalIcon />
                        <small>Projects</small>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}