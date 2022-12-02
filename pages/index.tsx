import Layout from '../components/layout'
import {getSortedPostsData} from '../lib/posts'
import Link from 'next/link'
import Header from '../components/header'
import Mother from '../components/mother'
import Sidenav from '../components/sidenav'
import Genflex from '../components/genflex'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    }
  }
}

export default function Home ({allPostsData}) {
  return (
          <Layout>
            <Header></Header>
            <Mother>
            <Sidenav>
            <ul>
              {allPostsData.map(({ id, title }) => (
                <li key={id}>
                  <Link href={`/repository/${id}`}>{title}</Link>
                </li>
              ))}
            </ul>
            </Sidenav>
            <Genflex> </Genflex>
          </Mother>
          </Layout>        
  )
}

