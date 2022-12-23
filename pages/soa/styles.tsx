import Link from 'next/link'
import Soahead from '../../components/soaheader'
import styles from '../../components/modules/soa.module.css'
import Image from 'next/image'

import biomorphic from '../../public/soaimages/styles/art_style/Biomorphic.png'
import classical from '../../public/soaimages/styles/art_style/Classical.png'
import classicism from '../../public/soaimages/styles/art_style/Classicism.png'
import epiccomposition from '../../public/soaimages/styles/art_style/Epic_Composition.png'
import idyllic from '../../public/soaimages/styles/art_style/Idyllic.png'
import impressionism from '../../public/soaimages/styles/art_style/Impressionism.png'
import lofi from '../../public/soaimages/styles/art_style/Lo_fi.png'
import naturalism from '../../public/soaimages/styles/art_style/Naturalism.png'
import orientalism from '../../public/soaimages/styles/art_style/Orientalism.png'
import ornamental from '../../public/soaimages/styles/art_style/Ornamental.png'
import postimpressionism from '../../public/soaimages/styles/art_style/Post-Impressionism.png'
import sumatraism from '../../public/soaimages/styles/art_style/Sumatraism.png'
import tonalism from '../../public/soaimages/styles/art_style/Tonalism.png'
import tubism from '../../public/soaimages/styles/art_style/Tubism.png'

import appeal from '../../public/soaimages/styles/elegance_appeal/Appeal.png'
import elegance from '../../public/soaimages/styles/elegance_appeal/Elegance.png'
import elegant from '../../public/soaimages/styles/elegance_appeal/Elegant.png'
import highquality from '../../public/soaimages/styles/elegance_appeal/High_Quality.png'
import lowquality from '../../public/soaimages/styles/elegance_appeal/Low_Quality.png'
import luxe from '../../public/soaimages/styles/elegance_appeal/Luxe.png'
import luxurious from '../../public/soaimages/styles/elegance_appeal/Luxurious.png'
import luxury from '../../public/soaimages/styles/elegance_appeal/Luxury.png'
import marvelous from '../../public/soaimages/styles/elegance_appeal/Marvelous.png'
import ultraquality from '../../public/soaimages/styles/elegance_appeal/Ultra_Quality.png'

import chaotic from '../../public/soaimages/styles/simple_complex/Chaotic.png'
import complex from '../../public/soaimages/styles/simple_complex/Complex.png'
import detailed from '../../public/soaimages/styles/simple_complex/Detailed.png'
import details from '../../public/soaimages/styles/simple_complex/Details.png'
import flat from '../../public/soaimages/styles/simple_complex/Flat.png'
import hyperdetailed from '../../public/soaimages/styles/simple_complex/Hyperdetailed.png'
import intricatemaximalism from '../../public/soaimages/styles/simple_complex/Intricate_Maximalism.png'
import intricate from '../../public/soaimages/styles/simple_complex/Intricate.png'
import maximalist from '../../public/soaimages/styles/simple_complex/Maximalist.png'
import ornate from '../../public/soaimages/styles/simple_complex/Ornate.png'
import simplicity from '../../public/soaimages/styles/simple_complex/Simplicity.png'

import artifact from '../../public/soaimages/styles/stylized/Artifact.png'
import calico from '../../public/soaimages/styles/stylized/Calico.png'
import photobash from '../../public/soaimages/styles/stylized/Photobash.png'
import podoserpula from '../../public/soaimages/styles/stylized/Podoserpula-Miranda.png'

