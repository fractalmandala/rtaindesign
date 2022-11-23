import { Inter_Tight } from "@next/font/google"
import Image from 'next/legacy/image'
import Header from './header'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  return (
    <>
   
      <div className="genflex ff">
        <div className="genflex p4 bk-black">
        <main>{children}</main>
        </div>
        <div className="genflex w40 bk-black">
          <Image src="/Users/amrit/Project Syn/verszeroth/public/images/trinfinity.png"
          width={400}
          height={400}
          alt=""
          />
        </div>
      </div>
    </>
  )
}

export default Layout
