import supabase from '../../lib/supabase'
import { notFound } from 'next/navigation'

export const revalidate = 60

export async function generateStaticParams() {
  const {data:posts} = await supabase.from('db-amarakosha').select('Index')

  return posts?.map(({ id })) => ({
    id,
  })
}

export default async function Post({ params: { id } }: { params: { id: string } }) {
  const { data } = await supabase.from('db-amarakosha').select().match({ id }).single()

  if (!data) {
    notFound()
  }

  return <pre>{JSON.stringify(data, null, 2)}</pre>
}