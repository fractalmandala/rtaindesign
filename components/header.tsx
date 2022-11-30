import styles from './modules/header.module.css'

import Link from 'next/link'

export default function Header() {
  return (
    <div className={styles.isheader}>
<Link href="/">HOME</Link>
    </div>
  )
}



