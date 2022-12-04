import { useEffect, useState } from 'react'
import supabase from '../lib/supaclient'
import Gretil from '../components/gretil'
import styles from '../components/modules/gretil.module.css'

const Mimamsa = () => {
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
  <Gretil>
    {fetchError && (<p>{fetchError}</p>)}
      <div> {versesmim && (
        <div>
          {versesmim.map(versemim => (
            <div className={styles.ofnum} id={versemim.verse}>
              {versemim.verse}<span className={styles.ofline}>{versemim.styledLine}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  </Gretil>
)
}

export default Mimamsa