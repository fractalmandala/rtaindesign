import { Inter_Tight } from "@next/font/google"

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  return (
    <>
 
      <div className="genflex ff">
        <div className="genflex p4 w50">
        <main>{children}</main>
        </div>
        <div className="genflex w50 bk-wht"></div>
      </div>
    </>
  )
}

export default Layout
