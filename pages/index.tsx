import Container from '../components/container'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Post from '../interfaces/post'
import Link from 'next/link'

type Props = {
  allPosts: Post[]
}

export default function Index({ allPosts }: Props) {
  return (
    <>
      <Layout>
      
        <Container>
            <div className="headbox">
            <h1>Ṛta in Design</h1>
            </div>
            <div className="mainlist">
            <ul>
              <li className="listing">< Link href="/ridsections">Sections</Link></li>
              <li className="listing">< Link href="/about">About</Link></li>
              <li className="listing">< Link href="/pageofswiper">Swiper</Link></li>
            </ul>
            </div>
        </Container>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}