import styles from './modules/sidenav.module.css'
import Link from 'next/link'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Sidenav = ({ preview, children }: Props) => {
  return (
    <>
    <div className={styles.sidenav}>
      <p><Link href='/'>Home</Link></p>
      <small id={styles.line1}><Link href='/repository/nirukta'>Nirukta</Link></small>
      <small id={styles.line2}><Link href='/repository/vakyapadiya'>Vākyapadīya</Link></small>
    {children}
    </div>
    </>
  )
}

export default Sidenav