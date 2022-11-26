import styles from './mystyles.module.css'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Sidenav = ({ preview, children }: Props) => {
  return (
    <>
    <div className="sidenavs w20-80 bk-black">
    {children}
    </div>
    </>
  )
}

export default Sidenav