"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import qr from "../../assests/qr.png";

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const Dialog: React.FC<DialogProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 h-[120vh] w-full ">
      <div className="bg-white rounded-lg w-full max-w-md mx-4 relative">
        {/* Header */}
        <div className="relative border-b border-gray-200 p-4">
          <h2 className="text-lg font-semibold">Scan QR Code</h2>
          <button
            onClick={onClose}
            className="absolute right-4 top-4 w-6 h-6 flex items-center justify-center rounded-full hover:bg-gray-100"
          >
            <X className="h-4 w-4 text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col items-center space-y-4">
          <div className="bg-white p-6 rounded-lg transform rotate-0 relative">
            {/* Paper-like shadow effect */}
            <div className="absolute inset-0 bg-white rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"></div>

            {/* QR code container with raised effect */}
            <div className="relative bg-white p-4 rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.1)] transition-transform hover:scale-105">
              <img
                src={qr.src}
                alt="QR Code"
                className="w-48 h-48 object-contain"
              />
            </div>
          </div>
          <p className="text-center text-sm text-gray-600">
            Scan this QR code to call{" "}
            <span className="font-medium">+91 82373 58619</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
