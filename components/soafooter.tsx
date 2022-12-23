import Link from 'next/link'
import styles from '../components/modules/soa.module.css'

export default function Soafooter() {
  return (
    <div className={styles.soafooter}>
      <h4>A Project by <a href="https://brhat.in" target="_blank">Bṛhat</a></h4>
      <p>All training kit content is taken from the extensively detailed <a href="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference" target="_blank">Styles and Keywords Reference by Will Wulfken</a> at Github.</p>
    </div>
  )
}