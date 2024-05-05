"use client"

import { Option, Select } from "@material-tailwind/react";

const CategoriesOptions = () => {
  return (
    <div className="flex justify-center mt-10">
      <div className="w-72">
        <Select className="font-Tiro_Bangla text-lg" label="বিষয়ভিত্তিক মাসআলা">
          <Option className="font-Tiro_Bangla text-lg">নামাজ</Option>
          <Option className="font-Tiro_Bangla text-lg">রোজা</Option>
          <Option className="font-Tiro_Bangla text-lg">জাকাত</Option>
          <Option className="font-Tiro_Bangla text-lg">তালাক</Option>
          <Option className="font-Tiro_Bangla text-lg">কুরবানী</Option>
        </Select>
      </div>
    </div>
  );
};

export default CategoriesOptions;
