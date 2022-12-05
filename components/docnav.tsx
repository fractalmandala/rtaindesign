import styles from './modules/sidenav.module.css'
import Link from 'next/link'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Docnav = ({ preview, children }: Props) => {
  return (
    <>
    <div className={styles.sidenav}>
    <Link href="/docs/documentation">Documentation</Link>
    <Link href="/docs/about">About</Link>
    </div>
    </>
  )
}

export default Docnav