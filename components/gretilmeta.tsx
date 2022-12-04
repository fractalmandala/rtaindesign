import styles from './modules/gretil.module.css'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Gretilmeta = ({ preview, children }: Props) => {
  return (
    <div className={styles.gretilmeta}>
      {children}
    </div>
  )
}

export default Gretilmeta