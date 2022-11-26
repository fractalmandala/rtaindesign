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
   
    
        <div className="genflex p4">
        <main>{children}</main>
        </div>
       
     
    </>
  )
}

export default Layout
