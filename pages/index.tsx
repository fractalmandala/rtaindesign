import Layout from '../components/layout'
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
    ṛta in design
    </Layout>
    </>
  )
}
