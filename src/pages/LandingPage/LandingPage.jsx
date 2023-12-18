import React from 'react'
import { Footer, NavBar } from '../../components'
import { Outlet } from 'react-router-dom'

export default function LandingPage() {
  return (
    <div className="overflow-x-hidden">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  )
}
