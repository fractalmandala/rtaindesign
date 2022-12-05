import styles from './modules/header.module.css'

import Link from 'next/link'


export default function Header() {
  return (
    <div className={styles.isheader}>
      <div className={styles.brander}>
<Link href="/">Bṛhat Open Library</Link>
</div>
<div className={styles.other}>
<Link href="/docs/documentation">Documentation</Link>
<Link href="#">References</Link>
<Link href="#">Guide</Link>
<Link href="/docs/about">About</Link>
</div>
    </div>
  )
}



