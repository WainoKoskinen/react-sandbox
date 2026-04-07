import React from 'react';


interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {

  if (!isOpen) return null;

  return (
    
    <div 
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      
      <div 
        className="bg-white p-8 rounded-2xl shadow-xl w-96 relative"
        onClick={(e) => e.stopPropagation()}
      >
        
        <div className="mb-6">
          {children}
        </div>
        
       
        <button 
          className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 w-full font-semibold transition-colors"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;