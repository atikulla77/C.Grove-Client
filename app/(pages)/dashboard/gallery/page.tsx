"use client"
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";

const Gallery = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-slate-900">
            Design Gallery
          </h2>
          <button
            // onClick={handleCreate}
            className="flex items-center space-x-2 h-9 px-4 py-2 gap-2 bg-slate-900 hover:bg-slate-800 text-white justify-center rounded-md text-sm font-medium transition-colors cursor-pointer"
          >
            <FaPlus className="text-2.75 text-[#ffffffe3]" />
            <span>Add New Design</span>
          </button>
        </div>

        <div className="relative">
          <IoSearch
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Search designs by title or description..."
            // value={searchQuery}
            // onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 h-12 border-[#00000024] border focus:border-slate-700 bg-transparent  flex w-full rounded-md px-3 py-1 md:text-sm text-base shadow-sm transition-colors focus:outline-none focus:ring-0 disabled:opacity-50 "
          />
        </div>
        <div
          className="text-center py-12 bg-white rounded-lg border border-slate-200"
        >
          <p className="text-slate-600">
            {searchQuery
              ? "No designs found matching your search"
              : "No designs yet. Create your first one!"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
