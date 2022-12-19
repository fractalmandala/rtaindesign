import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router';
import supabase from '../lib/supabase'

const Dictionary = () => {
  const [fetchError, setFetchError] = useState(null)
  const [words, setWords] = useState(null)

  useEffect(() => {
    const fetchWords = async () => {
      const { data, error } = await supabase
        .from('db-dictionary')
        .select()
      
      if (error) {
        setFetchError('Could not fetch the words')
        setWords(null)
      }
      if (data) {
        setWords(data)
        setFetchError(null)
      }
    }

    fetchWords()

  }, [])


return (
  <div className="page home">
    <Link href="/">Return</Link>
    {fetchError && (<p>{fetchError}</p>)}
    {words && (
      <div className="smoothies">
        {/* order-by buttons */}
        <div className="smoothie-grid">
          {words.map(word => (
           <p>{word.words}</p>
          ))}
        </div>
      </div>
    )}
  </div>
)
}


export default Dictionary