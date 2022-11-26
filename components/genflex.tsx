
import styles from './mystyles.module.css'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Genflex = ({ preview, children }: Props) => {
  return (
    <>
    <div className="genflex-r per100hff cc bk-black bdr-a">
    {children}
    </div>
    </>
  )
}

export default Genflex
