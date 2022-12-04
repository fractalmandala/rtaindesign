import Link from 'next/link'
import { useEffect, useState } from 'react'
import supabase from '../lib/supaclient'
import Gretil from '../components/gretil'
import styles from './modules/gretil.module.css'

const Chmim = () => {
  const [fetchError, setFetchError] = useState(null)
  const [versesmim, setVersesmim] = useState(null)

  useEffect(() => {
    const fetchVersesmim = async () => {
      const { data, error } = await supabase
        .from('rep-mimamsa')
        .select()
      
      if (error) {
        setFetchError('Could not fetch the smoothies')
        setVersesmim(null)
      }
      if (data) {
        setVersesmim(data)
        setFetchError(null)
      }
    }
    fetchVersesmim()

  }, [])


return (
  <div>
   {fetchError && (<p>{fetchError}</p>)}
    <div> {versesmim && (
      <div>
        {/* order-by buttons */}
        <div>
          {versesmim.map(versemim => (
           <Gretil>
           <div className={styles.ofnum} id={versemim.verse}>
            {versemim.verse}
           
           <span className={styles.ofline}>
            {versemim.styledLine}
            </span>
            </div>
            </Gretil>
          ))}
        </div>
      </div>
    )}
    </div>
  </div>
)
}

export default Chmim

