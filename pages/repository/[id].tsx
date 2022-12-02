import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import utilStyles from '../../styles/utils.module.css';
import Head from 'next/head';

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title className={utilStyles.titular}>{postData.title}</title>
      </Head>
      <div className={utilStyles.reader}>
      <div className={utilStyles.heading1}>{postData.title}</div>
      <div className={utilStyles.textbody} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}