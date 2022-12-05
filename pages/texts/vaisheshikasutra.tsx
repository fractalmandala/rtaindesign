import Link from 'next/link'
import Vaisheshikameta from '../../extracts/vaisheshikameta'
import Vaisheshikaindex from '../../extracts/vaisheshikaindex'
import Vaisheshika from '../../extracts/vaisheshika'
import VisibToggle from '../../components/visibtoggle'
import Header from '../../components/header'
import Layout from '../../components/layout'
import Fullfullcol from '../../components/fullfullcol'

export default function Text () {
  return (
    <Layout>
    <Header></Header>
    <Fullfullcol>
    <div className="titler"><h1>Vaiśeṣikasūtra</h1>
    <h3>Kaṇāda</h3></div>
    <Vaisheshikameta></Vaisheshikameta>
    <VisibToggle>Show Index</VisibToggle>
    <Vaisheshikaindex></Vaisheshikaindex>
    <Vaisheshika></Vaisheshika>
    </Fullfullcol>
    </Layout>
  )
}