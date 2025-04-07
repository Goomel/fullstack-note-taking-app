"use client";

import React from "react";

interface AddButtonProps {
  onClick?: () => void;
}

const AddButton = ({ onClick }: AddButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="flex h-10 items-center rounded-md bg-indigo-600 px-4 text-sm font-medium text-white transition-colors hover:bg-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="mr-2"
      >
        <path d="M5 12h14" />
        <path d="M12 5v14" />
      </svg>
      Add Note
    </button>
  );
};

export default AddButton;
