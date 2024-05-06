import CategoriesOptions from "@/components/categories-options";
import Header from "@/components/header";
import React from "react";

const CategoryLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <CategoriesOptions />
      {children}
    </div>
  );
};

export default CategoryLayout;
