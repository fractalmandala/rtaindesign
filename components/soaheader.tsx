import Link from 'next/link'
import styles from '../components/modules/soa.module.css'

export default function Soahead() {
  return (
    <div className={styles.soamain}>
      <Link href="/"><small>Return to Homepage</small></Link>
      <Link href="/soa"><h1>Scrolls of Āryavarta</h1></Link>
      <small>Midjourney Trainer and Workshop for Dharmalore/ Dharmafuturism</small>
      <div className={styles.soabody}>
        <button className={styles.hover}>Training Kit</button>
        <div className={styles.listing}>
        <Link href="/soa/cinematic">Cinematic</Link>
        <Link href="#">Styles</Link>
        <Link href="#">Digital</Link>
        <Link href="#">Artists</Link>
        <Link href="#">Media</Link>
        <Link href="#">Colors</Link>
        <Link href="#">Materials</Link>
        <Link href="#">Things/Animals</Link>
        <Link href="#">Properties</Link>
        <Link href="#">Lighting</Link>
        <Link href="#">Shaders</Link>
        <Link href="#">Dimensionality</Link>
        <Link href="#">Camera/Lens</Link>
        <Link href="#">Perspective</Link>
        <Link href="#">TV/Movies</Link>
        <Link href="#">Geometry</Link>
        <Link href="#">Structural</Link>
        <Link href="#">Intangibles</Link>
        <Link href="#">Misc</Link>
        <Link href="#">Experimental</Link>
        </div>
      </div>
    </div>
  )
}