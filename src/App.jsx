import { Outlet } from 'react-router-dom'
import { Footer, Header } from './Chrome'
import './App.css'

export default function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
