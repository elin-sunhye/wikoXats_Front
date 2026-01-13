'use client'

import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export default function AOSProvider() {
  useEffect(() => {
      AOS.init({
          duration: 800,
          easing: 'ease-out-cubic'
      })
  }, [])

  return null
}