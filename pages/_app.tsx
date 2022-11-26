import { AppProps } from 'next/app'
import '../styles/index.css'

import { NextUIProvider } from '@nextui-org/react';
import Layout from '../components/layout'


  

export default function MyApp({ Component, pageProps }: AppProps) {

return (
  <NextUIProvider> 
    
    
  <Layout> 
      <Component {...pageProps} />
   
      </Layout>
  
  </NextUIProvider>
)
}

