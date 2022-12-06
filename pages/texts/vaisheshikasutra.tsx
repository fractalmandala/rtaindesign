import Link from 'next/link'
import Vaisheshikameta from '../../extracts/vaisheshikameta'
import Vaisheshika from '../../extracts/vaisheshika'
import Header from '../../components/header'
import Layout from '../../components/layout'
import Mother from '../../components/mother'
import Sidenav from '../../components/sidenav'
import Genflex from '../../components/genflex'

export default function Text () {
  return (
    <Layout>
    <Header></Header>
    <Sidenav> </Sidenav>
    <Mother>
    <Genflex>
    <div className="titler"><h1>Vaiśeṣikasūtra</h1>
    <h3>Kaṇāda</h3></div>
    <Vaisheshikameta></Vaisheshikameta>
    <Vaisheshika></Vaisheshika>
    </Genflex>
    </Mother>
    </Layout>
  )
}