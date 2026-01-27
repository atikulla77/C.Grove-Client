import { mockData } from "@/components/shared/mock";
import { ArrowLeft, ExternalLink, Filter } from "lucide-react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { IoSearch } from "react-icons/io5";

const Gallery = () => {
  const { bookMockups } = mockData;
  const firstEightBooks = bookMockups.slice(0, 8);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-linear-to-b from-gray-50 to-white">
        <div className="container px-6 mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4" />
            <span className="font-medium text-[14px]">Back to Home</span>
          </Link>

          <div className="text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              Complete <span className="text-gray-400 italic">Collection</span>
            </h1>
            <p className="text-[18px] text-gray-600 max-w-3xl mx-auto mb-7">
              Explore our entire library of professional book cover mockups.
              Click any mockup to view on Amazon KDP.
            </p>
            <div className="inline-block text-[12px] px-6 py-[10px] bg-gray-900 text-white rounded-full font-medium">
              {25} Mockups Available
            </div>
          </div>
        </div>
      </section>

      <section className="pt-15 pb-20">
        <div className="pt-4 pb-3 border-b border-gray-200 sticky top-15.75 bg-white z-40">
          <div className="container mx-auto">
            <div className="w-full h-10.5 flex items-center gap-2">
              <div className="w-[calc(100%-100px)] h-full relative">
                <IoSearch
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Search designs by title..."
                  className="pl-10 h-full border-[#e5e5e5] border focus:border-slate-700 bg-transparent  flex w-full rounded-full px-3 md:text-sm text-base transition-colors focus:outline-none focus:ring-0 disabled:opacity-50"
                />
              </div>

              <button className="min-w-25 h-full flex items-center justify-center text-sm bg-slate-900 hover:bg-slate-800 text-white gap-1.5 rounded-full cursor-pointer ">
                <Filter className="w-3.5 -mt-px" />
                <span>Filter</span>
              </button>
            </div>

            {/* Results Count */}
            <div className="text-center pt-4">
              <p className="text-gray-600 text-[13px]">
                Showing <span className="font-semibold text-gray-700">8</span>{" "}
                of <span className="font-semibold text-gray-700">25</span>{" "}
                mockups
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto pt-15">
          {/* Uniform Grid Layout - All Same Size */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {firstEightBooks.map((book) => {
              return (
                <Link
                  key={book.id}
                  href={book.amazonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-2xl bg-gray-100 cursor-pointer"
                >
                  <div className="aspect-2/3 relative overflow-hidden">
                    <Image
                      src={book.image}
                      alt={book.title}
                      width={1800}
                      height={2700}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 active:scale-110"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 active:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-5 text-white transform translate-y-4 group-hover:translate-y-0 active:translate-y-0 transition-transform duration-300">
                        <h3 className="2xl:text-[22px] text-[17px] font-semibold 2xl:mb-2 mb-1">
                          {book.title}
                        </h3>
                        <p className="2xl:text-sm text-[13px] text-gray-200 2xl:mb-3 mb-2">
                          {book.description}
                        </p>
                        <div className="flex items-center gap-2 2xl:text-sm text-[13px] font-medium">
                          <span>View on Amazon</span>
                          <ExternalLink className="w-4 h-4" />
                        </div>
                      </div>
                    </div>

                    {/* Corner Badge */}
                    <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 active:scale-110 transition-transform duration-300">
                      <ExternalLink className="w-5 h-5 text-gray-900" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Pagination */}
          <ul
            className={`w-full flex justify-center items-center mt-12 sm2:mb-[45px] mb-7.5`}
          >
            <li className="sm2:w-10 w-8.25 sm2:h-10 h-8.25 sm2:text-[13px] text-[12px] text-[#aeafb0f1] font-semibold flex justify-center items-center border-2 border-[#e8e9e8ab] rounded-lg cursor-no-drop mx-0.75">
              <FaChevronLeft />
            </li>
            <li className="sm2:w-10 w-8.25 sm2:h-10 h-8.25 sm2:text-[14px] text-[13px] text-white bg-slate-900 border-slate-900 font-semibold flex justify-center items-center border-2 rounded-lg cursor-pointer mx-0.75 transition-all duration-1000">
              1
            </li>
            <li className="sm2:w-10 w-8.25 sm2:h-10 h-8.25 sm2:text-[14px] text-[13px] text-[#3B3C40] border-[#E8E9E8] hover:shadow-sm font-semibold flex justify-center items-center border-2 rounded-lg cursor-pointer mx-0.75 transition-all duration-300">
              2
            </li>
            <li className="sm2:w-10 w-8.25 sm2:h-10 h-8.25 sm2:text-[14px] text-[13px] text-[#3B3C40] border-[#E8E9E8] hover:shadow-sm font-semibold flex justify-center items-center border-2 rounded-lg cursor-pointer mx-0.75 transition-all duration-300">
              3
            </li>
            <li className="sm2:w-10 w-8.25 sm2:h-10 h-8.25 sm2:text-[14px] text-[13px] text-[#3B3C40] border-[#E8E9E8] hover:shadow-sm font-semibold flex justify-center items-center border-2 rounded-lg cursor-pointer mx-0.75 transition-all duration-300">
              <FaChevronRight />
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
