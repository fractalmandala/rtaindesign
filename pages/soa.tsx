import Link from 'next/link'
import Soahead from '../components/soaheader'
import styles from '../components/modules/soa.module.css'
import Image from 'next/image'
import Indian_Realism from '../soa/images/Indian_Realism.png'
import Indian_Style from '../soa/images/Indian_Style.png'
import StoneKing from '../soa/images/StoneKing.png'
import Lady from '../soa/images/Lady.png'
import primalrishi from '../soa/images/primalrishi.webp'

export default function() {
  return (
    <div className={styles.soacontainer}>
      <Soahead></Soahead>
      <div className={styles.spacer}></div>
      <div className={styles.rowline}>
        <div className={styles.herobox}>
          <Image className={styles.actualimage} 
          src={Indian_Realism}
          alt="example of Indian Realism"
          width="200"
          height='200'
          />
        </div>
        <div className={styles.herobox}>
          <Image className={styles.actualimage}
          src={Indian_Style}
          alt="example of Indian Style"
          width='200'
          height='200'
          />
        </div>
        <div className={styles.herobox}>
          <Image className={styles.actualimage}
          src={StoneKing}
          alt="status of a stone king"
          width='200'
          height='200'
          />
        </div>
        <div className={styles.herobox}>
          <Image className={styles.actualimage}
          src={Lady}
          alt="indian woman"
          width='200'
          height='200'
          />
        </div>
        <div className={styles.herobox}>
          <Image className={styles.actualimage}
          src={primalrishi}
          alt="old rishi"
          width='200'
          height='200'
          />
        </div>
      </div>
    </div>
  )
}