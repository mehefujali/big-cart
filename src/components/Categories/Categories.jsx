import { useEffect, useState } from "react";
import Category from "../Category/Category";
import PropTypes from "prop-types";
const Categories = ({ handleSowPeoductByCategoris }) => {
      const [categories, setCategories] = useState([])
      useEffect(() => {
            fetch('https://fakestoreapi.com/products/categories')
                  .then(res => res.json())
                  .then(data => setCategories(data))
      }, [])
      return (
            <div className=" flex mt-2 gap-2 justify-center">
                  {categories.map((category, idx) => <Category handleSowPeoductByCategoris={handleSowPeoductByCategoris} key={idx} category={category}></Category>)}
            </div>
      );
};


Categories.propTypes = {
      handleSowPeoductByCategoris: PropTypes.func.isRequired
}
export default Categories;