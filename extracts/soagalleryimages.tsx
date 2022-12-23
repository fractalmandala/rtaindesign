import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import supabase from '../lib/supaclient'
import styles from '../components/modules/soa.module.css'

const SoaGalleryPull = () => {
  const [fetchError, setFetchError] = useState(null)
  const [versesmim, setVersesmim] = useState(null)

  useEffect(() => {
    const fetchVersesmim = async () => {
      const { data, error } = await supabase
        .from('MidjourneyImages')
        .select()
        .order('imagenumber')
      
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
  <div>
    {fetchError && (<p>{fetchError}</p>)}
      <div className={styles.thebigfetch}> {versesmim && (
        <div className={styles.basicrow}>
          {versesmim.map(versemim => (
            <div className={styles.rendergrid}>
              <Image className={styles.theimage} 
                src={versemim.link}
                alt=""
                width= '256'
                height= '256'
                /> 
              <div className={styles.singlebox}>
              <div className={styles.prompt}>{versemim.prompt}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
)
}

export default SoaGalleryPull