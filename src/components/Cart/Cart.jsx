import PropTypes from "prop-types"
const Cart = ({ cart, handelRemoveCart }) => {
      const { image, title } = cart
      return (
            <div className=" flex gap-4 border p-4 rounded-lg items-center justify-between">
                  <img className="w-20 h-20 object-contain" src={image} alt="" />
                  <h1 className=" text-sm">{title}</h1>
                  <div className=" flex flex-col gap-3">
                        <button className=" text-red-500 text-sm" onClick={() => handelRemoveCart(cart.id)}>Delete</button>
                        <button className=" btn btn-sm   bg-sky-500 text-white">Buy</button>
                  </div>
            </div>
      )
}
Cart.propTypes = {
      cart: PropTypes.object.isRequired,
      handelRemoveCart: PropTypes.func.isRequired
}
export default Cart
