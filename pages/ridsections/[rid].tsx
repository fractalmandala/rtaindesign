import { useRouter } from 'next/router'
import Link from 'next/link'

const Section = () => {
  const router = useRouter()
  const { rid }= router.query

  return (
    <div>
      <h1>Section: {rid} </h1>
    </div>
  )
}

export default Section

export async function getServerSideProps({params, req, res}) {
  const response = await fetch(`http://localhost:3000/ridsections/section/${params.id}`)

  if (!response.ok) {
    res.writeHead(302, { Location: '/ridsections' })
    res.end()
    return {props: {}}
  }

  const {data} = await response.json()
  
  
  if (data) {
    return {
      props: {note: data}
    }
  }
}