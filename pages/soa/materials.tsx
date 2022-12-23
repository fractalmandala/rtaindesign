import Link from 'next/link'
import Soahead from '../../components/soaheader'
import styles from '../../components/modules/soa.module.css'
import Image from 'next/image'

import basalt from '../../public/soaimages/materials/Basalt.png'
import cellulose from '../../public/soaimages/materials/Cellulose.png'
import chert from '../../public/soaimages/materials/Chert.png'
import clay from '../../public/soaimages/materials/Clay.png'
import coal from '../../public/soaimages/materials/Coal.png'
import dirt from '../../public/soaimages/materials/Dirt.png'
import dust from '../../public/soaimages/materials/Dust.png'
import gypsum from '../../public/soaimages/materials/Gypsum.png'
import limestone from '../../public/soaimages/materials/Limestone.png'
import lumber from '../../public/soaimages/materials/Lumber.png'
import mudbrick from '../../public/soaimages/materials/Mud_Brick.png'
import podzol from '../../public/soaimages/materials/Podzol.png'
import rock from '../../public/soaimages/materials/Rock.png'
import soil from '../../public/soaimages/materials/Soil.png'
import stonetablet from '../../public/soaimages/materials/Stone_Tablet.png'
import stone from '../../public/soaimages/materials/Stone.png'
import terracotta from '../../public/soaimages/materials/Terracotta.png'
import vellum from '../../public/soaimages/materials/Vellum.png'
import wooden from '../../public/soaimages/materials/Wooden.png'


export default function Materials() {
  return (
    <div className={styles.soacontainer}>
      <Soahead></Soahead>
      <div className={styles.spacer}></div>
      <div className={styles.imagescontainer}>
        <h4>Materials/Substances Prompt Words</h4>
        <p>Use these words/phrases exactly as they are given, in your prompts</p>
        <div className={styles.theliner}></div>
        <div className={styles.rowline}>
        <div className={styles.heroboxinner}>
        <p>Basalt</p>
          <Image className={styles.innerimage}
          src={basalt}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Cellulose</p>
          <Image className={styles.innerimage}
          src={cellulose}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Chert</p>
          <Image className={styles.innerimage}
          src={chert}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Clay</p>
          <Image className={styles.innerimage}
          src={clay}
          alt=""
          width='300'
          height='300'
          />
        </div>
        </div>
        <div className={styles.rowline}>
        <div className={styles.heroboxinner}>
        <p>Coal</p>
          <Image className={styles.innerimage}
          src={coal}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Dirt</p>
          <Image className={styles.innerimage}
          src={dirt}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Dust</p>
          <Image className={styles.innerimage}
          src={dust}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Gypsum</p>
          <Image className={styles.innerimage}
          src={gypsum}
          alt=""
          width='300'
          height='300'
          />
        </div>
        </div>
        <div className={styles.rowline}>
        <div className={styles.heroboxinner}>
        <p>Limestone</p>
          <Image className={styles.innerimage}
          src={limestone}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Lumber</p>
          <Image className={styles.innerimage}
          src={lumber}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Mud Brick</p>
          <Image className={styles.innerimage}
          src={mudbrick}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Podzol</p>
          <Image className={styles.innerimage}
          src={podzol}
          alt=""
          width='300'
          height='300'
          />
        </div>
        </div>
        <div className={styles.rowline}>
        <div className={styles.heroboxinner}>
        <p>Rock</p>
          <Image className={styles.innerimage}
          src={rock}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Soil</p>
          <Image className={styles.innerimage}
          src={soil}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Stone Tablet</p>
          <Image className={styles.innerimage}
          src={stonetablet}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Stone</p>
          <Image className={styles.innerimage}
          src={stone}
          alt=""
          width='300'
          height='300'
          />
        </div>
        </div>
        <div className={styles.rowline}>
        <div className={styles.heroboxinner}>
        <p>Terracotta</p>
          <Image className={styles.innerimage}
          src={terracotta}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Vellum</p>
          <Image className={styles.innerimage}
          src={vellum}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Wooden</p>
          <Image className={styles.innerimage}
          src={wooden}
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