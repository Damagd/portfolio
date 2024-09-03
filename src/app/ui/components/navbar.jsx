'use client'

import { useEffect, useState } from 'react';
import AboutIcon from '../icons/abouticon';
import PersonalIcon from '../icons/personalicon';
import WorkIcon from '../icons/workicon';
import styles from './navbar.module.css';
import NavBarVertical from './navbar_vertical';
import NavBarHorizontal from './navbar_horizontal';

export default function NavBar() {

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
		<>
			{
			((width > height))
			? <NavBarVertical/>
			: <NavBarHorizontal/>
		}
		</>
			
    );
}