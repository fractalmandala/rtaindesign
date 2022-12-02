'use client';
import Layout from '../../dashboard/layout'
export async function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }]
}

async function getPost(params) {
  const res = await fetch(`https://.../texts/${params.id}`);
  const post = await res.json();

  return post;
}

export default async function Post({ params }) {
  const post = await getPost(params);

  return <Layout>{post}</Layout>
}