import Link from 'next/link'
import Soahead from '../../components/soaheader'
import themes from '../../components/modules/soa.module.css'
import Image from 'next/image'

import architecture from '../../public/soaimages/themes/architecture/Architecture.png'
import balinese from '../../public/soaimages/themes/architecture/Balinese_Architecture.png'
import bronzepunk from '../../public/soaimages/themes/architecture/Bronzepunk.png'
import cityscape from '../../public/soaimages/themes/architecture/Cityscape.png'
import clockpunk from '../../public/soaimages/themes/architecture/Clockpunk.png'
import dieselpunk from '../../public/soaimages/themes/architecture/Dieselpunk.png'
import manufactured from '../../public/soaimages/themes/architecture/Manufactured.png'
import sandalpunk from '../../public/soaimages/themes/architecture/Sandalpunk.png'
import sanriocore from '../../public/soaimages/themes/architecture/Sanriocore.png'
import steampunk from '../../public/soaimages/themes/architecture/Steampunk.png'
import steelpunk from '../../public/soaimages/themes/architecture/Steelpunk.png'
import structural from '../../public/soaimages/themes/architecture/Structural.png'
import swordpunk from '../../public/soaimages/themes/architecture/Swordpunk.png'

import biome from '../../public/soaimages/themes/landscapes/Biome.png'
import canyon from '../../public/soaimages/themes/landscapes/Canyon.png'
import coniferous from '../../public/soaimages/themes/landscapes/Coniferous_Forest.png'
import deciduous from '../../public/soaimages/themes/landscapes/Deciduous_Forest.png'
import desert from '../../public/soaimages/themes/landscapes/Desert.png'
import desertwave from '../../public/soaimages/themes/landscapes/Desertwave.png'
import dunes from '../../public/soaimages/themes/landscapes/Dunes.png'
import estuary from '../../public/soaimages/themes/landscapes/Estuary.png'
import floodplain from '../../public/soaimages/themes/landscapes/Floodplain.png'
import glacier from '../../public/soaimages/themes/landscapes/Glacier.png'
import grove from '../../public/soaimages/themes/landscapes/Grove.png'
import jungle from '../../public/soaimages/themes/landscapes/Jungle.png'
import junglecore from '../../public/soaimages/themes/landscapes/Junglecore.png'
import lake from '../../public/soaimages/themes/landscapes/Lake.png'
import landscape from '../../public/soaimages/themes/landscapes/Landscape.png'
import mountains from '../../public/soaimages/themes/landscapes/Mountains.png'
import orchard from '../../public/soaimages/themes/landscapes/Orchard.png'
import plains from '../../public/soaimages/themes/landscapes/Plains.png'
import river from '../../public/soaimages/themes/landscapes/River.png'
import scrubland from '../../public/soaimages/themes/landscapes/Scrubland.png'
import setting from '../../public/soaimages/themes/landscapes/Setting.png'
import shrubland from '../../public/soaimages/themes/landscapes/Shrubland.png'
import surroundings from '../../public/soaimages/themes/landscapes/Surroundings.png'
import thicket from '../../public/soaimages/themes/landscapes/Thicket.png'
import tundra from '../../public/soaimages/themes/landscapes/Tundra.png'
import valley from '../../public/soaimages/themes/landscapes/Valley.png'
import woodland from '../../public/soaimages/themes/landscapes/Woodland.png'

import anthropomorphic from '../../public/soaimages/themes/nature/Anthropomorphic.png'
import atmosphere from '../../public/soaimages/themes/nature/Atmosphere.png'
import biopunk from '../../public/soaimages/themes/nature/Biopunk.png'
import earthcore from '../../public/soaimages/themes/nature/Earthcore.png'
import environment from '../../public/soaimages/themes/nature/Environment.png'
import flowercore from '../../public/soaimages/themes/nature/Flowercore.png'
import frostpunk from '../../public/soaimages/themes/nature/Frostpunk.png'
import groundcore from '../../public/soaimages/themes/nature/Groundcore.png'
import mosscore from '../../public/soaimages/themes/nature/Mosscore.png'
import naturesx from '../../public/soaimages/themes/nature/Nature.png'
import naturecore from '../../public/soaimages/themes/nature/Naturecore.png'
import paleocore from '../../public/soaimages/themes/nature/Paleocore.png'

