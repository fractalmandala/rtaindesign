import Link from 'next/link'
import Sankhyameta from '../../extracts/sankhyameta'
import Sankhyaindex from '../../extracts/sankhyaindex'
import Sankhya from '../../extracts/sankhya'
import VisibToggle from '../../components/visibtoggle'
import Header from '../../components/header'
import Layout from '../../components/layout'
import Fullfullcol from '../../components/fullfullcol'

export default function Text () {
  return (
    <Layout>
    <Header></Header>
    <Fullfullcol>
    <div className="titler"><h1>Sāṅkhyasūtra</h1>
    <h3>Kapila</h3></div>
    <Sankhyameta></Sankhyameta>
    <VisibToggle>Show Index</VisibToggle>
    <Sankhyaindex></Sankhyaindex>
    <Sankhya></Sankhya>
    </Fullfullcol>
    </Layout>
  )
}