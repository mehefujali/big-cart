import { useEffect } from "react";
import { useState } from "react";
import Product from "../Product/Product";
import PropTypes from "prop-types";
const Products = ({ handleAddtoCart }) => {
      const [products, setProducts] = useState([])
      useEffect(() => {
            fetch('https://fakestoreapi.com/products')
                  .then(res => res.json())
                  .then(data => setProducts(data))
      }, [])


      return (
            <div className=" w-11/12 mx-auto md:w-8/12 xl:w-9/12 grid md:grid-cols-2 xl:grid-cols-3 gap-5  ">
                  {products.map(product => <Product handleAddtoCart={handleAddtoCart} key={Product.id} product={product}></Product>)}
            </div>
      );
};

Products.propTypes = {
      handleAddtoCart: PropTypes.func.isRequired
}

export default Products;