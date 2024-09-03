'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import BackIcon from '../icons/backicon'
import styles from './HeaderProject.module.css'

export default function HeaderProject({children}) {
    const router = useRouter();
    const search = useSearchParams();
    const title = search.get('title');

    return (
        <div className={styles.header_container} onClick={() => router.back()}>
            <h3>
                <BackIcon />
                {
                    title ?
                    title :
                    'This page is not avaliable...'
                }
            </h3>
        </div>
    )
}