import Layout from '../components/layout'
import Link from 'next/link'


type Props = {
  preview?: boolean
  children: React.ReactNode
}

export default function Home({children,preview}: Props) {
  return (
    <>
    <Layout>
{children}
</Layout>
    </>
  )
}

