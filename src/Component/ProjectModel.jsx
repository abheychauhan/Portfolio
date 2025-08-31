import { useEffect } from "react";

export default function ProjectModal({ isOpen, onClose, children }) {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white w-full max-w-4xl max-h-[80vh] overflow-y-auto p-6 rounded-lg shadow-lg relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-6 text-gray-500 hover:text-gray-700 text-xl"
        >
          ✕
        </button>
        <h1 className="text-xl font-semibold text-gray-800 text-center m-5">My Projects</h1>
        {/* Modal Content */}
        <div className="flex flex-wrap gap-6 p-5 items-center justify-center">
          {children}
        </div>
      </div>
    </div>
  );
}
