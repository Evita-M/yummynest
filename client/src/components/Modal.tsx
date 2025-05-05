import React from 'react';
import { useModal } from '@/hooks/useModal';
import { IoCloseOutline } from "react-icons/io5";


export const Modal: React.FC = () => {
  const { isOpen, content, closeModal } = useModal();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="fixed inset-0 bg-black/85"
        onClick={closeModal}
      />
      <div className="relative bg-white rounded-lg shadow-xl p-[1.8rem] max-w-md w-full mx-4">
        <button
          onClick={closeModal}
          className="absolute top-[1.2rem] right-[1.2rem] text-gray-600 hover:text-gray-800"
        >
          <IoCloseOutline/>
        </button>
        {content}
      </div>
    </div>
  );
};

