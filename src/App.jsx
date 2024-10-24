
import { useState } from 'react'
import './App.css'
import Carts from './components/Carts/Carts'
import Nav from './components/Nav/Nav'
import Products from './components/Products/Products'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Categories from './components/Categories/Categories'
function App() {
  const [totalCartPrice, setTotalCartPrice] = useState(0)
  const [carts, setCarts] = useState([])
  const handleAddtoCart = (product) => {
    const isExist = carts.find(cart => product.id === cart.id)
    isExist || setCarts([...carts, product])
    isExist && toast.error("Cart already added!")
    isExist || setTotalCartPrice(totalCartPrice + product.price)
  }
  const handelRemoveCart = (id) => {
    const newCart = carts.filter(cart => cart.id !== id)
    setCarts(newCart)
    const removeCart = carts.find(cart => cart.id === id)
    setTotalCartPrice(totalCartPrice - removeCart.price)
  }

  return (
    <>
      <ToastContainer />
      <header >
        <div className=' bg-sky-500'>
          <Nav carts={carts}></Nav>
        </div>
        <div>
          <Categories></Categories>
        </div>
      </header>
      {/* Main section  */}
      <main className=' mt-16'>
        <section className='flex flex-col md:flex-row container mx-auto md:gap-4 xl:gap-8'>
          <Products handleAddtoCart={handleAddtoCart}></Products>
          <Carts totalCartPrice={totalCartPrice.toFixed(2)} carts={carts} handelRemoveCart={handelRemoveCart}></Carts>
        </section>
      </main>
    </>
  )
}

export default App
