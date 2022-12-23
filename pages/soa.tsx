import Link from 'next/link'
import Soahead from '../components/soaheader'
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
      <div className={styles.spacer}></div>
      <div className={styles.imagescontainer}>
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
      <div className={styles.rowline}>
        <div className={styles.heroboxlinked}>
          <Link href="/soa/cinematic">
            <p>Cinematic Prompts</p>
            <Image className={styles.actualimage} 
              src={cinema}
              alt="Cinema"
              width="200"
              height='200'
            />
          </Link>  
        </div>
        <div className={styles.heroboxlinked}>
        <p>Digital Prompts</p>
          <Image className={styles.actualimage}
          src={digital}
          alt="Digital"
          width='200'
          height='200'
          />
        </div>
        <div className={styles.heroboxlinked}>
        <p>Ingtangible Prompts</p>
          <Image className={styles.actualimage}
          src={intangibles}
          alt="Intangibles"
          width='200'
          height='200'
          />
        </div>
        <div className={styles.heroboxlinked}>
        <p>Lighting Prompts</p>
          <Image className={styles.actualimage}
          src={lighting}
          alt="Lighting"
          width='200'
          height='200'
          />
        </div>
        <div className={styles.heroboxlinked}>
        <p>Materials Prompts</p>
          <Image className={styles.actualimage}
          src={materials}
          alt="Materials"
          width='200'
          height='200'
          />
        </div>
      </div>
      <div className={styles.rowline}>
        <div className={styles.heroboxlinked}>
        <p>Mediums Prompts</p>
          <Image className={styles.actualimage} 
          src={mediums}
          alt="Mediums"
          width="200"
          height='200'
          />
        </div>
        <div className={styles.heroboxlinked}>
        <p>Palettes Prompts</p>
          <Image className={styles.actualimage}
          src={palettes}
          alt="Palettes"
          width='200'
          height='200'
          />
        </div>
        <div className={styles.heroboxlinked}>
        <p>Perspectives Prompts</p>
          <Image className={styles.actualimage}
          src={perspectives}
          alt="Perspectives"
          width='200'
          height='200'
          />
        </div>
        <div className={styles.heroboxlinked}>
        <p>Style-Related Prompts</p>
          <Image className={styles.actualimage}
          src={stylesimg}
          alt="Styles"
          width='200'
          height='200'
          />
        </div>
        <div className={styles.heroboxlinked}>
        <p>Theme-Related Prompts</p>
          <Image className={styles.actualimage}
          src={themes}
          alt="Themes"
          width='200'
          height='200'
          />
        </div>
      </div>
      </div>
      <div className={styles.spacer}></div>
    </div>
  )
}