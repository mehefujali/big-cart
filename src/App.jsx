
import { useState } from 'react'
import './App.css'
import Carts from './components/Carts/Carts'
import Nav from './components/Nav/Nav'
import Products from './components/Products/Products'

function App() {
  const [carts, setCarts] = useState([])
  const handleAddtoCart = (product) => {
    setCarts([...carts, product])
  }

  return (
    <>
      <header >
        <div className=' bg-sky-500'>
          <Nav carts={carts}></Nav>
        </div>

      </header>
      {/* Main section  */}
      <main className=' mt-16'>
        <section className='flex flex-col md:flex-row container mx-auto gap-8'>
          <Products handleAddtoCart={handleAddtoCart}></Products>
          <Carts carts={carts}></Carts>
        </section>
      </main>
    </>
  )
}

export default App
