import PropTypes from "prop-types";
const Category = ({ category, handleSowPeoductByCategoris }) => {
      return (

            <div onClick={() => { handleSowPeoductByCategoris(category) }} className="badge badge-outline cursor-pointer border-cyan-500 text-cyan-500 ">{category}</div>

      );
};
Category.propTypes = {
      category: PropTypes.string.isRequired,
      handleSowPeoductByCategoris: PropTypes.func.isRequired,
}
export default Category;