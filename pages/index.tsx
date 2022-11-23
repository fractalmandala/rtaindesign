import Container from '../components/container'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Post from '../interfaces/post'
import Link from 'next/link'
import { animate } from 'motion'

type Props = {
  allPosts: Post[]
}



export default function Index({ allPosts }: Props) {
  return (
    <>
      <Layout>
        <Container>
         <small>Ṛta in Design</small>
        </Container>
      </Layout>
    </>
  )
}
