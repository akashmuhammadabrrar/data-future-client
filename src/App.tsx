import React from 'react'
import { Outlet } from 'react-router-dom'

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="">
        <Outlet />
      </main>
    </div>
  )
}

export default App
