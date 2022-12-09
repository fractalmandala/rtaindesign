import styles from './modules/sidenav.module.css'
import Link from 'next/link'
const { Nuclia } = require('@nuclia/core');
import Script from 'next/script'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Sidenav = ({ preview, children }: Props) => {
  return (
    <>
    <div className={styles.sidenav}>
    <Link href="/rigveda">Ṛgveda</Link>
    <Link href="/nirukta">Nirukta</Link>
    <Link href="/texts/mimamsasutra">Mīmāṃsasūtra</Link>
    <Link href="/texts/sankhyasutra">Sāṅkhyasūtra</Link>
    <Link href="/texts/vaisheshikasutra">Vaiśeṣikasūtra</Link>
    <Link href="/ashtadhyayi">Ashtadhyāyī</Link>
    <p>Word Lists:</p>
    <Link href="/#">Amarakośa</Link>
    <Link href="/grid">Grid</Link>
    <Link href="/#">Fetching</Link>
    <Link href="#"></Link>
    </div>
    </>
  )
}

export default Sidenav