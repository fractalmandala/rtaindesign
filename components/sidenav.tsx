import styles from './modules/sidenav.module.css'
import Link from 'next/link'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Sidenav = ({ preview, children }: Props) => {
  return (
    <>
    <div className={styles.sidenav}>
      <p>Ṛta in Design</p>
      <small id={styles.line1}>Introduction</small>
      <small id={styles.line2}>The Scaffolding in Brief</small>
      <small id={styles.line3}>Principles of Design</small>
      <small id={styles.line4}>The Design Being</small>
      <small id={styles.line5}>Svataḥ Siddha</small>
      <br></br>
      <p>Fractal Maṇḍala</p>
      <small id={styles.line6}>About</small>
      <small id={styles.line7}>Documentation</small>
      <small id={styles.line8}><Link href="/fetching">Playground</Link></small>
      <small id={styles.line9}>Current Status</small>
    {children}
    </div>
    </>
  )
}

export default Sidenav