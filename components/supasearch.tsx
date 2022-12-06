import { useEffect, useState } from 'react'
import supabase from '../lib/supaclient'
import SearchBox from '../components/searchbox'
import styles from './modules/mother.module.css'
import Link from 'next/link'

const DictionarySearch = () => {
  const [fetchError, setFetchError] = useState(null)
  const [words, setWords] = useState(null)
  useEffect(() => {
    const fetchWords = async () => {
      const { data, error } = await supabase
        .from('db-dictionary')
        .select()
        .eq('word','akāra')
      
      if (error) {
        setFetchError('Could not fetch the data')
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
  <SearchBox>
    {fetchError && (<p>{fetchError}</p>)}
      <div className={styles.fillera}> {words && (
        <div className={styles.fillerb}>
          {words.map(words => (
            <div className={styles.searchoutput}>
                {words.word}
            </div>
          ))}
        </div>
      )}
    </div>
  </SearchBox>
)
}

export default DictionarySearch