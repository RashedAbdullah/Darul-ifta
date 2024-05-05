import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import FatwaCard from "./fatwa-card";

const RelatedFatwas = () => {
  return (
    <div className="col-span-1">
      {/* টাইটেল */}
      <h2 className="text-3xl my-5 flex items-center gap-2 lg:mt-0 mt-10">
        প্রাসঙ্গিক মাসআলা <MdKeyboardDoubleArrowRight size={20} />
        <span></span>{" "}
      </h2>
      <div className="lg:col-span-1 md:col-span-2 col-span-1 grid grid-cols-1 gap-4">
        {/* মাসআলা কার্ড */}
        <FatwaCard />
        <FatwaCard />
        <FatwaCard />
      </div>
    </div>
  );
};

export default RelatedFatwas;
