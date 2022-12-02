import Layout from '../components/layout'
import {getSortedPostsData} from '../lib/posts'
import Link from 'next/link'

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
      <ul>
          {allPostsData.map(({ id, title }) => (
            <li key={id}>
              <Link href={`/repository/${id}`}>{title}</Link>
              
            </li>
          ))}
        </ul>
    </Layout>
  )
}

