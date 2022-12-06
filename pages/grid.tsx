import styles from '../components/modules/grid.module.css'

export default function Grid() {
  return (
    <div className={styles.maincontain}>
      <div className={styles.headerline}>
        <div className={styles.logospace}>Bṛhat Open Library</div>
      </div>
      <div className={styles.subcontain}>
        <div className={styles.sidenav}></div>
      </div>
    </div>
    
  )
}