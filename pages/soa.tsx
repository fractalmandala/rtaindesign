import Link from 'next/link'
import Soahead from '../components/soaheader'
import styles from '../components/modules/soa.module.css'
import Image from 'next/image'
import Indian_Realism from '../soa/images/Indian_Realism.png'
import Indian_Style from '../soa/images/Indian_Style.png'
import StoneKing from '../soa/images/StoneKing.png'
import Lady from '../soa/images/Lady.png'
import primalrishi from '../soa/images/primalrishi.webp'
import cinema from '../soa/images/cinema.png'
import digital from '../soa/images/digital.png'
import intangibles from '../soa/images/intangibles.png'
import lighting from '../soa/images/lighting.png'
import materials from '../soa/images/materials.png'
import mediums from '../soa/images/mediums.png'
import palettes from '../soa/images/palettes.png'
import perspectives from '../soa/images/perspectives.png'
import stylesimg from '../soa/images/styles.png'
import themes from '../soa/images/themes.png'



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
          <p>Cinematic Prompts</p>
          <Image className={styles.actualimage} 
          src={cinema}
          alt="Cinema"
          width="200"
          height='200'
          />
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