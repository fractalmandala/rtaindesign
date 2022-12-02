import styles from './modules/layout.module.css'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  return (
    <div className={styles.layout}>
      {children}
      </div>
  )
}

export default Layout
