import Link from 'next/link'
import Sankhyameta from '../../extracts/sankhyameta'
import Sankhya from '../../extracts/sankhya'
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
    <h1>Sāṅkhyasūtra</h1>
    <h5>Kapila</h5>
    <Sankhyameta></Sankhyameta>
    <Sankhya></Sankhya>
    </Genflex>
    </Mother>
    </Layout>
  )
}