import antimatter from '../../public/soaimages/themes/outer_space/Antimatter.png'
import celestial from '../../public/soaimages/themes/outer_space/Celestial.png'
import constellation from '../../public/soaimages/themes/outer_space/Constellation.png'
import cosmic from '../../public/soaimages/themes/outer_space/Cosmic.png'
import darkmatter from '../../public/soaimages/themes/outer_space/Dark_Matter.png'
import eclipse from '../../public/soaimages/themes/outer_space/Eclipse.png'
import galactic from '../../public/soaimages/themes/outer_space/Galactic.png'
import galaxy from '../../public/soaimages/themes/outer_space/Galaxy.png'
import hypernova from '../../public/soaimages/themes/outer_space/Hypernova.png'
import interstellarspace from '../../public/soaimages/themes/outer_space/Interstellar_Space.png'
import interstellar from '../../public/soaimages/themes/outer_space/Interstellar.png'
import lunar from '../../public/soaimages/themes/outer_space/Lunar.png'
import microquasar from '../../public/soaimages/themes/outer_space/Microquasar.png'
import nasa from '../../public/soaimages/themes/outer_space/NASA.png'
import nebula from '../../public/soaimages/themes/outer_space/Nebula.png'
import neutronstar from '../../public/soaimages/themes/outer_space/Neutron_Star.png'
import orbital from '../../public/soaimages/themes/outer_space/Orbital.png'
import outerspace from '../../public/soaimages/themes/outer_space/Outer_Space.png'
import planet from '../../public/soaimages/themes/outer_space/Planet.png'
import quasar from '../../public/soaimages/themes/outer_space/Quasar.png'
import solareclipse from '../../public/soaimages/themes/outer_space/Solar_Eclipse.png'
import spacecore from '../../public/soaimages/themes/outer_space/Spacecore.png'
import starry from '../../public/soaimages/themes/outer_space/Starry.png'
import stellarcorona from '../../public/soaimages/themes/outer_space/Stellar_Corona.png'
import stellar from '../../public/soaimages/themes/outer_space/Stellar.png'
import supernova from '../../public/soaimages/themes/outer_space/Supernova.png'
import universe from '../../public/soaimages/themes/outer_space/Universe.png'
import velapulsar from '../../public/soaimages/themes/outer_space/Vela_Pulsar.png'

import abstract from '../../public/soaimages/themes/realism/Abstract.png'
import anemoiacore from '../../public/soaimages/themes/realism/Anemoiacore.png'
import classicalrealism from '../../public/soaimages/themes/realism/Classical_Realism.png'
import contemporary from '../../public/soaimages/themes/realism/Contemporary_Realism.png'
import darkfantasy from '../../public/soaimages/themes/realism/Dark_Fantasy.png'
import daydreampunk from '../../public/soaimages/themes/realism/Daydreampunk.png'
import dejavu from '../../public/soaimages/themes/realism/Deja_vu.png'
import dreamcore from '../../public/soaimages/themes/realism/Dreamcore.png'
import dreamlike from '../../public/soaimages/themes/realism/Dreamlike.png'
import dreampunk from '../../public/soaimages/themes/realism/Dreampunk.png'
import dreamy from '../../public/soaimages/themes/realism/Dreamy.png'
import etherealfantasy from '../../public/soaimages/themes/realism/Ethereal_Fantasy.png'
import ethereal from '../../public/soaimages/themes/realism/Ethereal.png'
import fantasticrealism from '../../public/soaimages/themes/realism/Fantastic_Realism.png'
import fantasymap from '../../public/soaimages/themes/realism/Fantasy_Map.png'
import fantasy from '../../public/soaimages/themes/realism/Fantasy.png'
import feverdream from '../../public/soaimages/themes/realism/Fever_Dream.png'
import fiction from '../../public/soaimages/themes/realism/Fiction.png'
import fromanotherrealm from '../../public/soaimages/themes/realism/From_Another_Realm.png'
import hyperreal from '../../public/soaimages/themes/realism/Hyper_Real.png'
import hyperrealistic from '../../public/soaimages/themes/realism/Hyperrealistic.png'
import illusion from '../../public/soaimages/themes/realism/Illusion.png'
import imagination from '../../public/soaimages/themes/realism/Imagination.png'
import imaginative from '../../public/soaimages/themes/realism/Imaginative.png'
import imagined from '../../public/soaimages/themes/realism/Imagined.png'
import immaterial from '../../public/soaimages/themes/realism/Immaterial.png'
import impossible from '../../public/soaimages/themes/realism/Impossible.png'
import intangible from '../../public/soaimages/themes/realism/Intangible.png'
import lucid from '../../public/soaimages/themes/realism/Lucid.png'
import magicrealism from '../../public/soaimages/themes/realism/Magic_Realism.png'
import newrealism from '../../public/soaimages/themes/realism/New_Realism.png'
import nonfiction from '../../public/soaimages/themes/realism/Non_Fiction.png'
import nonsense from '../../public/soaimages/themes/realism/Nonsense.png'
import otherworldly from '../../public/soaimages/themes/realism/Otherworldly.png'
import photorealism from '../../public/soaimages/themes/realism/Photorealism.png'
import photorealistic from '../../public/soaimages/themes/realism/Photorealistic.png'
import realism from '../../public/soaimages/themes/realism/Realism.png'
import realistic from '../../public/soaimages/themes/realism/Realistic.png'
import sciencefiction from '../../public/soaimages/themes/realism/Science_Fiction.png'
import surreal from '../../public/soaimages/themes/realism/Surreal.png'
import surrealism from '../../public/soaimages/themes/realism/Surrealism.png'
import unrealistic from '../../public/soaimages/themes/realism/Unrealistic.png'
import unworldly from '../../public/soaimages/themes/realism/Unworldly.png'
import weirdcore from '../../public/soaimages/themes/realism/Weirdcore.png'
import wonderland from '../../public/soaimages/themes/realism/Wonderland.png'
import worldly from '../../public/soaimages/themes/realism/Worldly.png'

