
import styles from './mystyles.module.css'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Genflex2 = ({ preview, children }: Props) => {
  return (
    <>
    <div className="genflex-r ff100 cc bk-green bdr-a">
    {children}
    </div>
    </>
  )
}

export default Genflex2
