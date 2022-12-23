import Link from 'next/link'
import Soahead from '../../components/soaheader'
import styles from '../../components/modules/soa.module.css'
import Image from 'next/image'

import aerial from '../../public/soaimages/perspectives/Aerial_Perspective.png'
import aerialview from '../../public/soaimages/perspectives/Aerial_View.png'
import closeup from '../../public/soaimages/perspectives/Closeup.png'
import highangle from '../../public/soaimages/perspectives/High_Angle.png'
import miniature from '../../public/soaimages/perspectives/Miniature_Faking.png'
import sideview from '../../public/soaimages/perspectives/Side_View.png'
import topview from '../../public/soaimages/perspectives/Top_View.png'
import viewfromairplane from '../../public/soaimages/perspectives/View_From_an_Airplane.png'

export default function Perspectives() {
  return (
    <div className={styles.soacontainer}>
      <Soahead></Soahead>
      <div className={styles.spacer}></div>
      <div className={styles.imagescontainer}>
        <h4>Prompt Words for Perspective/Angle</h4>
        <p>Use these words/phrases exactly as they are given, in your prompts</p>
        <div className={styles.theliner}></div>
        <div className={styles.rowline}>
        <div className={styles.heroboxinner}>
        <p>Aerial Perspective</p>
          <Image className={styles.innerimage}
          src={aerial}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Aerial View</p>
          <Image className={styles.innerimage}
          src={aerialview}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Closeup</p>
          <Image className={styles.innerimage}
          src={closeup}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>High Angle</p>
          <Image className={styles.innerimage}
          src={highangle}
          alt=""
          width='300'
          height='300'
          />
        </div>
        </div>
        <div className={styles.rowline}>
        <div className={styles.heroboxinner}>
        <p>Miniature Faking</p>
          <Image className={styles.innerimage}
          src={miniature}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Side View</p>
          <Image className={styles.innerimage}
          src={sideview}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Top View</p>
          <Image className={styles.innerimage}
          src={topview}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>View from an Airplane</p>
          <Image className={styles.innerimage}
          src={viewfromairplane}
          alt=""
          width='300'
          height='300'
          />
        </div>
        </div>
      </div>
      <div className={styles.enderspace}>
        <Link href="">Back to Top</Link>
      </div>
    </div>
  )
}