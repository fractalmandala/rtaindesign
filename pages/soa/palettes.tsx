import Link from 'next/link'
import Soahead from '../../components/soaheader'
import styles from '../../components/modules/soa.module.css'
import Image from 'next/image'

import autochrome from '../../public/soaimages/palettes/Autochrome.png'
import black from '../../public/soaimages/palettes/Black.png'
import cinecolor from '../../public/soaimages/palettes/Cinecolor.png'
import colorized from '../../public/soaimages/palettes/Colorized.png'
import gray from '../../public/soaimages/palettes/Gray.png'
import hdr from '../../public/soaimages/palettes/HDR.png'
import hsv from '../../public/soaimages/palettes/HSV.png'
import hue from '../../public/soaimages/palettes/Hue.png'
import monochromatic from '../../public/soaimages/palettes/Monochromatic.png'
import pure from '../../public/soaimages/palettes/Pure.png'
import purity from '../../public/soaimages/palettes/Purity.png'
import sepia from '../../public/soaimages/palettes/Sepia.png'
import white from '../../public/soaimages/palettes/White.png'


export default function Palettes() {
  return (
    <div className={styles.soacontainer}>
      <Soahead></Soahead>
      <div className={styles.spacer}></div>
      <div className={styles.imagescontainer}>
        <h4>Prompt Words for Palettes and Colors</h4>
        <p>Use these words/phrases exactly as they are given, in your prompts</p>
        <div className={styles.theliner}></div>
        <div className={styles.rowline}>
        <div className={styles.heroboxinner}>
        <p>Autochrome</p>
          <Image className={styles.innerimage}
          src={autochrome}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Black</p>
          <Image className={styles.innerimage}
          src={black}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Cinecolor</p>
          <Image className={styles.innerimage}
          src={cinecolor}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Colorized</p>
          <Image className={styles.innerimage}
          src={colorized}
          alt=""
          width='300'
          height='300'
          />
        </div>
        </div>
        <div className={styles.rowline}>
        <div className={styles.heroboxinner}>
        <p>Gray</p>
          <Image className={styles.innerimage}
          src={gray}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>HDR</p>
          <Image className={styles.innerimage}
          src={hdr}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>HSV</p>
          <Image className={styles.innerimage}
          src={hsv}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Hue</p>
          <Image className={styles.innerimage}
          src={hue}
          alt=""
          width='300'
          height='300'
          />
        </div>
        </div>
        <div className={styles.rowline}>
        <div className={styles.heroboxinner}>
        <p>Monochromatic</p>
          <Image className={styles.innerimage}
          src={monochromatic}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Pure</p>
          <Image className={styles.innerimage}
          src={pure}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Purity</p>
          <Image className={styles.innerimage}
          src={purity}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Sepia</p>
          <Image className={styles.innerimage}
          src={sepia}
          alt=""
          width='300'
          height='300'
          />
        </div>
        </div>
        <div className={styles.rowline}>
        <div className={styles.heroboxinner}>
        <p>White</p>
          <Image className={styles.innerimage}
          src={white}
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