import Layout from '../../components/layout'
import Header from '../../components/header'
import Mother from '../../components/mother'
import Sidenav from '../../components/sidenav'
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
            <Mother>
            <Sidenav> </Sidenav>
            <Genflex>
      <div className={utilStyles.normheading}>{docData.title}</div>
      <div className={utilStyles.normbody} dangerouslySetInnerHTML={{ __html: docData.contentHtml }} />
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