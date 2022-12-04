import styles from './modules/layout.module.css'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const VisibToggle = ({ preview, children }: Props) => {
  return (
    <div className={styles.toggler}>
      {children}
      </div>
  )
}

export default VisibToggle