import styles from './modules/mother.module.css'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Genflex = ({ preview, children }: Props) => {
  return (
    <>
    <div className={styles.child}>
    {children}
    </div>
    </>
  )
}

export default Genflex
