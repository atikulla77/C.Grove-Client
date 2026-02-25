"use client";
import { useEffect, useEffectEvent, useState } from "react";
import { toast } from "sonner";
import { LineNumberTextarea } from "@/components/LineNumberTextarea";
import Image from "next/image";
import Link from "next/link";
import OnConfirmModal from "@/components/shared/OnConfirmModal";
import { AiOutlineAppstoreAdd } from "react-icons/ai";

const Multiple = () => {
  const [jsonContent, setJsonContent] = useState(
    `[
  {
    "title": "Premium Hardcover Design",
    "description": "Professional hardcover mockup with marble backdrop",
    "image": "https://i.ibb.co.com/bRWG41Ht/book-mockup.jpg",
    "amazonLink": "https://www.amazon.com/kdp/your-product-1"
  },
  {
    "title": "Elegant Book Mockup",
    "description": "Clean and minimalist hardcover design",
    "image": "https://i.ibb.co.com/qMBtkfNM/book-mockup2.jpg",
    "amazonLink": "https://www.amazon.com/kdp/your-product-2"
  }
]`,
  );

  const [preview, setPreview] = useState([
    {
      title: "Premium Hardcover Design",
      description: "Professional hardcover mockup with marble backdrop",
      image: "https://i.ibb.co.com/bRWG41Ht/book-mockup.jpg",
      amazonLink: "https://www.amazon.com/kdp/your-product-1",
    },
    {
      title: "Elegant Book Mockup",
      description: "Clean and minimalist hardcover design",
      image: "https://i.ibb.co.com/qMBtkfNM/book-mockup2.jpg",
      amazonLink: "https://www.amazon.com/kdp/your-product-2",
    },
  ]);

  const handleJsonChange = (value: any) => {
    setJsonContent(value);
  };

  const validateAndStore = () => {
    try {
      // Parse the JSON
      const data = JSON.parse(jsonContent);

      // Check if it's an array
      if (!Array.isArray(data)) {
        toast.error("Invalid Format", {
          description: "JSON must be an array of objects",
        });
        return;
      }

      // Check if array is empty
      if (data.length === 0) {
        toast.error("Empty Array", {
          description: "Array must contain at least one book object",
        });
        return;
      }

      // Validate each object
      const requiredFields = ["title", "description", "image", "amazonLink"];

      for (let i = 0; i < data.length; i++) {
        const item = data[i];

        // Check if item is an object
        if (typeof item !== "object" || item === null) {
          toast.error(`Invalid Item at Index ${i}`, {
            description: "Each item must be an object",
          });
          return;
        }

        // Check for missing fields
        const missingFields = [];
        for (const field of requiredFields) {
          if (
            !item.hasOwnProperty(field) ||
            item[field] === "" ||
            item[field] === null ||
            item[field] === undefined
          ) {
            missingFields.push(field);
          }
        }

        if (missingFields.length > 0) {
          toast.error(`Missing Fields at Index ${i}`, {
            description: `Required fields missing: ${missingFields.join(", ")}`,
          });
          return;
        }

        // Validate that fields are strings
        for (const field of requiredFields) {
          if (typeof item[field] !== "string") {
            toast.error(`Invalid Field Type at Index ${i}`, {
              description: `Field "${field}" must be a string`,
            });
            return;
          }
        }
      }

      // If all validations pass
      toast.success("Validation Successful!", {
        description: `${data.length} book mockup(s) ready to store in database`,
      });

      // Here store to database
      console.log("Data to store:", data);
    } catch (error: any) {
      toast.error("Invalid JSON", {
        description: error.message || "Please check your JSON syntax",
      });
    }
  };

  // Mockups Preview
  const runValidation = () => {
    let hasError = false;

    const originalToastError = toast.error;

    toast.error = (...args) => {
      hasError = true;
      return originalToastError(...args);
    };

    validateAndStore();

    toast.error = originalToastError;

    return !hasError;
  };

  const handleJsonPreview = () => {
    try {
      const data = JSON.parse(jsonContent);

      const isValid = runValidation();

      if (!isValid) return;

      setPreview(data);
    } catch {
      return;
    }
  };

  // Mockups Add Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = () => {
    try {
      const isValid = runValidation();

      if (!isValid) return;

      setIsModalOpen(true);
    } catch {
      return;
    }
  };

  const handleAddMockups = async () => {
    setLoading(true);
    console.log(JSON.parse(jsonContent));
    setLoading(false);
    setIsModalOpen(false);
  };

  return (
    <div className="py-8">
      <div className="space-y-6">
        <div className="container mx-auto space-y-12 px-2 pb-20">
          <header className="space-y-3">
            <h2 className="text-2xl font-semibold text-slate-900">
              Create Multiple Mockup's
            </h2>
            <p className="font-sans text-base text-muted-foreground leading-relaxed">
              Craft your portfolio presentation.
            </p>
          </header>
          <div className="editor-section">
            <LineNumberTextarea
              value={jsonContent}
              onChange={handleJsonChange}
              onUpload={handleFormSubmit}
              previewData={handleJsonPreview}
              placeholder="Enter book mockup JSON array..."
              height="600px"
            />

            <OnConfirmModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              onConfirm={handleAddMockups}
              loading={loading}
              title={"Add New Mockups"}
              description={
                <span>
                  Please Double-Check the Mockups Information first in case
                  anything is missing. Then Click “
                  <span className="font-medium">Add Mockups</span>” to save
                  <br /> this Mockups.
                </span>
              }
              buttonName={"Add Mockups"}
              buttonLoading={"“Adding Mockups...."}
              buttonColor={"text-white bg-[#02bb02e8] hover:bg-[#02bb02]"}
              icon={
                <div className="mx-auto flex items-center justify-center h-14 w-14 rounded-full bg-[#02bb0225] mb-4">
                  <AiOutlineAppstoreAdd className="text-[25px] text-[#02bb02]" />
                </div>
              }
            />
          </div>

          <div className="space-y-10 pt-4">
            <p className="font-Inter font-normal text-[15px] text-center text-muted-foreground leading-relaxed">
              Preview Book Mockup's
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {preview.map((mockup: any, index: number) => {
                return (
                  <div
                    key={index}
                    className={`h-fit group overflow-hidden transform rounded-xl border border-[#e5e5e5] bg-[#ffffff] text-[#0a0a0a] shadow relative transition-all duration-300`}
                  >
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
        </div>
      </div>
    </div>
  );
};

export default Multiple;
