import styles from './modules/sidenav.module.css'
import {getSortedPostsData} from '../lib/posts'
import Link from 'next/link'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Sidenav = ({ preview, children }: Props) => {
  return (
    <>
    <div className={styles.sidenav}>
    <Link href="/texts/mimamsasutra">Mīmāṃsasūtra</Link>
    <Link href="/texts/sankhyasutra">Sāṅkhyasūtra</Link>
    <Link href="/texts/vaisheshikasutra">Vaiśeṣikasūtra</Link>
    </div>
    </>
  )
}

export default Sidenav