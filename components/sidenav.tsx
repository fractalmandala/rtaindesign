import styles from './sidenav.module.css'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Sidenav = ({ preview, children }: Props) => {
  return (
    <>
    <div className="sidenav">
      <p>Ṛta in Design</p>
      <small id="line1">Introduction</small>
      <small id="line2">The Scaffolding in Brief</small>
      <small id="line3">Principles of Design</small>
      <small id="line4">The Design Being</small>
      <small id="line5">Svataḥ Siddha</small>
      <br></br>
      <p>Fractal Maṇḍala</p>
      <small id="line6">About</small>
      <small id="line7">Documentation</small>
      <small id="line8">Playground</small>
      <small id="line9">Current Status</small>
    {children}
    </div>
    </>
  )
}

export default Sidenav