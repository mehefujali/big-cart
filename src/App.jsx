
import { useState } from 'react'
import './App.css'
import Carts from './components/Carts/Carts'
import Nav from './components/Nav/Nav'
import Products from './components/Products/Products'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Categories from './components/Categories/Categories'
import Footer from './components/Footer/Footer'
function App() {
  const [totalCartPrice, setTotalCartPrice] = useState(0)
  const [productByCategory, setProductByCategory] = useState([])
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
  const handleSowPeoductByCategoris = (category) => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then(res => res.json())
      .then(data => setProductByCategory(data))
  }
  return (
    <>
      <ToastContainer />
      <header >
        <div className=' bg-sky-500'>
          <Nav carts={carts}></Nav>
        </div>
        <div>
          <Categories handleSowPeoductByCategoris={handleSowPeoductByCategoris}></Categories>
        </div>
      </header>
      {/* Main section  */}
      <main className=' mt-16'>
        <section className='flex flex-col md:flex-row container mx-auto md:gap-4 xl:gap-8'>
          <Products handleAddtoCart={handleAddtoCart} productByCategory={productByCategory}></Products>
          <Carts totalCartPrice={totalCartPrice.toFixed(2)} carts={carts} handelRemoveCart={handelRemoveCart}></Carts>
        </section>
      </main>
      <footer className='mt-12'>
        <Footer></Footer>
      </footer>
    </>
  )
}

export default App
