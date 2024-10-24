import PropTypes from "prop-types";
const Category = ({ category }) => {
      return (

            <div className="badge badge-outline cursor-pointer border-cyan-500 text-cyan-500 ">{category}</div>

      );
};
Category.propTypes = {
      category: PropTypes.string.isRequired
}
export default Category;