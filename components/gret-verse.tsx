import Link from 'next/link'
import { useEffect, useState } from 'react'
import supabase from '../lib/supaclient'
import Gretilindex from '../components/gretilindex'
import styles from './modules/gretil.module.css'

const Vrmim = () => {
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
     
          {versesmim.map(versemim => (
           <Gretilindex>
           <div className={styles.ofnumashead}>
           <Link href={`/texts/mimamsasutra/${versemim.verse}`}>{versemim.verse}</Link>
            </div>
            </Gretilindex>
          ))}
       
      </div>
    )}
    </div>
  </div>
)
}

export default Vrmim

