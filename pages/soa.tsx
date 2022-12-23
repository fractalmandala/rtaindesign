import Link from 'next/link'
import Soahead from '../components/soaheader'
import Soafooter from '../components/soafooter'
import styles from '../components/modules/soa.module.css'
import Image from 'next/image'
import Indian_Realism from '../public/soaimages/Indian_Realism.png'
import Indian_Style from '../public/soaimages/Indian_Style.png'
import StoneKing from '../public/soaimages/StoneKing.png'
import Lady from '../public/soaimages/Lady.png'
import primalrishi from '../public/soaimages/primalrishi.webp'
import cinema from '../public/soaimages/cinema.png'
import digital from '../public/soaimages/digital.png'
import intangibles from '../public/soaimages/intangibles.png'
import lighting from '../public/soaimages/lighting.png'
import materials from '../public/soaimages/materials.png'
import mediums from '../public/soaimages/mediums.png'
import palettes from '../public/soaimages/palettes.png'
import perspectives from '../public/soaimages/perspectives.png'
import stylesimg from '../public/soaimages/styles.png'
import themes from '../public/soaimages/themes.png'

export default function() {
  return (
    <div className={styles.soacontainer}>
      <Soahead></Soahead>
      <div className={styles.soaguidearea}>
        <h5>Basic Parameters</h5>
        <div className={styles.basiccol}>
          <p>-- stylize NUM (greater number = more stylized)</p>
          <p>--quality NUM (greater number = higher quality but takes more time, from 0 to 5, decimals allowed)</p>
          <p>--chaos NUM (greater number = more randomness)</p>
          <p>--tile (repeats pattern in render)</p>
          <p>--no X (where X = whatever you specifically do not want in the render)</p>
          <p>--iw X (X = weight of input image, from -1 to 2)</p>
        </div>
      </div>
      <div className={styles.imagescontainer}>
      <div className={styles.rowline}>
        <div className={styles.heroboxlinked}>
          <Link href="/soa/cinematic">
            <p>Cinematic Prompts</p>
            <Image className={styles.actualimage} 
              src={cinema}
              alt="Cinema"
            />
          </Link>  
        </div>
        <div className={styles.heroboxlinked}>
        <p>Digital Prompts</p>
          <Image className={styles.actualimage}
          src={digital}
          alt="Digital"
          />
        </div>
        <div className={styles.heroboxlinked}>
        <p>Ingtangible Prompts</p>
          <Image className={styles.actualimage}
          src={intangibles}
          alt="Intangibles"
          />
        </div>
        <div className={styles.heroboxlinked}>
        <p>Lighting Prompts</p>
          <Image className={styles.actualimage}
          src={lighting}
          alt="Lighting"
          />
        </div>
        <div className={styles.heroboxlinked}>
        <p>Materials Prompts</p>
          <Image className={styles.actualimage}
          src={materials}
          alt="Materials"
          />
        </div>
      </div>
      <div className={styles.seperating}></div>
      <div className={styles.rowline}>
        <div className={styles.heroboxlinked}>
        <p>Mediums Prompts</p>
          <Image className={styles.actualimage} 
          src={mediums}
          alt="Mediums"
          />
        </div>
        <div className={styles.heroboxlinked}>
        <p>Palettes Prompts</p>
          <Image className={styles.actualimage}
          src={palettes}
          alt="Palettes"
          />
        </div>
        <div className={styles.heroboxlinked}>
        <p>Perspectives Prompts</p>
          <Image className={styles.actualimage}
          src={perspectives}
          alt="Perspectives"
          />
        </div>
        <div className={styles.heroboxlinked}>
        <p>Style-Related Prompts</p>
          <Image className={styles.actualimage}
          src={stylesimg}
          alt="Styles"
          />
        </div>
        <div className={styles.heroboxlinked}>
        <p>Theme-Related Prompts</p>
          <Image className={styles.actualimage}
          src={themes}
          alt="Themes"
          />
        </div>
      </div>
      <div className={styles.seperating}></div>
      </div>
      <div className={styles.spacer}></div>
      <Soafooter></Soafooter>
    </div>
  )
}