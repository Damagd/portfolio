'use client'

export default function ImageClicked({src, alt, classN}) {
    
    const onTap = () => {
        document.querySelector('.modal-container').style.display = 'block';
        document.querySelector('.modal-container div img').src = src;
    }

    return (
        <img onClick={onTap} src={src} alt={alt} className={`${classN}`} loading="lazy" />
    )
}