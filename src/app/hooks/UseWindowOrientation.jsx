import { useEffect, useState } from "react";

export default function UseWindowOrientation() {
    const [isLandScape, setIsLandScape] = useState(true);

	useEffect(()=> {
        if(window.innerWidth < 500 || (window.innerWidth < window.innerHeight)) 
            setIsLandScape(false);
        else setIsLandScape(true);

        const resize = () => {
            if(window.innerWidth < 500 || (window.innerWidth < window.innerHeight)){
                setIsLandScape(false);
                console.log('aa')
            } 
            else {
                console.log('aab')
                setIsLandScape(true);
            }

        }

		window.addEventListener('resize', resize);

        return () => {
            document.removeEventListener('resize', resize);
        };
	}, [])
    
    return isLandScape;
}