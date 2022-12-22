import Link from 'next/link'
import Soahead from '../components/soaheader'
import styles from '../components/modules/soa.module.css'

export default function() {
  return (
    <div className={styles.soacontainer}>
      <Soahead></Soahead>
      <div className={styles.rowline}>
        
      </div>
    </div>
  )
}