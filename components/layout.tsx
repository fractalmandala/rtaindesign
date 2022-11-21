import { Inter_Tight } from "@next/font/google"

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  return (
    <>
 
      <div>
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout
