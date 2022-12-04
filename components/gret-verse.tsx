import Link from 'next/link'
import { useEffect, useState } from 'react'
import supabase from '../lib/supaclient'
import styles from './modules/gretil.module.css'

const Vrmim = () => {
  const [fetchError, setFetchError] = useState(null)
  const [linesmim, setLinesmim] = useState(null)

  useEffect(() => {
    const fetchLinesmim = async () => {
      const { data, error } = await supabase
        .from('rep-mimamsasutra')
        .select()
      
      if (error) {
        setFetchError('Could not fetch the smoothies')
        setLinesmim(null)
      }
      if (data) {
        setLinesmim(data)
        setFetchError(null)
      }
    }
    fetchLinesmim()

  }, [])


return (
  <div>
   {fetchError && (<p>{fetchError}</p>)}
    <div> {linesmim && (
      <div>
        {/* order-by buttons */}
        <div>
          {linesmim.map(linemim => (
           <div>
            {linemim.styled}
           </div>
          ))}
        </div>
      </div>
    )}
    </div>
  </div>
)
}

export default Vrmim

