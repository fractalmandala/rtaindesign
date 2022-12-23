import Link from 'next/link'
import Soahead from '../../components/soaheader'
import styles from '../../components/modules/soa.module.css'
import Image from 'next/image'
import Soafooter from '../../components/soafooter'
import blinding from '../../public/soaimages/lighting/Blinding_Light.png'
import cropped from '../../public/soaimages/lighting/Cropped.png'
import darklighting from '../../public/soaimages/lighting/Dark_Lighting.png'
import dim from '../../public/soaimages/lighting/Dim.png'
import emboss from '../../public/soaimages/lighting/Emboss.png'
import flickeringlight from '../../public/soaimages/lighting/Flickering_Light.png'
import floodlight from '../../public/soaimages/lighting/Floodlight.png'
import frontlight from '../../public/soaimages/lighting/Frontlight.png'
import lumen from '../../public/soaimages/lighting/Lumen_Reflections.png'
import marquee from '../../public/soaimages/lighting/Marquee.png'
import moody from '../../public/soaimages/lighting/Moody_Lighting.png'
import moonbeams from '../../public/soaimages/lighting/Moonbeams.png'
import natural from '../../public/soaimages/lighting/Natural_Lighting.png'
import parallax from '../../public/soaimages/lighting/Parallax.png'
import postproduction from '../../public/soaimages/lighting/Post_Production.png'
import reflection from '../../public/soaimages/lighting/Reflection_in_a_puddle.png'
import rtx from '../../public/soaimages/lighting/RTX.png'
import sharpened from '../../public/soaimages/lighting/Sharpened.png'
import spotlight from '../../public/soaimages/lighting/Spotlight.png'
import volumetric from '../../public/soaimages/lighting/Volumetric.png'
import waterreflection from '../../public/soaimages/lighting/Water_Reflection.png'

export default function lighting() {
  return (
    <div className={styles.soacontainer}>
      <Soahead></Soahead>
      <div className={styles.spacer}></div>
      <div className={styles.imagescontainer}>
        <h4>Lighting-related Prompt Words</h4>
        <p>Use these words/phrases exactly as they are given, in your prompts</p>
        <div className={styles.theliner}></div>
        <div className={styles.rowline}>
        <div className={styles.heroboxinner}>
        <p>Blinding Light</p>
          <Image className={styles.innerimage}
          src={blinding}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Cropped</p>
          <Image className={styles.innerimage}
          src={cropped}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Dark Lighting</p>
          <Image className={styles.innerimage}
          src={darklighting}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Dim</p>
          <Image className={styles.innerimage}
          src={dim}
          alt=""
          width='300'
          height='300'
          />
        </div>
        </div>
        <div className={styles.rowline}>
        <div className={styles.heroboxinner}>
        <p>Emboss</p>
          <Image className={styles.innerimage}
          src={emboss}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Flickering Light</p>
          <Image className={styles.innerimage}
          src={flickeringlight}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Floodlight</p>
          <Image className={styles.innerimage}
          src={floodlight}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Frontlight</p>
          <Image className={styles.innerimage}
          src={frontlight}
          alt=""
          width='300'
          height='300'
          />
        </div>
        </div>
        <div className={styles.rowline}>
        <div className={styles.heroboxinner}>
        <p>Lumen Reflections</p>
          <Image className={styles.innerimage}
          src={lumen}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Marquee</p>
          <Image className={styles.innerimage}
          src={marquee}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Moody Lighting</p>
          <Image className={styles.innerimage}
          src={moody}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Moonbeams</p>
          <Image className={styles.innerimage}
          src={moonbeams}
          alt=""
          width='300'
          height='300'
          />
        </div>
        </div>
        <div className={styles.rowline}>
        <div className={styles.heroboxinner}>
        <p>Natural Lighting</p>
          <Image className={styles.innerimage}
          src={natural}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Parallax</p>
          <Image className={styles.innerimage}
          src={parallax}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Post Production</p>
          <Image className={styles.innerimage}
          src={postproduction}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Reflection in a Puddle</p>
          <Image className={styles.innerimage}
          src={reflection}
          alt=""
          width='300'
          height='300'
          />
        </div>
        </div>
        <div className={styles.rowline}>
        <div className={styles.heroboxinner}>
        <p>RTX</p>
          <Image className={styles.innerimage}
          src={rtx}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Sharpened</p>
          <Image className={styles.innerimage}
          src={sharpened}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Spotlight</p>
          <Image className={styles.innerimage}
          src={spotlight}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Volumetric</p>
          <Image className={styles.innerimage}
          src={volumetric}
          alt=""
          width='300'
          height='300'
          />
        </div>
        </div>
        <div className={styles.rowline}>
        <div className={styles.heroboxinner}>
        <p>Water Reflection</p>
          <Image className={styles.innerimage}
          src={waterreflection}
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
      <Soafooter></Soafooter>
    </div>
  )
}