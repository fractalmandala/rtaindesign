import styles from './modules/sidenav.module.css'
import {getSortedPostsData} from '../lib/posts'
import Link from 'next/link'
const { Nuclia } = require('@nuclia/core');
import DictionarySearch from '../components/supasearch'
import Script from 'next/script'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Sidenav = ({ preview, children }: Props) => {
  return (
    <>
    <div className={styles.sidenav}>
      <small>Search Dictionary:</small>
    <DictionarySearch></DictionarySearch>
    <Link href="/texts/mimamsasutra">Mīmāṃsasūtra</Link>
    <Link href="/texts/sankhyasutra">Sāṅkhyasūtra</Link>
    <Link href="/texts/vaisheshikasutra">Vaiśeṣikasūtra</Link>
    <p>Word Lists:</p>
    <Link href="#">Aṣṭadhyāyī</Link>
    <Link href="/amarakosha">Amarakośa</Link>
    <Link href="/grid">Grid</Link>
    <Link href="/paradigm">Paradigm</Link>
    <Link href="/rigveda">Ṛgveda</Link>
    <Link href="/fetching">Fetching</Link>
    <Link href="#"></Link>
    </div>
    </>
  )
}

export default Sidenav