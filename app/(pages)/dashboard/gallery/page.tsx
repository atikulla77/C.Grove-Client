"use client";
import { mockData } from "@/components/shared/mock";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { LuGitBranchPlus } from "react-icons/lu";
import {
  MdDelete,
  MdOutlineCheckBoxOutlineBlank,
  MdRebaseEdit,
} from "react-icons/md";
import { FaCheck, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Gallery = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [dataLength, setDataLength] = useState(0);
  const { bookMockups } = mockData;
  const firstEightBooks = bookMockups.slice(0, 20);

  // Select Cards Informations
  const [selectCardsInfo, setSelectCardsInfo] = useState<
    { id: number; title: string }[]
  >([]);
  // console.log("select Cards Info", selectCardsInfo.length);

  const selectAllCards =
    selectCardsInfo.length === firstEightBooks.length &&
    firstEightBooks.length > 0;

  const [selectAll, setSelectAll] = useState(false);
  const handleSelectAllCards = (isValid: boolean) => {
    if (isValid) {
      setSelectAll(true);
      setSelectCardsInfo(
        firstEightBooks.map((item) => ({
          id: item.id,
          title: item.title,
        })),
      );
    } else {
      setSelectAll(false);
      setSelectCardsInfo([]);
    }
  };

  // Editing Mockup....
  const [selectedEditMockupInfo, setSelectedEditMockupInfo] = useState<{
    id: number;
    title: string;
    description: string;
    image: string;
    amazonLink: string;
    category: string;
  }>({
    id: 0,
    title: "string",
    description: "string",
    image: "string",
    amazonLink: "string",
    category: "string",
  });
  const [isModalEditMockupOpen, setIsModalEditMockupOpen] = useState(false);
  const openModalEditMockup = () => {
    if (selectCardsInfo.length !== 1) {
      return;
    }

    let selectMockupid: number;
    selectCardsInfo.map((id) => {
      selectMockupid = id.id;
    });

    const result = firstEightBooks.filter((item) => item.id === selectMockupid);
    setSelectedEditMockupInfo(result[0]);

    setIsModalEditMockupOpen(true);
  };

  // Deleting Mockup's....
  const [isModalDeleteMockupOpen, setIsModalDeleteMockupOpen] = useState(false);
  const openModalDeleteMockup = () => {
    if (selectCardsInfo.length <= 0) {
      return;
    }
    setIsModalDeleteMockupOpen(true);
  };

  return (
    <div className="py-8">
      <div className="space-y-6">
        <div className="container mx-auto px-2 flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-slate-900">
            Design Gallery
          </h2>

          {/* <div className="flex gap-2 ">
            <button className="flex items-center space-x-2 h-9 px-4 py-2 gap-1 bg-slate-900 hover:bg-slate-800 text-white justify-center rounded-md text-[13px] font-medium transition-colors cursor-pointer">
              <LuGitBranchPlus className="text-[16px] text-[#ffffffe3]" />
              <span>Add Multiple Design</span>
            </button>

            <button className="flex items-center space-x-2 h-9 px-4 py-2 gap-1 bg-slate-900 hover:bg-slate-800 text-white justify-center rounded-md text-[13px] font-medium transition-colors cursor-pointer">
              <FaPlus className="text-[15px] text-[#ffffffe3]" />
              <span>Add New Design</span>
            </button>
          </div> */}
        </div>

        <div className="pt-4 pb-3 border-b border-gray-200 bg-slate-50 sticky top-15.75 z-40">
          <div className="container mx-auto px-2 relative!">
            <IoSearch
              className="absolute left-5 top-1/2 transform -translate-y-1/2 text-slate-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search designs by title or description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-11 border-[#e5e5e5] border focus:border-slate-700 flex w-full rounded-full px-3 py-1 md:text-sm text-base transition-colors focus:outline-none focus:ring-0 disabled:opacity-50 bg-white"
            />
          </div>
          {/* Results Count */}
          <div className="container mx-auto px-2 text-center pt-4 relative">
            <p className="text-gray-600 text-[13px]">
              Showing <span className="font-semibold text-gray-700">20</span> of{" "}
              <span className="font-semibold text-gray-700">25</span> mockups
            </p>
            <div
              className="absolute left-2 bottom-0 cursor-pointer"
              onClick={() => handleSelectAllCards(!selectAll)}
            >
              <div className="flex items-center text-gray-600">
                {selectAllCards ? (
                  // <FaCheckSquare className="text-[16px]" />
                  <div className="w-4 h-4 mr-px bg-[#22CD72] rounded-[3px] flex items-center justify-center">
                    <FaCheck className="text-[10px] text-white" />
                  </div>
                ) : (
                  <MdOutlineCheckBoxOutlineBlank className="text-[17px]" />
                )}
                <p className="text-[14px] font-semibold pl-1 select-none">
                  Select All ({selectCardsInfo.length})
                </p>
              </div>
            </div>
            <div className="absolute right-2 bottom-0 pb-px flex gap-4">
              <div
                className={`${
                  selectCardsInfo.length !== 1
                    ? "cursor-no-drop opacity-50"
                    : "cursor-pointer"
                } text-[#02bb02] flex items-center`}
                onClick={() => openModalEditMockup()}
              >
                <MdRebaseEdit className="text-[16px]" />
                <p className="text-[14px] font-medium pl-1 leading-0 select-none">
                  Edit
                </p>
              </div>
              <div
                className={`${
                  selectCardsInfo.length <= 0
                    ? "cursor-no-drop opacity-50"
                    : "cursor-pointer"
                } text-red-600 flex items-center`}
                onClick={() => openModalDeleteMockup()}
              >
                <MdDelete className="text-[16px]" />
                <p className="text-[14px] font-medium pl-1 leading-0 select-none">
                  Delete
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={`container mx-auto px-2 pb-12 pt-7`}>
          <div
            className={`${
              dataLength === 0 ? "hidden" : ""
            } text-center bg-white rounded-lg border border-[#e5e5e5]`}
          >
            <p className="text-slate-600">
              {searchQuery
                ? "No designs found matching your search"
                : "No designs yet. Create your first one!"}
            </p>
          </div>

          <div className={`${dataLength === 0 ? "" : "hidden"} `}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {firstEightBooks.map((mockup) => {
                const isSelected = selectCardsInfo.some(
                  (item) => item.id === mockup.id,
                );

                return (
                  <div
                    key={mockup.id}
                    className={`h-fit group overflow-hidden transform rounded-xl border border-[#e5e5e5] bg-[#ffffff] text-[#0a0a0a] shadow relative transition-all duration-300`}
                  >
                    {isSelected ? (
                      <div
                        onClick={() => {
                          setSelectCardsInfo((prev) =>
                            prev.filter((info) => info.id !== mockup.id),
                          );
                        }}
                        className="w-full h-full absolute left-0 top-0 pl-3.5 pt-3.5 bg-[#00000073] z-20"
                      >
                        <div className="w-5 h-5 bg-[#22CD72] rounded-[3px] flex items-center justify-center">
                          <FaCheck className="text-[13px] text-white mt-px" />
                        </div>
                      </div>
                    ) : (
                      <div className="absolute top-0 left-0 pl-3 pt-3 z-20">
                        <MdOutlineCheckBoxOutlineBlank
                          onClick={() => {
                            setSelectCardsInfo((prev) => [
                              ...prev,
                              { id: mockup.id, title: mockup.title },
                            ]);
                          }}
                          className="text-[25px] text-white drop-shadow-[0_0_10px_rgba(0, 0, 0, 1)]"
                        />
                      </div>
                    )}

                    <div className="relative overflow-hidden aspect-2/3 bg-gray-100">
                      <Image
                        src={mockup.image}
                        alt={mockup.title}
                        width={1800}
                        height={2700}
                        className="w-full h-full object-cover transition-transform duration-500 select-none"
                      />
                    </div>
                    <div
                      className={`absolute inset-0 w-full bg-linear-to-t from-black/50 via-black/0 to-transparent`}
                    >
                      <div className="absolute left-0 right-0 bottom-0 w-full p-4">
                        <h3 className="text-[16px] text-white font-semibold mb-1">
                          {mockup.title}
                        </h3>
                        <p className="text-[13px] text-gray-200 leading-4 mb-1">
                          {mockup.description}
                        </p>
                        <Link href={mockup.amazonLink} target="_blank">
                          <p className="text-[13px] text-blue-400 hover:underline leading-4">
                            {mockup.amazonLink}
                          </p>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
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

        <DeleteMockupModal
          isOpen={isModalDeleteMockupOpen}
          onClose={() => setIsModalDeleteMockupOpen(false)}
          deleteMockupInfo={selectCardsInfo}
        />
        <EditMockupModal
          isOpen={isModalEditMockupOpen}
          onClose={() => setIsModalEditMockupOpen(false)}
          editMockupInfo={selectedEditMockupInfo}
        />
      </div>
    </div>
  );
};

export default Gallery;

// Edit Mockup Modal
interface EditMockupModalProps {
  isOpen: boolean;
  onClose: () => void;
  editMockupInfo: {
    id: number;
    title: string;
    description: string;
    image: string;
    amazonLink: string;
    category: string;
  };
}
const EditMockupModal = ({
  isOpen,
  onClose,
  editMockupInfo,
}: EditMockupModalProps) => {
  // scroll bar hidden
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup (important)
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState(editMockupInfo.title);
  const [description, setDescription] = useState(editMockupInfo.description);
  const [imageURL, setImageURL] = useState(editMockupInfo.image);
  const [mockupLink, setMockupLink] = useState(editMockupInfo.amazonLink);

  useEffect(() => {
    if (!editMockupInfo) return;

    setTitle(editMockupInfo.title);
    setDescription(editMockupInfo.description);
    setImageURL(editMockupInfo.image);
    setMockupLink(editMockupInfo.amazonLink);
  }, [editMockupInfo, isOpen]);

  const onConfirm = (e: React.FormEvent) => {
    console.log({
      title,
      description,
      imageURL,
      mockupLink,
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center p-4 animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl sm:max-w-213.75 w-full flex justify-between p-6 animate-in zoom-in-95 duration-200">
        <div className="sm:max-w-112.5 w-full">
          {/* Icon */}
          <div className="mx-auto flex items-center justify-center h-14 w-14 rounded-full bg-[#02bb022c] mb-4">
            <MdRebaseEdit className="text-[25px] text-[#02bb02]" />
          </div>

          {/* Content */}
          <form onSubmit={onConfirm} className="space-y-3.5">
            <div className="space-y-2">
              <p className="text-sm font-medium text-slate-700 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Title
              </p>
              <input
                type="text"
                value={title}
                placeholder={"Title"}
                required
                onChange={(e) => setTitle(e.target.value)}
                className="flex h-11 w-full rounded-md border border-[#e5e5e5] focus:border-slate-700 bg-transparent px-3 py-1 shadow-[0_1px_2px_0_#0000000d] focus:outline-none focus:ring-0 ring-0 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm text-base"
              />
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium text-slate-700 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Description
              </p>

              <textarea
                value={description}
                placeholder={"Description"}
                required
                onChange={(e) => setDescription(e.target.value)}
                className="flex min-h-20 w-full rounded-md border border-[#e5e5e5] focus:border-slate-700 bg-transparent px-3 py-2 shadow-[0_1px_2px_0_#0000000d] focus:outline-none focus:ring-0 ring-0 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm text-base scrollbar-textarea-custom"
              />
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium text-slate-700 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Image URL
              </p>
              <input
                type="text"
                value={imageURL}
                placeholder={"Image URL"}
                required
                onChange={(e) => setImageURL(e.target.value)}
                className="flex h-11 w-full rounded-md border border-[#e5e5e5] focus:border-slate-700 bg-transparent px-3 py-1 shadow-[0_1px_2px_0_#0000000d] focus:outline-none focus:ring-0 ring-0 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm text-base"
              />
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium text-slate-700 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Mockup Link
              </p>
              <input
                type="text"
                value={mockupLink}
                placeholder={"Mockup Link"}
                required
                onChange={(e) => setMockupLink(e.target.value)}
                className="flex h-11 w-full rounded-md border border-[#e5e5e5] focus:border-slate-700 bg-transparent px-3 py-1 shadow-[0_1px_2px_0_#0000000d] focus:outline-none focus:ring-0 ring-0 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm text-base"
              />
            </div>
            {/* button */}
            <div className="flex gap-3 pt-2.5 pb-1">
              <button
                onClick={onClose}
                disabled={loading}
                className="flex-1 px-4 py-2.5 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className="flex-1 px-4 py-2.5 text-sm font-medium text-white bg-[#02bb02e8] hover:bg-[#02bb02] rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <svg
                      className="animate-spin h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Updating...
                  </>
                ) : (
                  "Yes, Update"
                )}
              </button>
            </div>
          </form>
        </div>

        <div className="w-[320px] flex items-center">
          <div
            className={`h-fit group overflow-hidden transform rounded-xl border border-[#e5e5e5] bg-[#ffffff] text-[#0a0a0a] shadow relative transition-all duration-300`}
          >
            <div className="relative overflow-hidden aspect-2/3 bg-gray-100">
              <Image
                src={editMockupInfo.image}
                alt={title}
                width={1800}
                height={2700}
                className="w-full h-full object-cover transition-transform duration-500 select-none"
              />
            </div>
            <div
              className={`absolute inset-0 w-full bg-linear-to-t from-black/50 via-black/0 to-transparent`}
            >
              <div className="absolute left-0 right-0 bottom-0 w-full p-4">
                <h3 className="text-[16px] text-white font-semibold mb-1">
                  {title}
                </h3>
                <p className="text-[13px] text-gray-200 leading-4 mb-1">
                  {description}
                </p>
                <Link href={mockupLink} target="_blank">
                  <p className="text-[13px] text-blue-400 hover:underline leading-4">
                    {mockupLink}
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Delete Mockup's Modal
interface DeleteMockupModalProps {
  isOpen: boolean;
  onClose: () => void;
  deleteMockupInfo: { id: number; title: string }[];
}
const DeleteMockupModal = ({
  isOpen,
  onClose,
  deleteMockupInfo,
}: DeleteMockupModalProps) => {
  // scroll bar hidden
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup (important)
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);
  const [loading, setLoading] = useState(false);

  const onConfirm = () => {
    console.log(deleteMockupInfo);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center p-4 animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl sm:max-w-150 w-full p-6 animate-in zoom-in-95 duration-200">
        {/* Icon */}
        <div className="mx-auto flex items-center justify-center h-14 w-14 rounded-full bg-red-100 mb-4">
          <MdDelete className="text-[25px] text-red-600" />
        </div>

        {/* Content */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-slate-900 mb-2.5">
            Delete Mockup Confirmation
          </h3>
          <p className="text-slate-600 text-sm mb-6 ">
            Are you sure you want to delete{" "}
            {deleteMockupInfo.map((dtitle) => (
              <span key={dtitle.id} className="text-red-600 font-medium ">
                {dtitle.title}
                {deleteMockupInfo.length === dtitle.id ? "" : ", "}
              </span>
            ))}{" "}
            mockup
            {deleteMockupInfo.length > 1 ? "'s" : ""}?
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            onClick={onClose}
            disabled={loading}
            className="flex-1 px-4 py-2.5 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            disabled={loading}
            className="flex-1 px-4 py-2.5 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <svg
                  className="animate-spin h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Deleting...
              </>
            ) : (
              "Yes, Delete"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
