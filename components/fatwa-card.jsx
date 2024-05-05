import Link from "next/link";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const FatwaCard = () => {
  return (
    <div className="bg-white p-5 rounded shadow-lg">
      <h2 className="text-lg font-semibold">হাম্মাদ - বরিশাল</h2>
      <div className="flex flex-col gap-2">
        <p>
          <span className="text-lg font-semibold">প্রশ্ন: </span>
          <span>আমাদের এলাকায় প্রচলন আছে, কুরবানী করার পর...</span>
        </p>

        <p>
          <span className="text-lg font-semibold">উত্তর: </span>
          <span>
            আমাদের এলাকায় প্রচলন আছে, কুরবানী করার পর কেউ কেউ তাড়াতাড়ি রান্না
            করার জন্য কিছু গোশত...
          </span>
        </p>
      </div>
      <div className="flex justify-end mt-2">
        <Link href={`/details/lskdjhf`}>
          <button className="mt-1 bg-green-500 text-white px-5 py-2 text-sm rounded-lg flex gap-1 items-center justify-center hover:bg-green-800 transition duration-300">
            বিস্তারিত <MdKeyboardDoubleArrowRight />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FatwaCard;
