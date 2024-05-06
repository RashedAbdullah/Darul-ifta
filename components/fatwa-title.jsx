import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const FatwaTitle = () => {
  return (
    <h2 className="text-3xl my-5 flex items-center gap-2">
      নতুন মাসআলা <MdKeyboardDoubleArrowRight size={20} />
      <span></span>{" "}
    </h2>
  );
};

export default FatwaTitle;
