
import styles from './mystyles.module.css'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Genflex = ({ preview, children }: Props) => {
  return (
    <>
    <div className="genflex-r w80-100 cc bk-black bdr-a">1
    </div>
    </>
  )
}

export default Genflex
