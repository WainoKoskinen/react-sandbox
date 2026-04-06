import React, { useState } from 'react';
import Modal from './components/Modal';



function App() {
  
  const [showInfo, setShowInfo] = useState(false);
  
  
  const [showOtherInfo, setShowOtherInfo] = useState(false);

  return (
    
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center gap-6 p-8">
      <h1 className="text-3xl font-bold text-gray-800">Reusable Components</h1>

      
      <button 
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors"
        onClick={() => setShowInfo(true)}
      >
        Show Details
      </button>

   
      <Modal isOpen={showInfo} onClose={() => setShowInfo(false)}>
        <h2 className="text-xl font-bold mb-2">Important Details</h2>
        <p className="text-gray-600">
          This is content injected inside the modal!
        </p>
      </Modal>


      
      <button 
        className="px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg shadow-md hover:bg-emerald-700 transition-colors"
        onClick={() => setShowOtherInfo(true)}
      >
        Show Other Info
      </button>

     
      <Modal isOpen={showOtherInfo} onClose={() => setShowOtherInfo(false)}>
        <h2 className="text-xl font-bold mb-2">Different Information</h2>
        <p className="text-gray-600">
          Because we built a reusable component, we can easily create a second modal with completely different content and state without duplicating the layout code!
        </p>
      </Modal>

    </div>
  );
}

export default App;