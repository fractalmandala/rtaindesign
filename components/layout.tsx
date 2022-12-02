import styles from './modules/layout.module.css'
import Header from '../components/header'
import Sidenav from '../components/sidenav'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  return (
    <>
  <body className={styles.bod}>
    <div className={styles.layout}>
      <Header></Header>
      <div className={styles.iscontain}>
      <Sidenav> </Sidenav>
      <div className={styles.box}>
      {children}
      </div>
      </div>
    </div>
    </body>
    </>
  )
}

export default Layout
