import Link from 'next/link'
import Soahead from '../../components/soaheader'
import styles from '../../components/modules/soa.module.css'
import Image from 'next/image'
import Soafooter from '../../components/soafooter'
import canvas from '../../public/soaimages/mediums/Canvas.png'
import cartographic from '../../public/soaimages/mediums/Cartographic.png'
import carving from '../../public/soaimages/mediums/Carving.png'
import caveart from '../../public/soaimages/mediums/Cave_Art.png'
import charcoal from '../../public/soaimages/mediums/Charcoal_Art.png'
import concept from '../../public/soaimages/mediums/Concept_Art.png'
import detailed from '../../public/soaimages/mediums/Detailed_Painting.png'
import drawing from '../../public/soaimages/mediums/Drawing.png'
import graphicnovel from '../../public/soaimages/mediums/Graphic_Novel.png'
import graphite from '../../public/soaimages/mediums/Graphite.png'
import handdrawn from '../../public/soaimages/mediums/Hand_Drawn.png'
import illustration from '../../public/soaimages/mediums/Illustration.png'
import indiaink from '../../public/soaimages/mediums/India_Ink.png'
import masterpiece from '../../public/soaimages/mediums/Masterpiece.png'
import matte from '../../public/soaimages/mediums/Matte_Painting.png'
import neolithic from '../../public/soaimages/mediums/Neolithic_Pottery.png'
import painting from '../../public/soaimages/mediums/Painting.png'
import paleolithic from '../../public/soaimages/mediums/Paleolithic_Pottery.png'
import reliefcarving from '../../public/soaimages/mediums/Relief_Carving.png'
import sculpture from '../../public/soaimages/mediums/Sculpture.png'
import sketch from '../../public/soaimages/mediums/Sketch.png'
import visualnovel from '../../public/soaimages/mediums/Visual_Novel.png'
import woodcarving from '../../public/soaimages/mediums/Wood_Carving.png'


export default function Mediums() {
  return (
    <div className={styles.soacontainer}>
      <Soahead></Soahead>
      <div className={styles.spacer}></div>
      <div className={styles.imagescontainer}>
        <h4>Mediums-related Prompt Words</h4>
        <p>Use these words/phrases exactly as they are given, in your prompts</p>
        <div className={styles.theliner}></div>
        <div className={styles.rowline}>
        <div className={styles.heroboxinner}>
        <p>Canvas</p>
          <Image className={styles.innerimage}
          src={canvas}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Cartographic</p>
          <Image className={styles.innerimage}
          src={cartographic}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Carving</p>
          <Image className={styles.innerimage}
          src={carving}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Cave Art</p>
          <Image className={styles.innerimage}
          src={caveart}
          alt=""
          width='300'
          height='300'
          />
        </div>
        </div>
        <div className={styles.rowline}>
        <div className={styles.heroboxinner}>
        <p>Charcoal Art</p>
          <Image className={styles.innerimage}
          src={charcoal}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Concept Art</p>
          <Image className={styles.innerimage}
          src={concept}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Detailed Painting</p>
          <Image className={styles.innerimage}
          src={detailed}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Drawing</p>
          <Image className={styles.innerimage}
          src={drawing}
          alt=""
          width='300'
          height='300'
          />
        </div>
        </div>
        <div className={styles.rowline}>
        <div className={styles.heroboxinner}>
        <p>Graphic Novel</p>
          <Image className={styles.innerimage}
          src={graphicnovel}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Graphite</p>
          <Image className={styles.innerimage}
          src={graphite}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Hand Drawn</p>
          <Image className={styles.innerimage}
          src={handdrawn}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Illustration</p>
          <Image className={styles.innerimage}
          src={illustration}
          alt=""
          width='300'
          height='300'
          />
        </div>
        </div>
        <div className={styles.rowline}>
        <div className={styles.heroboxinner}>
        <p>India Ink</p>
          <Image className={styles.innerimage}
          src={indiaink}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Masterpiece</p>
          <Image className={styles.innerimage}
          src={masterpiece}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Matte Painting</p>
          <Image className={styles.innerimage}
          src={matte}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Neolithic Pottery</p>
          <Image className={styles.innerimage}
          src={neolithic}
          alt=""
          width='300'
          height='300'
          />
        </div>
        </div>
        <div className={styles.rowline}>
        <div className={styles.heroboxinner}>
        <p>Painting</p>
          <Image className={styles.innerimage}
          src={painting}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Paleolithic Pottery</p>
          <Image className={styles.innerimage}
          src={paleolithic}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Relief Carving</p>
          <Image className={styles.innerimage}
          src={reliefcarving}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Sculpture</p>
          <Image className={styles.innerimage}
          src={sculpture}
          alt=""
          width='300'
          height='300'
          />
        </div>
        </div>
        <div className={styles.rowline}>
        <div className={styles.heroboxinner}>
        <p>Sketch</p>
          <Image className={styles.innerimage}
          src={sketch}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Visual Novel</p>
          <Image className={styles.innerimage}
          src={visualnovel}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={styles.heroboxinner}>
        <p>Wood Carving</p>
          <Image className={styles.innerimage}
          src={woodcarving}
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