import styles from './modules/mother.module.css'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Mother = ({ preview, children }: Props) => {
  return (
    <>
    
    <div className={styles.mother}>
      {children}
    </div>
    </>
  )
}

export default Mother