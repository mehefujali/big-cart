import { useEffect } from "react";
import { useState } from "react";
import Product from "../Product/Product";

const Products = () => {
      const [products, setProducts] = useState([])
      useEffect(() => {
            fetch('https://fakestoreapi.com/products')
                  .then(res => res.json())
                  .then(data => setProducts(data))
      }, [])


      return (
            <div className=" w-9/12 grid md:grid-cols-3 gap-5  ">
                  {products.map(product => <Product key={Product.id} product={product}></Product>)}
            </div>
      );
};

export default Products;