import antique from '../../public/soaimages/themes/retro_and_modern/Antique.png'
import atompunk from '../../public/soaimages/themes/retro_and_modern/Atompunk.png'
import cyberpunk from '../../public/soaimages/themes/retro_and_modern/Cyberpunk.png'
import futurism from '../../public/soaimages/themes/retro_and_modern/Futurism.png'
import futuristic from '../../public/soaimages/themes/retro_and_modern/Futuristic.png'
import historic from '../../public/soaimages/themes/retro_and_modern/Historic.png'
import iceage from '../../public/soaimages/themes/retro_and_modern/Ice_Age.png'
import modern from '../../public/soaimages/themes/retro_and_modern/Modern.png'
import modernismo from '../../public/soaimages/themes/retro_and_modern/Modernismo.png'
import nanopunk from '../../public/soaimages/themes/retro_and_modern/Nanopunk.png'
import nostalgia from '../../public/soaimages/themes/retro_and_modern/Nostalgia.png'
import nostalgiacore from '../../public/soaimages/themes/retro_and_modern/Nostalgiacore.png'
import postcyberpunk from '../../public/soaimages/themes/retro_and_modern/Postcyberpunk.png'
import prehistoric from '../../public/soaimages/themes/retro_and_modern/Pre-Historic.png'
import prehistoricore from '../../public/soaimages/themes/retro_and_modern/Prehistoricore.png'
import raypunk from '../../public/soaimages/themes/retro_and_modern/Raypunk.png'
import retro from '../../public/soaimages/themes/retro_and_modern/Retro.png'
import retrowave from '../../public/soaimages/themes/retro_and_modern/Retrowave.png'
import rococopunk from '../../public/soaimages/themes/retro_and_modern/Rococopunk.png'
import rustic from '../../public/soaimages/themes/retro_and_modern/Rustic.png'
import rusticcore from '../../public/soaimages/themes/retro_and_modern/Rusticcore.png'
import vintage from '../../public/soaimages/themes/retro_and_modern/Vintage.png'
import wildwest from '../../public/soaimages/themes/retro_and_modern/Wild_West.png'

import aetherpunk from '../../public/soaimages/themes/sci_fi/Aetherpunk.png'
import alchemy from '../../public/soaimages/themes/sci_fi/Alchemy.png'
import alien from '../../public/soaimages/themes/sci_fi/Alien.png'
import auroracore from '../../public/soaimages/themes/sci_fi/Auroracore.png'
import cypernoir from '../../public/soaimages/themes/sci_fi/Cypernoir.png'
import decopunk from '../../public/soaimages/themes/sci_fi/Decopunk.png'
import extraterrestrial from '../../public/soaimages/themes/sci_fi/Extraterrestrial.png'
import invaded from '../../public/soaimages/themes/sci_fi/Invaded.png'
import invasion from '../../public/soaimages/themes/sci_fi/Invasion.png'
import magewave from '../../public/soaimages/themes/sci_fi/Magewave.png'
import magic from '../../public/soaimages/themes/sci_fi/Magic.png'
import magical from '../../public/soaimages/themes/sci_fi/Magical.png'
import metaphysical from '../../public/soaimages/themes/sci_fi/Metaphysical.png'
import mystic from '../../public/soaimages/themes/sci_fi/Mystic.png'
import mystical from '../../public/soaimages/themes/sci_fi/Mystical.png'
import mythpunk from '../../public/soaimages/themes/sci_fi/Mythpunk.png'
import psychic from '../../public/soaimages/themes/sci_fi/Psychic.png'
import scifi from '../../public/soaimages/themes/sci_fi/Sci_fi.png'
import terrestrial from '../../public/soaimages/themes/sci_fi/Terrestrial.png'
import witchcore from '../../public/soaimages/themes/sci_fi/Witchcore.png'
import wizardcore from '../../public/soaimages/themes/sci_fi/Wizardcore.png'


