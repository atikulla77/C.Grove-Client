"use client";
import OnConfirmModal from "@/components/shared/OnConfirmModal";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { IoMdAdd } from "react-icons/io";

const Single = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [mockupLink, setMockupLink] = useState("");

  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleAddMockup = async () => {
    console.log({
      title: title,
      description: description,
      imageURL: imageURL,
      mockupLink: mockupLink,
    });
    setIsModalOpen(false);
  };

  return (
    <div className="py-8">
      <div className="space-y-6">
        <div className="container mx-auto space-y-12 px-2 ">
          <header className="space-y-3">
            <h2 className="text-2xl font-semibold text-slate-900">
              Create Single Mockup
            </h2>
            <p className="font-sans text-base text-muted-foreground leading-relaxed">
              Craft your portfolio presentation.
            </p>
          </header>
          <main className="flex justify-between">
            <form
              onSubmit={handleFormSubmit}
              className="w-full md:w-[43%] space-y-6.25"
            >
              <div className="space-y-2.5">
                <p className="text-sm font-medium text-slate-700 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Title
                </p>
                <input
                  type="text"
                  placeholder={"Title"}
                  required
                  onChange={(e) => setTitle(e.target.value)}
                  className="flex h-11 w-full rounded-md border border-[#e5e5e5] focus:border-slate-700 bg-transparent px-3 py-1 shadow-[0_1px_2px_0_#0000000d] focus:outline-none focus:ring-0 ring-0 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm text-base"
                />
              </div>
              <div className="space-y-2.5">
                <p className="text-sm font-medium text-slate-700 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Description
                </p>

                <textarea
                  placeholder={"Description"}
                  required
                  onChange={(e) => setDescription(e.target.value)}
                  className="flex min-h-20 w-full rounded-md border border-[#e5e5e5] focus:border-slate-700 bg-transparent px-3 py-2 shadow-[0_1px_2px_0_#0000000d] focus:outline-none focus:ring-0 ring-0 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm text-base scrollbar-textarea-custom"
                />
              </div>
              <div className="space-y-2.5 mb-11 relative">
                <p className="text-sm font-medium text-slate-700 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Image URL
                </p>
                <p className="absolute left-0 -bottom-7.5 text-[13px] font-normal text-[#314158cf] leading-none">
                  Image Must be from "
                  <span className="font-medium text-slate-700">
                    i.ibb.co.com
                  </span>
                  " site
                </p>
                <p className="absolute right-0 -bottom-7.5 text-[13px] font-normal text-[#314158cf] leading-none">
                  1800 x 2700
                </p>
                <input
                  type="url"
                  placeholder={"https://example.com/image.jpg"}
                  value={imageURL}
                  required
                  onChange={(e) => setImageURL(e.target.value)}
                  className="flex h-11 w-full rounded-md border border-[#e5e5e5] focus:border-slate-700 bg-transparent px-3 py-1 shadow-[0_1px_2px_0_#0000000d] focus:outline-none focus:ring-0 ring-0 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm text-base"
                />
              </div>
              <div className="space-y-2.5">
                <p className="text-sm font-medium text-slate-700 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Mockup Link
                </p>
                <input
                  type="url"
                  placeholder={"Mockup Link"}
                  required
                  onChange={(e) => setMockupLink(e.target.value)}
                  className="flex h-11 w-full rounded-md border border-[#e5e5e5] focus:border-slate-700 bg-transparent px-3 py-1 shadow-[0_1px_2px_0_#0000000d] focus:outline-none focus:ring-0 ring-0 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm text-base"
                />
              </div>
              <button
                type="submit"
                className="flex-1 px-5 py-2.5 text-sm font-medium text-white bg-[#02bb02e8] hover:bg-[#02bb02] rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
              >
                Add Mockup
              </button>
            </form>
            <OnConfirmModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              onConfirm={handleAddMockup}
              loading={loading}
              title={"Add a New Mockup"}
              description={
                <span>
                  Please Double-Check the Mockup Information first in case
                  anything is missing. Then Click “
                  <span className="font-medium">Add Mockup</span>” to save
                  <br /> this Mockup.
                </span>
              }
              buttonName={"Add Mockup"}
              buttonLoading={"“Adding Mockup...."}
              buttonColor={"text-white bg-[#02bb02e8] hover:bg-[#02bb02]"}
              icon={
                <div className="mx-auto flex items-center justify-center h-14 w-14 rounded-full bg-[#02bb0225] mb-4">
                  <AiOutlineAppstoreAdd className="text-[25px] text-[#02bb02]" />
                </div>
              }
            />
            {/* Right Panel - Preview */}
            <div className="hidden md:flex w-full md:w-[52%]  h-fit items-center justify-end relative">
              <div className="relative z-10 w-full rounded-sm">
                <div className="space-y-6 flex ">
                  {/* Main Image with 1800x2700 ratio (2:3) */}
                  <div className="w-[43%] bg-white rounded-md shadow-md overflow-hidden">
                    <img
                      src={imageURL ? imageURL : "/mockup_size.jpg"}
                      width={1800}
                      height={2700}
                      alt="mockup image"
                      className="w-full "
                    />
                  </div>

                  {/* Content */}
                  <div className="w-[57%] space-y-4 pl-6">
                    <h3 className="text-[18px] font-medium tracking-tight">
                      {title || "Untitled Project"}
                    </h3>

                    <p className="font-sans text-base leading-relaxed">
                      {description || "No description provided"}
                    </p>

                    {mockupLink && (
                      <Link
                        href={mockupLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/70 transition-colors duration-200"
                      >
                        <ExternalLink className="h-4 w-4" />
                        View on Amazon
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Single;
