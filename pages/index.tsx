import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Post from '../interfaces/post'
import Link from 'next/link'
import { getSortedPostsData } from '../lib/posts'

type Props = {
  allPosts: Post[]
}

export default function Index({ allPosts }: Props) {
  return (
    <>
      <Layout>
        <Head>
          <title>A Place to Build and Create</title>
        </Head>
        <Container>
          <Intro />
            <h5>A List of Sections:</h5>
            <div>
            <ul>
              <li>< Link href="/posts/intent">first</Link></li>
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