import styles from '../components/modules/grid.module.css'
import Link from 'next/link'

export default function Grid() {
  return (
    <div className={styles.maincontain}>
      <div className={styles.headerline}>
        <div className={styles.logospace}>
          <Link href="/">Bṛhat Open Library</Link></div>
      </div>
      <div className={styles.subcontain}>
        <div className={styles.sidenav}></div>
      </div>
    </div>
    
  )
}