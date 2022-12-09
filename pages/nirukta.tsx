import { useEffect, useState } from 'react'
import supabase from '../lib/supaclient'
import Layout from '../components/layout'
import Header from '../components/header'
import Mother from '../components/mother'
import Sidenav from '../components/sidenav'
import styles from '../components/modules/supa.module.css'

const Nirukta = () => {
  const [fetchError, setFetchError] = useState(null)
  const [lines, setLines] = useState(null)

  useEffect(() => {
    const fetchLines = async () => {
      const { data, error } = await supabase
        .from('db-nirukta')
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
      <h1>Nirukta</h1>
      <h5>Yāska</h5>
        {fetchError && (<p>{fetchError}</p>)}
        {lines && (
          <div>
            {/* order-by buttons */}
            <div>
              {lines.map(line => (
              <div className={styles.itemcontainercolumn}>
                  <p className={styles.supalabel}>{line.comb}</p>
                  <p className={styles.supahero}>{line.line}</p>
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


export default Nirukta