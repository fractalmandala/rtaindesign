import Link from 'next/link'
import Mimamsameta from '../../extracts/mimamsameta'
import Mimamsa from '../../extracts/mimamsa'
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
    <h1>Mīmāṃsasūtra</h1>
    <h5>Jaimini</h5>
    <Mimamsameta></Mimamsameta>
    <Mimamsa></Mimamsa>
    </Genflex>
    </Mother>
    </Layout>
  )
}