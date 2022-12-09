import { useEffect, useState } from 'react'
import supabase from '../lib/supaclient'
import Layout from '../components/layout'
import Header from '../components/header'
import Mother from '../components/mother'
import Sidenav from '../components/sidenav'
import styles from '../components/modules/supa.module.css'

const Ashta = () => {
  const [fetchError, setFetchError] = useState(null)
  const [lines, setLines] = useState(null)

  useEffect(() => {
    const fetchLines = async () => {
      const { data, error } = await supabase
        .from('db-ashtadhyayi')
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
      <h1>Aṣṭadhyāyī</h1>
      <h5>Pāṇini</h5>
        {fetchError && (<p>{fetchError}</p>)}
        {lines && (
          <div>
            {/* order-by buttons */}
            <div>
              {lines.map(line => (
              <div className={styles.itemcontainercolumn}>
                  <p className={styles.supalabel}>{line.chapter}.{line.pada}.{line.sutra}</p>
                  <p className={styles.supahero}>{line.lineiast}<br></br></p>
                  <p className={styles.supahero}>{line.linedevanagari}</p>
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


export default Ashta