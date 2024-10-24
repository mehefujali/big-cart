
import { useState } from 'react'
import './App.css'
import Carts from './components/Carts/Carts'
import Nav from './components/Nav/Nav'
import Products from './components/Products/Products'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const [carts, setCarts] = useState([])
  const handleAddtoCart = (product) => {
    const isExist = carts.find(cart => product.id === cart.id)
    isExist || setCarts([...carts, product])
    isExist && toast.error("Cart already added!")
  }
  const handelRemoveCart = (id) => {
    const newCart = carts.filter(cart => cart.id !== id)
    setCarts(newCart)
  }

  return (
    <>
      <ToastContainer />
      <header >
        <div className=' bg-sky-500'>
          <Nav carts={carts}></Nav>
        </div>

      </header>
      {/* Main section  */}
      <main className=' mt-16'>
        <section className='flex flex-col md:flex-row container mx-auto md:gap-4 xl:gap-8'>
          <Products handleAddtoCart={handleAddtoCart}></Products>
          <Carts carts={carts} handelRemoveCart={handelRemoveCart}></Carts>
        </section>
      </main>
    </>
  )
}

export default App
