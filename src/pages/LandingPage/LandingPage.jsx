import React from 'react'
import { Footer } from '../../components'
import { Outlet } from 'react-router-dom'

export default function LandingPage() {
  return (
    <div className="overflow-x-hidden">
      <Outlet />
      <Footer />
    </div>
  )
}
