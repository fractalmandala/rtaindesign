import Layout from '../../components/layout'
import Header from '../../components/header'
import Mother from '../../components/mother'
import Docnav from '../../components/docnav'
import Genflex from '../../components/genflex'
import { getAllDocIds, getDocData } from '../../lib/docs'
import utilStyles from '../../styles/utils.module.css';
import Head from 'next/head';

export default function Doc({ docData }) {
  return (
    <Layout>
      <Head>
        <title className={utilStyles.titular}>{docData.title}</title>
      </Head>
      <Header></Header>
            
            <Docnav> </Docnav>
            <Mother>
            <Genflex>
      <h1>{docData.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: docData.contentHtml }} />
      </Genflex>
</Mother>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllDocIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const docData = await getDocData(params.id)
  return {
    props: {
      docData
    }
  }
}