"use client";
import { useState, useRef, useEffect } from "react";
import { TbCloudUpload, TbEyeCode } from "react-icons/tb";

interface LineNumberTextareaProps {
  value: string;
  onChange: (value: string) => void;
  onUpload: () => void;
  previewData: () => void;
  placeholder?: string;
  height?: string;
}

export const LineNumberTextarea = ({
  value = "",
  onChange,
  onUpload,
  previewData,
  placeholder = "Enter JSON here...",
  height = "500px",
}: LineNumberTextareaProps) => {
  const [text, setText] = useState(value);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const lineNumbersRef = useRef<HTMLDivElement | null>(null);

  // Calculate line count
  const lineCount = text.split("\n").length;

  // Handle text change
  const handleChange = (e: any) => {
    const newValue = e.target.value;
    setText(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  // Sync scroll between textarea and line numbers
  const handleScroll = () => {
    if (textareaRef.current && lineNumbersRef.current) {
      lineNumbersRef.current.scrollTop = textareaRef.current.scrollTop;
    }
  };

  // Set initial value
  useEffect(() => {
    setText(value);
  }, [value]);

  return (
    <div
      className="line-number-textarea-container flex rounded-xl overflow-hidden shadow-[0_8px_24px_#0000001f,0_2px_6px_#00000014] border border-[#0000001a] bg-[#1e1e1e] relative"
      style={{ height }}
    >
      <div
        className={`absolute flex items-center gap-2 ${lineCount >= 26 ? "right-4" : "right-2"} top-2`}
      >
        <button onClick={previewData} className="flex-1 px-3 h-9 bg-[#F8FAFC] hover:bg-white rounded-lg transition-colors duration-200 flex items-center justify-center cursor-pointer shadow-sm">
          <TbEyeCode className="text-[20px] text-black " />
          <span className="text-[13px] font-medium ml-1.5">Preview</span>
        </button>
        <button
          onClick={onUpload}
          className="flex-1 px-3 h-9 bg-[#F8FAFC] hover:bg-white rounded-lg transition-colors duration-200 flex items-center justify-center cursor-pointer shadow-sm"
        >
          <TbCloudUpload className="text-[20px] text-[#02bb02e8]" />
          <span className="text-[13px] font-medium ml-1.5">Upload</span>
        </button>
      </div>
      <div
        className="line-numbers bg-[#252526] text-[#858585] p-[16px_8px] text-right text-[14px] leading-[1.6] select-none pointer-events-none overflow-y-hidden min-w-12.5 border-r border-[#3e3e42] relative font-['Fira_Code','Consolas','Monaco',monospace]"
        ref={lineNumbersRef}
        data-testid="line-numbers"
      >
        {Array.from({ length: lineCount }, (_, i) => {
          return (
            <div
              key={i + 1}
              className="line-number px-3 h-[22.4px] flex items-center justify-end font-medium transition-colors duration-200 ease-in-out"
            >
              {i + 1}
            </div>
          );
        })}
      </div>
      <textarea
        ref={textareaRef}
        value={text}
        onChange={handleChange}
        onScroll={handleScroll}
        placeholder={placeholder}
        className="code-textarea
    flex-1 bg-[#1e1e1e] text-[#d4d4d4]
    border-0 outline-none p-4
    font-['Fira_Code','Consolas','Monaco',monospace]
    text-sm leading-[1.6]
    resize-none overflow-y-auto overflow-x-auto
    whitespace-pre break-normal
    placeholder:text-[#6a6a6a] placeholder:italic"
        spellCheck="false"
        data-testid="code-textarea"
      />
    </div>
  );
};
