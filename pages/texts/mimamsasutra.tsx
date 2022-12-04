import Link from 'next/link'
import Mimamsameta from '../../extracts/mimamsameta'
import Mimamsaindex from '../../extracts/mimamsaindex'
import Mimamsa from '../../extracts/mimamsa'
import VisibToggle from '../../components/visibtoggle'
import Header from '../../components/header'
import Layout from '../../components/layout'
import Fullfullcol from '../../components/fullfullcol'

export default function Text () {
  return (
    <Layout>
    <Header></Header>
    <Fullfullcol>
    <div className="titler"><h1>Mīmāṃsasūtra</h1>
    <h3>Jaimini</h3></div>
    <Mimamsameta></Mimamsameta>
    <VisibToggle>Show Index</VisibToggle>
    <Mimamsaindex></Mimamsaindex>
    <Mimamsa></Mimamsa>
    </Fullfullcol>
    </Layout>
  )
}