import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const FatwaTitle = ({ categoryBn, categoryName }) => {
  return (
    <h2 className="text-3xl my-5 flex items-center gap-2">
      {categoryBn} সংক্রান্ত মাসআলা <MdKeyboardDoubleArrowRight size={20} />
      <span></span>{" "}
    </h2>
  );
};

export default FatwaTitle;
