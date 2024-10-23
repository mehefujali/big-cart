import PropTypes from "prop-types";
import { useState } from "react";
import { IoIosStar } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { IoCart } from "react-icons/io5";
const Product = ({ product, handleAddtoCart }) => {
      const { title, image, price, rating } = product
      const [cartAddStatus, setCartAddStatus] = useState(false)
      const handelCart = () => {
            setCartAddStatus(true)
            handleAddtoCart(product)
      }
      return (
            <div className=" 
            flex flex-col gap-1 w-full h-full border p-4  text-start rounded-lg
            shadow-sm
            
            ">
                  <img className=" w-44 h-44 object-contain mx-auto" src={image} alt="" />
                  <div className=" mt-3 flex flex-col gap-1">
                        <h1 className=" font-bold">{title}</h1>
                        <p>$ {price}</p>
                        <p className=" flex items-center gap-1">{rating.rate} <IoIosStar className=" text-yellow-600" /> <span >{rating.count} rating</span></p>
                  </div>
                  <button className="btn w-fit mt-4 bg-transparent border-2 border-sky-500 text-sky-500  hover:bg-transparent" onClick={handelCart}>{cartAddStatus ? <IoCart className="text-xl" /> : <IoCartOutline className=" text-xl" />} Add to cart</button>
            </div>
      );
};



Product.propTypes = {
      product: PropTypes.object.isRequired,
      handleAddtoCart: PropTypes.func.isRequired
}

export default Product;