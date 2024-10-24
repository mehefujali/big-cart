import { useEffect, useState } from "react";
import Category from "../Category/Category";

const Categories = () => {
      const [categories, setCategories] = useState([])
      useEffect(() => {
            fetch('https://fakestoreapi.com/products/categories')
                  .then(res => res.json())
                  .then(data => setCategories(data))
      }, [])
      return (
            <div className=" flex mt-2 gap-2 justify-center">
                  {categories.map((category, idx) => <Category key={idx} category={category}></Category>)}
            </div>
      );
};

export default Categories;