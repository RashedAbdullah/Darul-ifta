import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import FatwaCard from "./fatwa-card";

const SearchFatwa = () => {
  return (
    // {/* বিষয়ভিত্তিক মাসআলা */}
    <div className="lg:px-20 px-10 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 my-5 gap-10">
      <div className="col-span-4">
        {/* টাইটেল */}
        <h2 className="text-3xl my-5 flex items-center gap-2">
          নতুন মাসআলা <MdKeyboardDoubleArrowRight size={20} />
          <span></span>{" "}
        </h2>
        <div className="lg:col-span-4 md:col-span-3 col-span-1 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          {/* মাসআলা কার্ড */}
          <FatwaCard />
          <FatwaCard />
          <FatwaCard />
        </div>
      </div>
    </div>
  );
};

export default SearchFatwa;
