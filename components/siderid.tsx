import styles from './modules/sidenav.module.css'
import Link from 'next/link'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Siderid = ({ preview, children }: Props) => {
  return (
    <>
    <div className={styles.sidenav}>
    <Link href="/#">Paradigm</Link>
      <li>Ṛta and Smṛta</li>
      <li>Kṛta</li>
      <li>Dhṛta, Ghṛta, Bhṛta</li>
      <li>Mṛta, Anṛta</li>
    <Link href="/#">Phases</Link>
    <li>Svataḥ Siddha</li>
    <li>Purohita</li>
    <li>Saṃskartṛ</li>
    <Link href="#">Principles</Link>
    <li>Intent</li>
    <li>Agency</li>
    <li>Grounding</li>
    <li>Consonance</li>
    <Link href="#">Tools and Frameworks</Link>
    <li>Karmakṣetra Files</li>
    <li>Ṛta Compass</li>
    <li>Anṛta Checksheet</li>
    <Link href="#">Resources</Link>
    <li>Tools We Use</li>
    <li>Design @ Bṛhat</li>
    <li>Product Journals</li>
    <li></li>
    </div>
    </>
  )
}

export default Siderid