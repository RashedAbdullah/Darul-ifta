"use client";

import { Option, Select } from "@material-tailwind/react";
import { useRouter } from "next/navigation";

const CategoriesOptions = () => {
  const router = useRouter();

  const handleCategories = (value) => {
    router.push(`/category/${value}`);
  };
  return (
    <div className="flex justify-center mt-10">
      <div className="w-72">
        <Select
          onChange={handleCategories}
          className="font-Tiro_Bangla text-lg"
          label="বিষয়ভিত্তিক মাসআলা"
        >
          <Option value="salat" className="font-Tiro_Bangla text-lg">
            নামাজ
          </Option>
          <Option value="siyam" className="font-Tiro_Bangla text-lg">
            রোজা
          </Option>
          <Option value="zakat" className="font-Tiro_Bangla text-lg">
            জাকাত
          </Option>
          <Option value="talaq" className="font-Tiro_Bangla text-lg">
            তালাক
          </Option>
          <Option value="qurbani" className="font-Tiro_Bangla text-lg">
            কুরবানী
          </Option>
        </Select>
      </div>
    </div>
  );
};

export default CategoriesOptions;