export default function Themes() {
  return (
    <div className={themes.soacontainer}>
      <Soahead></Soahead>
      <div className={themes.spacer}></div>
      <div className={themes.imagescontainer}>
        <h4>Themes for Prompts</h4>
        <p>Use these words/phrases exactly as they are given, in your prompts</p>
        <div className={themes.theliner22}>
          <div className={themes.heading5}><Link href="#architecture">Architecture</Link></div>
          <div className={themes.heading5}><Link href="#landscapes">Landscapes</Link></div>
          <div className={themes.heading5}><Link href="#nature">Nature</Link></div>
          <div className={themes.heading5}><Link href="#space">Space</Link></div>
          <div className={themes.heading5}><Link href="#realism">Realism</Link></div>
          <div className={themes.heading5}><Link href="#time">Time</Link></div>
          <div className={themes.heading5}><Link href="#scifi">Sci-fi</Link></div>
        </div>
        <div className={themes.subtitle} id="architecture">Architecture</div>
        <div className={themes.rowline}>
        <div className={themes.heroboxinner}>
        <p>Architecture</p>
          <Image className={themes.innerimage}
          src={architecture}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Balinese Architecture</p>
          <Image className={themes.innerimage}
          src={balinese}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Bronzepunk</p>
          <Image className={themes.innerimage}
          src={bronzepunk}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Cityscape</p>
          <Image className={themes.innerimage}
          src={cityscape}
          alt=""
          width='300'
          height='300'
          />
        </div>
        </div>
        <div className={themes.rowline}>
        <div className={themes.heroboxinner}>
        <p>Clockpunk</p>
          <Image className={themes.innerimage}
          src={clockpunk}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Dieselpunk</p>
          <Image className={themes.innerimage}
          src={dieselpunk}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Manufactured</p>
          <Image className={themes.innerimage}
          src={manufactured}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Sandalpunk</p>
          <Image className={themes.innerimage}
          src={sandalpunk}
          alt=""
          width='300'
          height='300'
          />
        </div>
        </div>
        <div className={themes.rowline}>
        <div className={themes.heroboxinner}>
        <p>Sanriocore</p>
          <Image className={themes.innerimage}
          src={sanriocore}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Steampunk</p>
          <Image className={themes.innerimage}
          src={steampunk}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Steelpunk</p>
          <Image className={themes.innerimage}
          src={steelpunk}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Structural</p>
          <Image className={themes.innerimage}
          src={structural}
          alt=""
          width='300'
          height='300'
          />
        </div>
        </div>
        <div className={themes.rowline}>
        <div className={themes.heroboxinner}>
        <p>Swordpunk</p>
          <Image className={themes.innerimage}
          src={swordpunk}
          alt=""
          width='300'
          height='300'
          />
        </div>
        </div>
        <div className={themes.subtitle} id="landscapes">Landscapes</div>
        <div className={themes.rowline}>
        <div className={themes.heroboxinner}>
        <p>Biome</p>
          <Image className={themes.innerimage}
          src={biome}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Canyon</p>
          <Image className={themes.innerimage}
          src={canyon}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Coniferous Forest</p>
          <Image className={themes.innerimage}
          src={coniferous}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Deciduous Forest</p>
          <Image className={themes.innerimage}
          src={deciduous}
          alt=""
          width='300'
          height='300'
          />
        </div>
        </div>
        <div className={themes.rowline}>
        <div className={themes.heroboxinner}>
        <p>Desert</p>
          <Image className={themes.innerimage}
          src={desert}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Desertwave</p>
          <Image className={themes.innerimage}
          src={desertwave}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Dunes</p>
          <Image className={themes.innerimage}
          src={dunes}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Estuary</p>
          <Image className={themes.innerimage}
          src={estuary}
          alt=""
          width='300'
          height='300'
          />
        </div>
        </div>
        <div className={themes.rowline}>
        <div className={themes.heroboxinner}>
        <p>Floodplain</p>
          <Image className={themes.innerimage}
          src={floodplain}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Glacier</p>
          <Image className={themes.innerimage}
          src={glacier}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Grove</p>
          <Image className={themes.innerimage}
          src={grove}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Jungle</p>
          <Image className={themes.innerimage}
          src={jungle}
          alt=""
          width='300'
          height='300'
          />
        </div>
        </div>
        <div className={themes.rowline}>
        <div className={themes.heroboxinner}>
        <p>Junglecore</p>
          <Image className={themes.innerimage}
          src={junglecore}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Lake</p>
          <Image className={themes.innerimage}
          src={lake}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Landscape</p>
          <Image className={themes.innerimage}
          src={landscape}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Mountains</p>
          <Image className={themes.innerimage}
          src={mountains}
          alt=""
          width='300'
          height='300'
          />
        </div>
        </div>
        <div className={themes.rowline}>
        <div className={themes.heroboxinner}>
        <p>Orchard</p>
          <Image className={themes.innerimage}
          src={orchard}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Plains</p>
          <Image className={themes.innerimage}
          src={plains}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>River</p>
          <Image className={themes.innerimage}
          src={river}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Scrubland</p>
          <Image className={themes.innerimage}
          src={scrubland}
          alt=""
          width='300'
          height='300'
          />
        </div>
        </div>
        <div className={themes.rowline}>
        <div className={themes.heroboxinner}>
        <p>Setting</p>
          <Image className={themes.innerimage}
          src={setting}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Shrubland</p>
          <Image className={themes.innerimage}
          src={shrubland}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Surroundings</p>
          <Image className={themes.innerimage}
          src={surroundings}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Thicket</p>
          <Image className={themes.innerimage}
          src={thicket}
          alt=""
          width='300'
          height='300'
          />
        </div>
        </div>
        <div className={themes.rowline}>
        <div className={themes.heroboxinner}>
        <p>Tundra</p>
          <Image className={themes.innerimage}
          src={tundra}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Valley</p>
          <Image className={themes.innerimage}
          src={valley}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Woodland</p>
          <Image className={themes.innerimage}
          src={woodland}
          alt=""
          width='300'
          height='300'
          />
        </div>
        </div>
        <div className={themes.subtitle} id="nature">Nature</div>
        <div className={themes.rowline}>
        <div className={themes.heroboxinner}>
        <p>Anthropomorphic</p>
          <Image className={themes.innerimage}
          src={anthropomorphic}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Atmosphere</p>
          <Image className={themes.innerimage}
          src={atmosphere}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Biopunk</p>
          <Image className={themes.innerimage}
          src={biopunk}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Earthcore</p>
          <Image className={themes.innerimage}
          src={earthcore}
          alt=""
          width='300'
          height='300'
          />
        </div>
        </div>
        <div className={themes.rowline}>
        <div className={themes.heroboxinner}>
        <p>Environment</p>
          <Image className={themes.innerimage}
          src={environment}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Flowercore</p>
          <Image className={themes.innerimage}
          src={flowercore}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Frostpunk</p>
          <Image className={themes.innerimage}
          src={frostpunk}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Groundcore</p>
          <Image className={themes.innerimage}
          src={groundcore}
          alt=""
          width='300'
          height='300'
          />
        </div>
        </div>
        <div className={themes.rowline}>
        <div className={themes.heroboxinner}>
        <p>Mosscore</p>
          <Image className={themes.innerimage}
          src={mosscore}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Nature</p>
          <Image className={themes.innerimage}
          src={naturesx}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Naturecore</p>
          <Image className={themes.innerimage}
          src={naturecore}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Paleocore</p>
          <Image className={themes.innerimage}
          src={paleocore}
          alt=""
          width='300'
          height='300'
          />
        </div>
        </div>
        <div className={themes.subtitle} id="space">Space</div>
        <div className={themes.rowline}>
        <div className={themes.heroboxinner}>
        <p>Antimatter</p>
          <Image className={themes.innerimage}
          src={antimatter}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Celestial</p>
          <Image className={themes.innerimage}
          src={celestial}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Constellation</p>
          <Image className={themes.innerimage}
          src={constellation}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Cosmic</p>
          <Image className={themes.innerimage}
          src={cosmic}
          alt=""
          width='300'
          height='300'
          />
        </div>
        </div>
        <div className={themes.rowline}>
        <div className={themes.heroboxinner}>
        <p>Dark Matter</p>
          <Image className={themes.innerimage}
          src={darkmatter}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Eclipse</p>
          <Image className={themes.innerimage}
          src={eclipse}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Galatic</p>
          <Image className={themes.innerimage}
          src={galactic}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Galaxy</p>
          <Image className={themes.innerimage}
          src={galaxy}
          alt=""
          width='300'
          height='300'
          />
        </div>
        </div>
        <div className={themes.rowline}>
        <div className={themes.heroboxinner}>
        <p>Hypernova</p>
          <Image className={themes.innerimage}
          src={hypernova}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Interstellar Space</p>
          <Image className={themes.innerimage}
          src={interstellarspace}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Interstellar</p>
          <Image className={themes.innerimage}
          src={interstellar}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Lunar</p>
          <Image className={themes.innerimage}
          src={lunar}
          alt=""
          width='300'
          height='300'
          />
        </div>
        </div>
        <div className={themes.rowline}>
        <div className={themes.heroboxinner}>
        <p>Microquasar</p>
          <Image className={themes.innerimage}
          src={microquasar}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>NASA</p>
          <Image className={themes.innerimage}
          src={nasa}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Nebula</p>
          <Image className={themes.innerimage}
          src={nebula}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Neutron Star</p>
          <Image className={themes.innerimage}
          src={neutronstar}
          alt=""
          width='300'
          height='300'
          />
        </div>
        </div>
        <div className={themes.rowline}>
        <div className={themes.heroboxinner}>
        <p>Orbital</p>
          <Image className={themes.innerimage}
          src={orbital}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Outer Space</p>
          <Image className={themes.innerimage}
          src={outerspace}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Planet</p>
          <Image className={themes.innerimage}
          src={planet}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Quasar</p>
          <Image className={themes.innerimage}
          src={quasar}
          alt=""
          width='300'
          height='300'
          />
        </div>
        </div>
        <div className={themes.rowline}>
        <div className={themes.heroboxinner}>
        <p>Solar Eclipse</p>
          <Image className={themes.innerimage}
          src={solareclipse}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Spacecore</p>
          <Image className={themes.innerimage}
          src={spacecore}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Starry</p>
          <Image className={themes.innerimage}
          src={starry}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Stellar Corona</p>
          <Image className={themes.innerimage}
          src={stellarcorona}
          alt=""
          width='300'
          height='300'
          />
        </div>
        </div>
        <div className={themes.rowline}>
        <div className={themes.heroboxinner}>
        <p>Stellar</p>
          <Image className={themes.innerimage}
          src={stellar}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Supernova</p>
          <Image className={themes.innerimage}
          src={supernova}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Universe</p>
          <Image className={themes.innerimage}
          src={universe}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Vela Pulsar</p>
          <Image className={themes.innerimage}
          src={velapulsar}
          alt=""
          width='300'
          height='300'
          />
        </div>
        </div>
        <div className={themes.subtitle} id="realism">Realism</div>
        <div className={themes.rowline}>
        <div className={themes.heroboxinner}>
        <p>Abstract</p>
          <Image className={themes.innerimage}
          src={abstract}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Anemoiacore</p>
          <Image className={themes.innerimage}
          src={anemoiacore}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Classical Realism</p>
          <Image className={themes.innerimage}
          src={classicalrealism}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Contemporary Realism</p>
          <Image className={themes.innerimage}
          src={contemporary}
          alt=""
          width='300'
          height='300'
          />
        </div>
        </div>
        <div className={themes.rowline}>
        <div className={themes.heroboxinner}>
        <p>Dark Fantasy</p>
          <Image className={themes.innerimage}
          src={darkfantasy}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Daydreampunk</p>
          <Image className={themes.innerimage}
          src={daydreampunk}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Deja Vu</p>
          <Image className={themes.innerimage}
          src={dejavu}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>dreamcore</p>
          <Image className={themes.innerimage}
          src={dreamcore}
          alt=""
          width='300'
          height='300'
          />
        </div>
        </div>
        <div className={themes.rowline}>
        <div className={themes.heroboxinner}>
        <p>Dreamlike</p>
          <Image className={themes.innerimage}
          src={dreamlike}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Dreampunk</p>
          <Image className={themes.innerimage}
          src={dreampunk}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Dreamy</p>
          <Image className={themes.innerimage}
          src={dreamy}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Ethereal Fantasy</p>
          <Image className={themes.innerimage}
          src={etherealfantasy}
          alt=""
          width='300'
          height='300'
          />
        </div>
        </div>
        <div className={themes.rowline}>
        <div className={themes.heroboxinner}>
        <p>Ethereal</p>
          <Image className={themes.innerimage}
          src={ethereal}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Fantastic Realism</p>
          <Image className={themes.innerimage}
          src={fantasticrealism}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Fantasy Map</p>
          <Image className={themes.innerimage}
          src={fantasymap}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Fantasy</p>
          <Image className={themes.innerimage}
          src={fantasy}
          alt=""
          width='300'
          height='300'
          />
        </div>
        </div>
        <div className={themes.rowline}>
        <div className={themes.heroboxinner}>
        <p>Fever Dream</p>
          <Image className={themes.innerimage}
          src={feverdream}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Fiction</p>
          <Image className={themes.innerimage}
          src={fiction}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>From Another Realm</p>
          <Image className={themes.innerimage}
          src={fromanotherrealm}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Hyper Real</p>
          <Image className={themes.innerimage}
          src={hyperreal}
          alt=""
          width='300'
          height='300'
          />
        </div>
        </div>
        <div className={themes.rowline}>
        <div className={themes.heroboxinner}>
        <p>Hyperrealistic</p>
          <Image className={themes.innerimage}
          src={hyperrealistic}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Illusion</p>
          <Image className={themes.innerimage}
          src={illusion}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Imagination</p>
          <Image className={themes.innerimage}
          src={imagination}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Imaginative</p>
          <Image className={themes.innerimage}
          src={imaginative}
          alt=""
          width='300'
          height='300'
          />
        </div>
        </div>
        <div className={themes.rowline}>
        <div className={themes.heroboxinner}>
        <p>Imagined</p>
          <Image className={themes.innerimage}
          src={imagined}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Immaterial</p>
          <Image className={themes.innerimage}
          src={immaterial}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Impossible</p>
          <Image className={themes.innerimage}
          src={impossible}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Intangible</p>
          <Image className={themes.innerimage}
          src={intangible}
          alt=""
          width='300'
          height='300'
          />
        </div>
        </div>
        <div className={themes.rowline}>
        <div className={themes.heroboxinner}>
        <p>Hyperrealistic</p>
          <Image className={themes.innerimage}
          src={hyperrealistic}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Lucid</p>
          <Image className={themes.innerimage}
          src={lucid}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Magic Realism</p>
          <Image className={themes.innerimage}
          src={magicrealism}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>New Realism</p>
          <Image className={themes.innerimage}
          src={newrealism}
          alt=""
          width='300'
          height='300'
          />
        </div>
        </div>
        <div className={themes.rowline}>
        <div className={themes.heroboxinner}>
        <p>Non Fiction</p>
          <Image className={themes.innerimage}
          src={nonfiction}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Nonsense</p>
          <Image className={themes.innerimage}
          src={nonsense}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Otherworldly</p>
          <Image className={themes.innerimage}
          src={otherworldly}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Photorealism</p>
          <Image className={themes.innerimage}
          src={photorealism}
          alt=""
          width='300'
          height='300'
          />
        </div>
        </div>
        <div className={themes.rowline}>
        <div className={themes.heroboxinner}>
        <p>Photorealistic</p>
          <Image className={themes.innerimage}
          src={photorealistic}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Realism</p>
          <Image className={themes.innerimage}
          src={realism}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Realistic</p>
          <Image className={themes.innerimage}
          src={realistic}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Science Fiction</p>
          <Image className={themes.innerimage}
          src={sciencefiction}
          alt=""
          width='300'
          height='300'
          />
        </div>
        </div>
        <div className={themes.rowline}>
        <div className={themes.heroboxinner}>
        <p>Surreal</p>
          <Image className={themes.innerimage}
          src={surreal}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Surrealism</p>
          <Image className={themes.innerimage}
          src={surrealism}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Unrealistic</p>
          <Image className={themes.innerimage}
          src={unrealistic}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Unworldly</p>
          <Image className={themes.innerimage}
          src={unworldly}
          alt=""
          width='300'
          height='300'
          />
        </div>
        </div>
        <div className={themes.rowline}>
        <div className={themes.heroboxinner}>
        <p>Weirdcore</p>
          <Image className={themes.innerimage}
          src={weirdcore}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Wonderland</p>
          <Image className={themes.innerimage}
          src={wonderland}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Worldly</p>
          <Image className={themes.innerimage}
          src={worldly}
          alt=""
          width='300'
          height='300'
          />
        </div>
        </div>
        <div className={themes.subtitle} id="time">Time</div>
        <div className={themes.rowline}>
        <div className={themes.heroboxinner}>
        <p>Antique</p>
          <Image className={themes.innerimage}
          src={antique}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Atompunk</p>
          <Image className={themes.innerimage}
          src={atompunk}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Cyberpunk</p>
          <Image className={themes.innerimage}
          src={cyberpunk}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Futurism</p>
          <Image className={themes.innerimage}
          src={futurism}
          alt=""
          width='300'
          height='300'
          />
        </div>
        </div>
        <div className={themes.rowline}>
        <div className={themes.heroboxinner}>
        <p>Futuristic</p>
          <Image className={themes.innerimage}
          src={futuristic}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Historic</p>
          <Image className={themes.innerimage}
          src={historic}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Ice Age</p>
          <Image className={themes.innerimage}
          src={iceage}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Modern</p>
          <Image className={themes.innerimage}
          src={modern}
          alt=""
          width='300'
          height='300'
          />
        </div>
        </div>
        <div className={themes.rowline}>
        <div className={themes.heroboxinner}>
        <p>Modernismo</p>
          <Image className={themes.innerimage}
          src={modernismo}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Nanopunk</p>
          <Image className={themes.innerimage}
          src={nanopunk}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Nostalgia</p>
          <Image className={themes.innerimage}
          src={nostalgia}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Nostalgiacore</p>
          <Image className={themes.innerimage}
          src={nostalgiacore}
          alt=""
          width='300'
          height='300'
          />
        </div>
        </div>
        <div className={themes.rowline}>
        <div className={themes.heroboxinner}>
        <p>Postcyberpunk</p>
          <Image className={themes.innerimage}
          src={postcyberpunk}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Pre Historic</p>
          <Image className={themes.innerimage}
          src={prehistoric}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Prehistoricore</p>
          <Image className={themes.innerimage}
          src={prehistoricore}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Raypunk</p>
          <Image className={themes.innerimage}
          src={raypunk}
          alt=""
          width='300'
          height='300'
          />
        </div>
        </div>
        <div className={themes.rowline}>
        <div className={themes.heroboxinner}>
        <p>Retro</p>
          <Image className={themes.innerimage}
          src={retro}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Retrowave</p>
          <Image className={themes.innerimage}
          src={retrowave}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Rococopunk</p>
          <Image className={themes.innerimage}
          src={rococopunk}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Rustic</p>
          <Image className={themes.innerimage}
          src={rustic}
          alt=""
          width='300'
          height='300'
          />
        </div>
        </div>
        <div className={themes.rowline}>
        <div className={themes.heroboxinner}>
        <p>Rusticcore</p>
          <Image className={themes.innerimage}
          src={rusticcore}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>vintage</p>
          <Image className={themes.innerimage}
          src={vintage}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Wild West</p>
          <Image className={themes.innerimage}
          src={wildwest}
          alt=""
          width='300'
          height='300'
          />
        </div>
        </div>
        <div className={themes.subtitle} id="scifi">Science Fiction</div>
        <div className={themes.rowline}>
        <div className={themes.heroboxinner}>
        <p>Aetherpunk</p>
          <Image className={themes.innerimage}
          src={aetherpunk}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Alchemy</p>
          <Image className={themes.innerimage}
          src={alchemy}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Alien</p>
          <Image className={themes.innerimage}
          src={alien}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Auroracore</p>
          <Image className={themes.innerimage}
          src={auroracore}
          alt=""
          width='300'
          height='300'
          />
        </div>
        </div>
        <div className={themes.rowline}>
        <div className={themes.heroboxinner}>
        <p>Cypernoir</p>
          <Image className={themes.innerimage}
          src={cypernoir}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Decopunk</p>
          <Image className={themes.innerimage}
          src={decopunk}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Extraterrestrial</p>
          <Image className={themes.innerimage}
          src={extraterrestrial}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Invaded</p>
          <Image className={themes.innerimage}
          src={invaded}
          alt=""
          width='300'
          height='300'
          />
        </div>
        </div>
        <div className={themes.rowline}>
        <div className={themes.heroboxinner}>
        <p>Invasion</p>
          <Image className={themes.innerimage}
          src={invasion}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Magewave</p>
          <Image className={themes.innerimage}
          src={magewave}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Magic</p>
          <Image className={themes.innerimage}
          src={magic}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Magical</p>
          <Image className={themes.innerimage}
          src={magical}
          alt=""
          width='300'
          height='300'
          />
        </div>
        </div>
        <div className={themes.rowline}>
        <div className={themes.heroboxinner}>
        <p>Metaphysical</p>
          <Image className={themes.innerimage}
          src={metaphysical}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Mystic</p>
          <Image className={themes.innerimage}
          src={mystic}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Mystical</p>
          <Image className={themes.innerimage}
          src={mystical}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Mythpunk</p>
          <Image className={themes.innerimage}
          src={mythpunk}
          alt=""
          width='300'
          height='300'
          />
        </div>
        </div>
        <div className={themes.rowline}>
        <div className={themes.heroboxinner}>
        <p>Psychic</p>
          <Image className={themes.innerimage}
          src={psychic}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Sci Fi</p>
          <Image className={themes.innerimage}
          src={scifi}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Terrestrial</p>
          <Image className={themes.innerimage}
          src={terrestrial}
          alt=""
          width='300'
          height='300'
          />
        </div>
        <div className={themes.heroboxinner}>
        <p>Witchcore</p>
          <Image className={themes.innerimage}
          src={witchcore}
          alt=""
          width='300'
          height='300'
          />
        </div>
        </div>
        <div className={themes.rowline}>
        <div className={themes.heroboxinner}>
        <p>Wizardcore</p>
          <Image className={themes.innerimage}
          src={wizardcore}
          alt=""
          width='300'
          height='300'
          />
        </div>
        </div>
      </div>
      <div className={themes.enderspace}>
        <Link href="">Back to Top</Link>
      </div>
    </div>
  )
}