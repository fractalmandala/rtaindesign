import Link from 'next/link'
import Soahead from '../../components/soaheader'
import styles from '../../components/modules/soa.module.css'
import Image from 'next/image'

import blenderrender from '../../public/soaimages/digital/Blender_Render.png'
import cinema4D from '../../public/soaimages/digital/Cinema4D.png'
import cyclesrender from '../../public/soaimages/digital/Cycles_Render.png'
import houdini from '../../public/soaimages/digital/Houdini_Render.png'
import infini from '../../public/soaimages/digital/Infini_D_Render.png'
import mentalray from '../../public/soaimages/digital/MentalRay_Render.png'
import octane from '../../public/soaimages/digital/Octane.png'
import optix from '../../public/soaimages/digital/OptiX_Render.png'
import povray from '../../public/soaimages/digital/Povray.png'
import sketchfab from '../../public/soaimages/digital/Sketchfab.png'
import terragen from '../../public/soaimages/digital/Terragen.png'
import unityengine from '../../public/soaimages/digital/Unity_Engine.png'
import unrealengine from '../../public/soaimages/digital/Unreal_Engine.png'
import zbrush from '../../public/soaimages/digital/Zbrush.png'

export default function Digital() {
  return (
    <div className={styles.soacontainer}>
      <Soahead></Soahead>
      <div className={styles.spacer}></div>
      <div className={styles.imagescontainer}>
        <h4>Digital Prompt Words</h4>
        <p>Use these words/phrases exactly as they are given, in your prompts</p>
        <div className={styles.theliner}></div>
        <div className={styles.rowline}>
        <div className={styles.heroboxinner}>
        <p>blender render</p>
          <Image className={styles.innerimage}
          src={blenderrender}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>cinema4d</p>
          <Image className={styles.innerimage}
          src={cinema4D}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Cycles Render</p>
          <Image className={styles.innerimage}
          src={cyclesrender}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Houdini Render</p>
          <Image className={styles.innerimage}
          src={houdini}
          alt=""
          width='300'
          height='300'
          />
        </div>
        </div>
        <div className={styles.rowline}>
        <div className={styles.heroboxinner}>
        <p>Infini D Render</p>
          <Image className={styles.innerimage}
          src={infini}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>MentalRay Render</p>
          <Image className={styles.innerimage}
          src={mentalray}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>octane</p>
          <Image className={styles.innerimage}
          src={octane}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>OptiX Render</p>
          <Image className={styles.innerimage}
          src={optix}
          alt=""
          width='300'
          height='300'
          />
        </div>
        </div>
        <div className={styles.rowline}>
        <div className={styles.heroboxinner}>
        <p>POVRay</p>
          <Image className={styles.innerimage}
          src={povray}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Sketchfab</p>
          <Image className={styles.innerimage}
          src={sketchfab}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>terragen</p>
          <Image className={styles.innerimage}
          src={terragen}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Unity Engine</p>
          <Image className={styles.innerimage}
          src={unityengine}
          alt=""
          width='300'
          height='300'
          />
        </div>
        </div>
        <div className={styles.rowline}>
        <div className={styles.heroboxinner}>
        <p>Unreal Engine</p>
          <Image className={styles.innerimage}
          src={unrealengine}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Zbrush</p>
          <Image className={styles.innerimage}
          src={zbrush}
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