import { useEffect, useState } from 'react'
import supabase from '../lib/supaclient'
import Gretilindex from '../components/gretilindex'
import styles from '../components/modules/gretil.module.css'
import Link from 'next/link'

const Mimamsaindex = () => {
  const [fetchError, setFetchError] = useState(null)
  const [versesmim, setVersesmim] = useState(null)

  useEffect(() => {
    const fetchVersesmim = async () => {
      const { data, error } = await supabase
        .from('rep-mimamsa')
        .select()
        .eq('tag','l')
      
      if (error) {
        setFetchError('Could not fetch the data')
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
  <Gretilindex>
    {fetchError && (<p>{fetchError}</p>)}
      <div className={styles.fillera}> {versesmim && (
        <div className={styles.fillerb}>
          {versesmim.map(versemim => (
            <div className={styles.ofnumashead}>
 
                {versemim.verse}

            
            </div>
          ))}
        </div>
      )}
    </div>
  </Gretilindex>
)
}

export default Mimamsaindex