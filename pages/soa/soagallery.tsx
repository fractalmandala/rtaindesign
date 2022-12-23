import Link from 'next/link'
import Soafooter from '../../components/soafooter'
import Image from 'next/image'
import styles from '../../components/modules/soa.module.css'
import SoaGalleryPull from '../../extracts/soagalleryimages'
import Soaheader from '../../components/soaheader'

export default function() {
  return (
    <div className={styles.soacontainer}>
      <Soaheader></Soaheader>
      <SoaGalleryPull></SoaGalleryPull>
      <div className={styles.enderspace}>
        <Link href="">Back to Top</Link>
      </div>
      <Soafooter></Soafooter>
    </div>
  )
}