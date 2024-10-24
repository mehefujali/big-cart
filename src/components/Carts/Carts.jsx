import PropTypes from "prop-types";
import Cart from "../Cart/Cart";
const Carts = ({ carts, handelRemoveCart, totalCartPrice }) => {

      return (
            <div className=" w-full md:w-4/12 xl:w-3/12 border-2 p-4 rounded-lg min-h-96 h-fit ">
                  <h1 className=" text-xl font-bold my-4">Total: ${totalCartPrice} </h1>
                  <div className=" flex flex-col gap-4">
                        {carts.map(cart => <Cart handelRemoveCart={handelRemoveCart} key={cart.id} cart={cart}></Cart>)}
                  </div>
                  {carts.length > 1 && <button className="btn text-lg bg-sky-500 text-white mt-4 w-full">${totalCartPrice}  Buy all</button>}
            </div>
      );
};

Carts.propTypes = {
      carts: PropTypes.array.isRequired,
      handelRemoveCart: PropTypes.func.isRequired,
      totalCartPrice: PropTypes.number.isRequired,
}

export default Carts;