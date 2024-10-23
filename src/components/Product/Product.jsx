import PropTypes from "prop-types";
const Product = ({ product }) => {
      const { title, image, price } = product
      return (
            <div className=" flex flex-col gap-1 w-full h-full">
                  <img className=" w-44 h-44 object-contain" src={image} alt="" />
                  <h1 className=" font-bold">{title}</h1>
                  <p>$ {price}</p>
            </div>
      );
};



Product.propTypes = {
      product: PropTypes.object.isRequired
}

export default Product;