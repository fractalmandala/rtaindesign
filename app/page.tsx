'use client';
import HomePage from './home';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

async function getPosts() {
  const res = await fetch('https://...');
  const posts = await res.json();
  return posts;
}

export default async function Page() {
  // Fetch data directly in a Server Component
  const recentPosts = await getPosts();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const staticExample = await fetch(`/Users/amrit/Documents/Files/Construction Materia/Lots of Text/html/pAda-index_sa-dharma.htm`, { cache: 'force-cache' });
  // Forward fetched data to your Client Component
  return <HomePage recentPosts={recentPosts} />;
}