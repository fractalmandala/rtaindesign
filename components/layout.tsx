import './mystyles.module.css'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  return (
    <>
 
    <div className="bk-black ff">
    {children}
    </div>
  
    </>
  )
}

export default Layout
