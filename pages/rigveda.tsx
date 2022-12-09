import Link from 'next/link'
import { useEffect, useState } from 'react'
import supabase from '../lib/supaclient'
import Layout from '../components/layout'
import Header from '../components/header'
import Mother from '../components/mother'
import Sidenav from '../components/sidenav'
import styles from '../components/modules/supa.module.css'

const Rgveda = () => {
  const [fetchError, setFetchError] = useState(null)
  const [lines, setLines] = useState(null)

  useEffect(() => {
    const fetchLines = async () => {
      const { data, error } = await supabase
        .from('db-rigveda')
        .select()
      
      if (error) {
        setFetchError('Could not fetch the data. Please write to design@brhat.in if problem persists.')
        setLines(null)
      }
      if (data) {
        setLines(data)
        setFetchError(null)
      }
    }

    fetchLines()

  }, [])


return (
  <Layout>
    <Header></Header>
    <Sidenav> </Sidenav>
    <Mother>
      <div className={styles.fullpager}>
        {fetchError && (<p>{fetchError}</p>)}
        {lines && (
          <div>
            {/* order-by buttons */}
            <div>
              {lines.map(line => (
              <div className={styles.itemcontainer}>
                <div className={styles.supamain}>
                  <p className={styles.supalabel}>{line.msr}</p>
                  <p className={styles.supahero}>{line.iast}</p>
                  <p className={styles.supahero}>{line.devanagari}</p>
                </div>
                <div className={styles.supaaux}>
                  <p className={styles.supalabel}>Griffith's English translation:</p>
                  <p className={styles.supasidekick}>{line.griffith}</p>
                  <p className={styles.supalabel}>Pada Pāṭha:</p>
                  <p className={styles.supasidekick}>{line.padapatha}</p>
                  <div className={styles.supameta}>
                    <p className={styles.supalabel}>Ṛṣi:<br></br><span className={styles.supawhite}>{line.rshi}</span></p>
                    <p className={styles.supalabel}>Chanda:<br></br><span className={styles.supawhite}>{line.chanda}</span></p>
                    <p className={styles.supalabel}>Devatā:<br></br><span className={styles.supawhite}>{line.devata}</span></p>
                  </div>  
                </div>
              </div>
            ))}
          </div>
        </div>
        )}
      </div>
    </Mother>
  </Layout>
)
}


export default Rgveda