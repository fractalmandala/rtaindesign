import { useEffect, useState } from 'react'
import supabase from '../lib/supaclient'
import styles from '../components/modules/mother.module.css'

const Rgveda = () => {
  const [fetchError, setFetchError] = useState(null)
  const [versesmim, setVersesmim] = useState(null)

  useEffect(() => {
    const fetchVersesmim = async () => {
      const { data, error } = await supabase
      .from('db-rigveda')
      .select()
      .eq('msr','1 - 1 - 1')

      if(error) {
        setFetchError('nope')
        setVersesmim(null)
      }
      if(data) {
        setFetchError(null)
        setVersesmim(data)
      }
    }
    fetchVersesmim
  }, [])

  return (
    <>
     {fetchError && (<p>{fetchError}</p>)}
     <div> {versesmim && (
        <div>
          {versesmim.map(versemim => (
            <div className={styles.rvbox}>
              {versemim.iast}<span className={styles.rvmsr}>{versemim.msr}</span>
            </div>
          ))}
        </div>
      )}
    </div>
    </>
  )
}

export default Rgveda