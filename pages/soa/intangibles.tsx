import Link from 'next/link'
import Soahead from '../../components/soaheader'
import styles from '../../components/modules/soa.module.css'
import Image from 'next/image'

import benevolent from '../../public/soaimages/intangibles/Benevolent.png'
import bleak from '../../public/soaimages/intangibles/Bleak.png'
import cheerful from '../../public/soaimages/intangibles/Cheerful.png'
import corrupted from '../../public/soaimages/intangibles/Corrupted.png'
import dangerous from '../../public/soaimages/intangibles/Dangerous.png'
import depressing from '../../public/soaimages/intangibles/Depressing.png'
import displace from '../../public/soaimages/intangibles/Displace.png'
import esoteric from '../../public/soaimages/intangibles/Esoteric.png'
import essence from '../../public/soaimages/intangibles/Essence.png'
import evocative from '../../public/soaimages/intangibles/Evocative.png'
import extended from '../../public/soaimages/intangibles/Extended.png'
import infused from '../../public/soaimages/intangibles/Infused.png'
import intelligent from '../../public/soaimages/intangibles/Intelligent.png'
import lonely from '../../public/soaimages/intangibles/Lonely.png'
import manila from '../../public/soaimages/intangibles/Manila.png'
import medium from '../../public/soaimages/intangibles/Medium.png'
import Painted_by_Leandrew_Bengolstein from '../../public/soaimages/intangibles/Painted_by_Leandrew_Bengolstein.png'
import paradox from '../../public/soaimages/intangibles/Paradox.png'
import pythagorastree from '../../public/soaimages/intangibles/Pythagoras_Tree.png'
import soulful from '../../public/soaimages/intangibles/Soulful.png'
import vast from '../../public/soaimages/intangibles/Vast.png'
import voidt from '../../public/soaimages/intangibles/Void.png'

export default function Intangibles() {
  return (
    <div className={styles.soacontainer}>
      <Soahead></Soahead>
      <div className={styles.spacer}></div>
      <div className={styles.imagescontainer}>
        <h4>intangible Prompt Words</h4>
        <p>Use these words/phrases exactly as they are given, in your prompts</p>
        <div className={styles.theliner}></div>
        <div className={styles.rowline}>
        <div className={styles.heroboxinner}>
        <p>Benevolent</p>
          <Image className={styles.innerimage}
          src={benevolent}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Bleak</p>
          <Image className={styles.innerimage}
          src={bleak}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Cheerful</p>
          <Image className={styles.innerimage}
          src={cheerful}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Corrupted</p>
          <Image className={styles.innerimage}
          src={corrupted}
          alt=""
          width='300'
          height='300'
          />
        </div>
        </div>
        <div className={styles.rowline}>
        <div className={styles.heroboxinner}>
        <p>Dangerous</p>
          <Image className={styles.innerimage}
          src={dangerous}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Depressing</p>
          <Image className={styles.innerimage}
          src={depressing}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Displace</p>
          <Image className={styles.innerimage}
          src={displace}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Esoteric</p>
          <Image className={styles.innerimage}
          src={esoteric}
          alt=""
          width='300'
          height='300'
          />
        </div>
        </div>
        <div className={styles.rowline}>
        <div className={styles.heroboxinner}>
        <p>Essence</p>
          <Image className={styles.innerimage}
          src={essence}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Evocative</p>
          <Image className={styles.innerimage}
          src={evocative}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Extended</p>
          <Image className={styles.innerimage}
          src={extended}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Infused</p>
          <Image className={styles.innerimage}
          src={infused}
          alt=""
          width='300'
          height='300'
          />
        </div>
        </div>
        <div className={styles.rowline}>
        <div className={styles.heroboxinner}>
        <p>Intelligent</p>
          <Image className={styles.innerimage}
          src={intelligent}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Lonely</p>
          <Image className={styles.innerimage}
          src={lonely}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Manila</p>
          <Image className={styles.innerimage}
          src={manila}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Medium</p>
          <Image className={styles.innerimage}
          src={medium}
          alt=""
          width='300'
          height='300'
          />
        </div>
        </div>
        <div className={styles.rowline}>
        <div className={styles.heroboxinner}>
        <p>Painted by Leandrew Bengolstein</p>
          <Image className={styles.innerimage}
          src={Painted_by_Leandrew_Bengolstein}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Paradox</p>
          <Image className={styles.innerimage}
          src={paradox}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Pythagoras Tree</p>
          <Image className={styles.innerimage}
          src={pythagorastree}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Soulful</p>
          <Image className={styles.innerimage}
          src={soulful}
          alt=""
          width='300'
          height='300'
          />
        </div>
        </div>
        <div className={styles.rowline}>
        <div className={styles.heroboxinner}>
        <p>Vast</p>
          <Image className={styles.innerimage}
          src={vast}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Void</p>
          <Image className={styles.innerimage}
          src={voidt}
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