import DownIcon from '../icons/downicon'
import styles from './knowledge_card.module.css'

export default function KnowledgeCard({title, children}) {
    
    return (
        <article className={styles.knowledge_card}>
            <h4 className={styles.title_text}>{title} <span><DownIcon/></span></h4>
            <div className={styles.container_technologies}>
                {children}
            </div>
        </article>
    )
}