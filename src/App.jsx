
import './App.css'
import Carts from './components/Carts/Carts'
import Nav from './components/Nav/Nav'
import Products from './components/Products/Products'

function App() {


  return (
    <>
      <header >
        <div className=' bg-sky-500'>
          <Nav></Nav>
        </div>

      </header>
      {/* Main section  */}
      <main className=' mt-16'>
        <section className='flex flex-col md:flex-row container mx-auto gap-8'>
          <Products></Products>
          <Carts></Carts>
        </section>
      </main>
    </>
  )
}

export default App
