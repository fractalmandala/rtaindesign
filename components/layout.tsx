
import MySwiper from './swiperpanel'
import Header from './header'
import Sidenav from './sidenav'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  return (
    <>
   <Header></Header>
   <Sidenav> </Sidenav>
    <MySwiper> 
    {children}
    </MySwiper>
  
    </>
  )
}

export default Layout
