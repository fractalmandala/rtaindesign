import Link from 'next/link'
import styles from './mystyles.module.css'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Header =  ({ preview, children }: Props) => {
  return (
    <div className="h56px wff bk-green isheader">
      {children}
    </div>
  )
}

export default Header


