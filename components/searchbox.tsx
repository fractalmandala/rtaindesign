import styles from './modules/mother.module.css'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const SearchBox = ({ preview, children }: Props) => {
  return (
    <div className={styles.searchbox}>
      {children}
    </div>
  )
}

export default SearchBox