import PropTypes from "prop-types";
import Cart from "../Cart/Cart";
const Carts = ({ carts }) => {
      return (
            <div className=" w-full md:w-4/12 xl:w-3/12 border-2 p-4 rounded-lg ">
                  <div className=" flex flex-col gap-4">
                        {carts.map(cart => <Cart key={cart.id} cart={cart}></Cart>)}
                  </div>
                  {carts.length > 1 && <button className="btn bg-sky-500 text-white mt-4 w-full">Buy all</button>}
            </div>
      );
};

Carts.propTypes = {
      carts: PropTypes.array.isRequired
}

export default Carts;