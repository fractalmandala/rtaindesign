import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default () => {
  const router = useRouter()
  const { rid } = router.query

  return (
    <>
    <h1>Section: {rid}</h1>
    <div>
      <Link href="/">Return</Link>
    </div>
    </>
  )
}