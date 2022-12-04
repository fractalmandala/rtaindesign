import styles from './modules/gretil.module.css'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Gretil = ({ preview, children }: Props) => {
  return (
    <div className={styles.gretil}>
      {children}
    </div>
  )
}

export default Gretil