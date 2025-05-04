import React, { use } from "react";
import { NavLink } from "react-router";

const categoryPromise = fetch("/categories.json").then((res) => res.json());

const Categories = () => {
  const categories = use(categoryPromise);
  return (
    <div>
      <h1 className="font-bold">All categories {categories.length} </h1>
      <div className="grid grid-cols-1 gap-3 mt-5">
        {categories.map((category) => (
          <NavLink
            key={category.id}
            className={
              "btn btn-ghost border-0 hover:bg-base-200 font-semibold text-[#9F9F9F] justify-start"
            }
            to={`/category/${category.id}`}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
