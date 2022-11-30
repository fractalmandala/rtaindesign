import styles from './modules/htmlbox.module.css'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Htmlbox = ({ preview, children }: Props) => {
  return (
    <>
    <div className={styles.htmlbox}>
    {children}
    </div>
    </>
  )
}

export default Htmlbox