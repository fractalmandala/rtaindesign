import Link from 'next/link'
import supabase from '../lib/supabase'

export default async function Posts() {
  const { data: posts } = await supabase.from('db-amarakosha').select('msr, iast')

  if (!posts) {
    return <p>No posts found.</p>
  }

  return posts.map((post) => (
    <p key={post.msr}>
      <Link href={`/static/${post.msr}`}>{post.iast}</Link>
    </p>
  ))
}