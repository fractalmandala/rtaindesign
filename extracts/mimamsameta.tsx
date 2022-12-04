import { useEffect, useState } from 'react'
import supabase from '../lib/supaclient'
import Gretilmeta from '../components/gretilmeta'
import styles from '../components/modules/gretil.module.css'

const Mimamsameta = () => {
  const [fetchError, setFetchError] = useState(null)
  const [versesmim, setVersesmim] = useState(null)

  useEffect(() => {
    const fetchVersesmim = async () => {
      const { data, error } = await supabase
        .from('rep-mimamsa')
        .select()
        .eq('tag','bibl')
      
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
  <Gretilmeta>
    {fetchError && (<p>{fetchError}</p>)}
      <div> {versesmim && (
        <div>
          {versesmim.map(versemim => (
            <div className={styles.ofmeta}>
              {versemim.styledLine}
            </div>
          ))}
        </div>
      )}
    </div>
  </Gretilmeta>
)
}

export default Mimamsameta