"use client";

import { Option, Select } from "@material-tailwind/react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const SearchFatwa = () => {
  return (
    <div>
      {/* ক্যাটাগোরি */}
      <div className="flex justify-center mt-10">
        <div className="w-72">
          <Select
            className="font-Tiro_Bangla text-lg"
            label="বিষয়ভিত্তিক মাসআলা"
          >
            <Option className="font-Tiro_Bangla text-lg">নামাজ</Option>
            <Option className="font-Tiro_Bangla text-lg">রোজা</Option>
            <Option className="font-Tiro_Bangla text-lg">জাকাত</Option>
            <Option className="font-Tiro_Bangla text-lg">তালাক</Option>
            <Option className="font-Tiro_Bangla text-lg">কুরবানী</Option>
          </Select>
        </div>
      </div>

      {/* বিষয়ভিত্তিক মাসআলা */}
      <div className="lg:px-20 px-10">
        {/* টাইটেল */}
        <h2 className="text-3xl my-10">নতুন মাসআলা সমূহ</h2>

        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 my-5 gap-10">
          {/* মাসআলা কার্ড */}
          <div className="bg-white p-5 rounded">
            <h2 className="text-lg font-semibold">হাম্মাদ - বরিশাল</h2>
            <div className="flex flex-col gap-2">
              <p>
                <span className="text-lg font-semibold">প্রশ্ন: </span>
                <span>আমাদের এলাকায় প্রচলন আছে, কুরবানী করার পর...</span>
              </p>

              <p>
                <span className="text-lg font-semibold">উত্তর: </span>
                <span>
                  আমাদের এলাকায় প্রচলন আছে, কুরবানী করার পর কেউ কেউ তাড়াতাড়ি
                  রান্না করার জন্য কিছু গোশত...
                </span>
              </p>
            </div>
            <div className="flex justify-end mt-2">
              <button className="mt-1 bg-green-500 text-white px-3 py-2 text-sm rounded-lg flex gap-1 items-center justify-center hover:bg-green-800 transition duration-300">
                বিস্তারিত <MdKeyboardDoubleArrowRight />
              </button>
            </div>
          </div>

          {/* মাসআলা কার্ড */}
          <div className="bg-white p-5 rounded">
            <h2 className="text-lg font-semibold">হাম্মাদ - বরিশাল</h2>
            <div className="flex flex-col gap-2">
              <p>
                <span className="text-lg font-semibold">প্রশ্ন: </span>
                <span>আমাদের এলাকায় প্রচলন আছে, কুরবানী করার পর...</span>
              </p>

              <p>
                <span className="text-lg font-semibold">উত্তর: </span>
                <span>
                  আমাদের এলাকায় প্রচলন আছে, কুরবানী করার পর কেউ কেউ তাড়াতাড়ি
                  রান্না করার জন্য কিছু গোশত...
                </span>
              </p>
            </div>
            <div className="flex justify-end mt-2">
              <button className="mt-1 bg-green-500 text-white px-3 py-2 text-sm rounded-lg flex gap-1 items-center justify-center hover:bg-green-800 transition duration-300">
                বিস্তারিত <MdKeyboardDoubleArrowRight />
              </button>
            </div>
          </div>

          {/* মাসআলা কার্ড */}
          <div className="bg-white p-5 rounded">
            <h2 className="text-lg font-semibold">হাম্মাদ - বরিশাল</h2>
            <div className="flex flex-col gap-2">
              <p>
                <span className="text-lg font-semibold">প্রশ্ন: </span>
                <span>আমাদের এলাকায় প্রচলন আছে, কুরবানী করার পর...</span>
              </p>

              <p>
                <span className="text-lg font-semibold">উত্তর: </span>
                <span>
                  আমাদের এলাকায় প্রচলন আছে, কুরবানী করার পর কেউ কেউ তাড়াতাড়ি
                  রান্না করার জন্য কিছু গোশত...
                </span>
              </p>
            </div>
            <div className="flex justify-end mt-2">
              <button className="mt-1 bg-green-500 text-white px-3 py-2 text-sm rounded-lg flex gap-1 items-center justify-center hover:bg-green-800 transition duration-300">
                বিস্তারিত <MdKeyboardDoubleArrowRight />
              </button>
            </div>
          </div>

          {/* মাসআলা কার্ড */}
          <div className="bg-white p-5 rounded">
            <h2 className="text-lg font-semibold">হাম্মাদ - বরিশাল</h2>
            <div className="flex flex-col gap-2">
              <p>
                <span className="text-lg font-semibold">প্রশ্ন: </span>
                <span>আমাদের এলাকায় প্রচলন আছে, কুরবানী করার পর...</span>
              </p>

              <p>
                <span className="text-lg font-semibold">উত্তর: </span>
                <span>
                  আমাদের এলাকায় প্রচলন আছে, কুরবানী করার পর কেউ কেউ তাড়াতাড়ি
                  রান্না করার জন্য কিছু গোশত...
                </span>
              </p>
            </div>
            <div className="flex justify-end mt-2">
              <button className="mt-1 bg-green-500 text-white px-3 py-2 text-sm rounded-lg flex gap-1 items-center justify-center hover:bg-green-800 transition duration-300">
                বিস্তারিত <MdKeyboardDoubleArrowRight />
              </button>
            </div>
          </div>

          {/* মাসআলা কার্ড */}
          <div className="bg-white p-5 rounded">
            <h2 className="text-lg font-semibold">হাম্মাদ - বরিশাল</h2>
            <div className="flex flex-col gap-2">
              <p>
                <span className="text-lg font-semibold">প্রশ্ন: </span>
                <span>আমাদের এলাকায় প্রচলন আছে, কুরবানী করার পর...</span>
              </p>

              <p>
                <span className="text-lg font-semibold">উত্তর: </span>
                <span>
                  আমাদের এলাকায় প্রচলন আছে, কুরবানী করার পর কেউ কেউ তাড়াতাড়ি
                  রান্না করার জন্য কিছু গোশত...
                </span>
              </p>
            </div>
            <div className="flex justify-end mt-2">
              <button className="mt-1 bg-green-500 text-white px-3 py-2 text-sm rounded-lg flex gap-1 items-center justify-center hover:bg-green-800 transition duration-300">
                বিস্তারিত <MdKeyboardDoubleArrowRight />
              </button>
            </div>
          </div>

          {/* মাসআলা কার্ড */}
          <div className="bg-white p-5 rounded">
            <h2 className="text-lg font-semibold">হাম্মাদ - বরিশাল</h2>
            <div className="flex flex-col gap-2">
              <p>
                <span className="text-lg font-semibold">প্রশ্ন: </span>
                <span>আমাদের এলাকায় প্রচলন আছে, কুরবানী করার পর...</span>
              </p>

              <p>
                <span className="text-lg font-semibold">উত্তর: </span>
                <span>
                  আমাদের এলাকায় প্রচলন আছে, কুরবানী করার পর কেউ কেউ তাড়াতাড়ি
                  রান্না করার জন্য কিছু গোশত...
                </span>
              </p>
            </div>
            <div className="flex justify-end mt-2">
              <button className="mt-1 bg-green-500 text-white px-3 py-2 text-sm rounded-lg flex gap-1 items-center justify-center hover:bg-green-800 transition duration-300">
                বিস্তারিত <MdKeyboardDoubleArrowRight />
              </button>
            </div>
          </div>

          {/* মাসআলা কার্ড */}
          <div className="bg-white p-5 rounded">
            <h2 className="text-lg font-semibold">হাম্মাদ - বরিশাল</h2>
            <div className="flex flex-col gap-2">
              <p>
                <span className="text-lg font-semibold">প্রশ্ন: </span>
                <span>আমাদের এলাকায় প্রচলন আছে, কুরবানী করার পর...</span>
              </p>

              <p>
                <span className="text-lg font-semibold">উত্তর: </span>
                <span>
                  আমাদের এলাকায় প্রচলন আছে, কুরবানী করার পর কেউ কেউ তাড়াতাড়ি
                  রান্না করার জন্য কিছু গোশত...
                </span>
              </p>
            </div>
            <div className="flex justify-end mt-2">
              <button className="mt-1 bg-green-500 text-white px-3 py-2 text-sm rounded-lg flex gap-1 items-center justify-center hover:bg-green-800 transition duration-300">
                বিস্তারিত <MdKeyboardDoubleArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchFatwa;