export default function Styles() {
  return (
    <div className={styles.soacontainer}>
      <Soahead></Soahead>
      <div className={styles.spacer}></div>
      <div className={styles.imagescontainer}>
        <h4>Prompt Words for Styles</h4>
        <p>Use these words/phrases exactly as they are given, in your prompts</p>
        <div className={styles.theliner22}>
          <div className={styles.heading5}><Link href="#artstyle">Art Style</Link></div>
          <div className={styles.heading5}><Link href="#stylized">Stylized</Link></div>
          <div className={styles.heading5}><Link href="#simpler">Simple/Complex</Link></div>
          <div className={styles.heading5}><Link href="#elegance">Elegance/Appeal</Link></div>
        </div>
        <div className={styles.subtitle} id="artstyle">Art Style</div>
        <div className={styles.rowline}>
        <div className={styles.heroboxinner}>
        <p>Biomorphic</p>
          <Image className={styles.innerimage}
          src={biomorphic}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Classical</p>
          <Image className={styles.innerimage}
          src={classical}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Epic Composition</p>
          <Image className={styles.innerimage}
          src={epiccomposition}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Idyllic</p>
          <Image className={styles.innerimage}
          src={idyllic}
          alt=""
          width='300'
          height='300'
          />
        </div>
        </div>
        <div className={styles.rowline}>
        <div className={styles.heroboxinner}>
        <p>Impressionism</p>
          <Image className={styles.innerimage}
          src={impressionism}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Lo fi</p>
          <Image className={styles.innerimage}
          src={lofi}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Naturalism</p>
          <Image className={styles.innerimage}
          src={naturalism}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Orientalism</p>
          <Image className={styles.innerimage}
          src={orientalism}
          alt=""
          width='300'
          height='300'
          />
        </div>
        </div>
        <div className={styles.rowline}>
        <div className={styles.heroboxinner}>
        <p>Ornamental</p>
          <Image className={styles.innerimage}
          src={ornamental}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Post Impressionism</p>
          <Image className={styles.innerimage}
          src={postimpressionism}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Sumatraism</p>
          <Image className={styles.innerimage}
          src={sumatraism}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Tonalism</p>
          <Image className={styles.innerimage}
          src={tonalism}
          alt=""
          width='300'
          height='300'
          />
        </div>
        </div>
        <div className={styles.rowline}>
        <div className={styles.heroboxinner}>
        <p>Tubism</p>
          <Image className={styles.innerimage}
          src={tubism}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Classicism</p>
          <Image className={styles.innerimage}
          src={classicism}
          alt=""
          width='300'
          height='300'
          />
        </div>
        </div>
        <div className={styles.subtitle} id="elegance">Elegance/Appeal</div>
        <div className={styles.rowline}>
        <div className={styles.heroboxinner}>
        <p>Appeal</p>
          <Image className={styles.innerimage}
          src={appeal}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Elegance</p>
          <Image className={styles.innerimage}
          src={elegance}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Elegant</p>
          <Image className={styles.innerimage}
          src={elegant}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>High Quality</p>
          <Image className={styles.innerimage}
          src={highquality}
          alt=""
          width='300'
          height='300'
          />
        </div>
        </div>
        <div className={styles.rowline}>
        <div className={styles.heroboxinner}>
        <p>Low Quality</p>
          <Image className={styles.innerimage}
          src={lowquality}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Luxe</p>
          <Image className={styles.innerimage}
          src={luxe}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Luxurious</p>
          <Image className={styles.innerimage}
          src={luxurious}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Luxury</p>
          <Image className={styles.innerimage}
          src={luxury}
          alt=""
          width='300'
          height='300'
          />
        </div>
        </div>
        <div className={styles.rowline}>
        <div className={styles.heroboxinner}>
        <p>Marvelous</p>
          <Image className={styles.innerimage}
          src={marvelous}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Ultra Quality</p>
          <Image className={styles.innerimage}
          src={ultraquality}
          alt=""
          width='300'
          height='300'
          />
        </div>
        </div>
        <div className={styles.subtitle} id="simpler">Simple/Complex</div>
        <div className={styles.rowline}>
        <div className={styles.heroboxinner}>
        <p>Chaotic</p>
          <Image className={styles.innerimage}
          src={chaotic}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Complex</p>
          <Image className={styles.innerimage}
          src={complex}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Detailed</p>
          <Image className={styles.innerimage}
          src={detailed}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Details</p>
          <Image className={styles.innerimage}
          src={details}
          alt=""
          width='300'
          height='300'
          />
        </div>
        </div>
        <div className={styles.rowline}>
        <div className={styles.heroboxinner}>
        <p>Flat</p>
          <Image className={styles.innerimage}
          src={flat}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Hyperdetailed</p>
          <Image className={styles.innerimage}
          src={hyperdetailed}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Intricate Maximalism</p>
          <Image className={styles.innerimage}
          src={intricatemaximalism}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Intricate</p>
          <Image className={styles.innerimage}
          src={intricate}
          alt=""
          width='300'
          height='300'
          />
        </div>
        </div>
        <div className={styles.rowline}>
        <div className={styles.heroboxinner}>
        <p>Maximalist</p>
          <Image className={styles.innerimage}
          src={maximalist}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Ornate</p>
          <Image className={styles.innerimage}
          src={ornate}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Simplicity</p>
          <Image className={styles.innerimage}
          src={simplicity}
          alt=""
          width='300'
          height='300'
          />
        </div>
        </div>
        <div className={styles.subtitle} id="stylized">Stylized</div>
        <div className={styles.rowline}>
        <div className={styles.heroboxinner}>
        <p>Artifact</p>
          <Image className={styles.innerimage}
          src={artifact}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Calico</p>
          <Image className={styles.innerimage}
          src={calico}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Photobash</p>
          <Image className={styles.innerimage}
          src={photobash}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Podoserpula Miranda</p>
          <Image className={styles.innerimage}
          src={podoserpula}
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