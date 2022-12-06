import styles from '../components/modules/searchfunk.module.css'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Searchfunk = ({ preview, children }: Props) => {
  return (
      <>
      <div className={styles.searchcan}>
        {children}
      </div>
      </>
  )
}

export default Searchfunk
