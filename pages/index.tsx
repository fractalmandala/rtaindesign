import Link from 'next/link'
import { NextUIProvider } from '@nextui-org/react';
import Mother from '../components/mother'
import Sidenav from '../components/sidenav'
import MySwiper from '../components/swiperpanel'


export default function Home() {
  return (
    <NextUIProvider>
      <Mother>
        <Sidenav> Ṛta in Design <br></br> Fractal Maṇḍala</Sidenav>
        <MySwiper> </MySwiper>
      </Mother>
    </NextUIProvider>
  )
}

