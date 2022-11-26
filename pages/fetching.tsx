import Layout from '../components/layout'
import Post from '../interfaces/post'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import supabase from '../lib/supaclient'

const Foitch = () => {
  const [fetchError, setFetchError] = useState(null)
  const [smoothies, setSmoothies] = useState(null)

  useEffect(() => {
    const fetchSmoothies = async () => {
      const { data, error } = await supabase
        .from('vedicconcordance2')
        .select()
      
      if (error) {
        setFetchError('Could not fetch the smoothies')
        setSmoothies(null)
      }
      if (data) {
        setSmoothies(data)
        setFetchError(null)
      }
    }

    fetchSmoothies()

  }, [])


return (
  <div className="page home">
    <Link href="/">Return</Link>
    {fetchError && (<p>{fetchError}</p>)}
    {smoothies && (
      <div className="smoothies">
        {/* order-by buttons */}
        <div className="smoothie-grid">
          {smoothies.map(smoothie => (
           <p>{smoothie.occurence}</p>
          ))}
        </div>
      </div>
    )}
  </div>
)
}


export default Foitch