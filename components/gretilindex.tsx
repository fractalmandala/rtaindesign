import styles from './modules/gretil.module.css'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Gretilindex = ({ preview, children }: Props) => {
  return (
    <div className={styles.gretilindex}>
      {children}
    </div>
  )
}

export default Gretilindex