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
            <h1>Ṛta in Design</h1>
            <div>
            <ul>
              <li><h4>Introduction and Recap</h4>
              <ul>
                <li><p>Design, Systems and Dharma</p></li>
                <li><p>What this Guide Contains</p></li>
                <li><p>How to Use this Guide</p></li>
                </ul>
                </li>
              <li>< Link href="/ridsections">Sections</Link></li>
              <li>< Link href="/about">About</Link></li>
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