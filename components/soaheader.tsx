import Link from 'next/link'
import styles from '../components/modules/soa.module.css'

export default function Soahead() {
  return (
    <div className={styles.soamain}>
      <div className={styles.warning}>This Section is NOT Optimized for Mobile. Please View on Desktop/PC</div>
      <Link href="/"><small>Return to Homepage</small></Link>
      <Link href="/soa"><h1>Scrolls of Āryavarta</h1></Link>
      <small>Midjourney Trainer and Workshop for Dharmalore/ Dharmafuturism</small>
      <div className={styles.soabody}>
        <button className={styles.hover}>Training Kit</button>
        <div className={styles.listing}>
        <Link href="/soa/cinematic">Cinematic</Link>
        <Link href="/soa/digital">Digital</Link>
        <Link href="/soa/intangibles">Intangibles</Link>
        <Link href="/soa/lighting">Lighting</Link>
        <Link href="/soa/materials">Materials</Link>
        <Link href="/soa/mediums">Mediums</Link>
        <Link href="/soa/palettes">Palettes</Link>
        <Link href="/soa/perspectives">Perspectives</Link>
        <Link href="/soa/styles">Styles</Link>
        <Link href="/soa/themes">Themes</Link>
        </div>
      </div>
    </div>
  )
}