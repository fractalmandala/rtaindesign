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

       
          Welcome.<br></br>
          <Link href="/ridsections/section1">S1</Link>
          <Link href="/ridsections/section2">S2</Link>
  

      </Layout>

    </>
  )
}
