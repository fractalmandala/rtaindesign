import Link from 'next/link'
import { useEffect, useState } from 'react'
import supabase from '../../lib/supaclient'
import Chmim from '../../components/gret-ch'
import Vrmim from '../../components/gret-verse'

export default function Text () {
  return (
    <div>
    <Chmim></Chmim>
    <Vrmim></Vrmim>
    </div>
  )
}