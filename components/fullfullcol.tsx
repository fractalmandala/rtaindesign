import styles from './modules/mother.module.css'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Fullfullcol = ({ preview, children }: Props) => {
  return (
    <>
    <div className={styles.fullfullcol}>
    {children}
    </div>
    </>
  )
}

export default Fullfullcol
