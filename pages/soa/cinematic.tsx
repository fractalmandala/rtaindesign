import Link from 'next/link'
import Soahead from '../../components/soaheader'
import Soafooter from '../../components/soafooter'
import styles from '../../components/modules/soa.module.css'
import Image from 'next/image'
import awardwinning from '../../public/soaimages/cinema/Award_Winning_Photography.png'
import cinematic from '../../public/soaimages/cinema/Cinematic.png'
import depth from '../../public/soaimages/cinema/Depth.png'
import dramatic from '../../public/soaimages/cinema/Dramatic.png'
import f28 from '../../public/soaimages/cinema/F2_8.png'
import f22 from '../../public/soaimages/cinema/F22.png'
import focalpoint from '../../public/soaimages/cinema/Focal_Point.png'
import gamma from '../../public/soaimages/cinema/Gamma.png'
import macro from '../../public/soaimages/cinema/Macro.png'
import panorama from '../../public/soaimages/cinema/Panorama.png'
import photography from '../../public/soaimages/cinema/Photography.png'
import satellite from '../../public/soaimages/cinema/Satellite_Imagery.png'
import scene from '../../public/soaimages/cinema/Scene.png'
import shoton28mm from '../../public/soaimages/cinema/Shot_on_28mm.png'
import shoton35mm from '../../public/soaimages/cinema/Shot_on_35mm.png'
import splittoning from '../../public/soaimages/cinema/Split_Toning.png'
import timelapse from '../../public/soaimages/cinema/Time_Lapse.png'
import vantagepoint from '../../public/soaimages/cinema/Vantage_Point.png'
import vignette from '../../public/soaimages/cinema/Vignette.png'
import warphoto from '../../public/soaimages/cinema/War_Photography.png'
import wideangle from '../../public/soaimages/cinema/Wide_Angle.png'

export default function Cinematic() {
  return (
    <div className={styles.soacontainer}>
      <Soahead></Soahead>
      <div className={styles.spacer}></div>
      <div className={styles.imagescontainer}>
        <h4>Cinematic Prompt Words</h4>
        <p>Use these words/phrases exactly as they are given, in your prompts</p>
        <div className={styles.theliner}></div>
        <div className={styles.rowline}>
        <div className={styles.heroboxinner}>
        <p>award winning photography</p>
          <Image className={styles.innerimage}
          src={awardwinning}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>cinematic</p>
          <Image className={styles.innerimage}
          src={cinematic}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>depth</p>
          <Image className={styles.innerimage}
          src={depth}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>dramatic</p>
          <Image className={styles.innerimage}
          src={dramatic}
          alt=""
          width='300'
          height='300'
          />
        </div>
        </div>
        <div className={styles.rowline}>
        <div className={styles.heroboxinner}>
        <p>F2.8</p>
          <Image className={styles.innerimage}
          src={f28}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>F.22</p>
          <Image className={styles.innerimage}
          src={f22}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Focal Point</p>
          <Image className={styles.innerimage}
          src={focalpoint}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Gamma</p>
          <Image className={styles.innerimage}
          src={gamma}
          alt=""
          width='300'
          height='300'
          />
        </div>
        </div>
        <div className={styles.rowline}>
        <div className={styles.heroboxinner}>
        <p>Macro</p>
          <Image className={styles.innerimage}
          src={macro}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Panorama</p>
          <Image className={styles.innerimage}
          src={panorama}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Photography</p>
          <Image className={styles.innerimage}
          src={photography}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Satellite Imagery</p>
          <Image className={styles.innerimage}
          src={satellite}
          alt=""
          width='300'
          height='300'
          />
        </div>
        </div>
        <div className={styles.rowline}>
        <div className={styles.heroboxinner}>
        <p>Scene</p>
          <Image className={styles.innerimage}
          src={scene}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Shot on 28mm</p>
          <Image className={styles.innerimage}
          src={shoton28mm}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Shot on 35mm</p>
          <Image className={styles.innerimage}
          src={shoton35mm}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Split Toning</p>
          <Image className={styles.innerimage}
          src={splittoning}
          alt=""
          width='300'
          height='300'
          />
        </div>
        </div>
        <div className={styles.rowline}>
        <div className={styles.heroboxinner}>
        <p>Time Lapse</p>
          <Image className={styles.innerimage}
          src={timelapse}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Vantage Point</p>
          <Image className={styles.innerimage}
          src={vantagepoint}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Vignette</p>
          <Image className={styles.innerimage}
          src={vignette}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>War Photography</p>
          <Image className={styles.innerimage}
          src={warphoto}
          alt=""
          width='300'
          height='300'
          />
        </div>
        </div>
        <div className={styles.rowline}>
        <div className={styles.heroboxinner}>
        <p>Wide Angle</p>
          <Image className={styles.innerimage}
          src={wideangle}
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