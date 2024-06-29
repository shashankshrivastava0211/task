// MainContent.js
import React, { useState } from 'react';
import Sidebar from './Sidebar';

const MainContent = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, 4));
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  return (
    <div className="flex">
      <Sidebar currentStep={currentStep} />
      <div className="ml-52 p-4">
        <h1 className="text-2xl mb-4">Step {currentStep}</h1>
        <div className="flex">
          <button 
            onClick={prevStep} 
            disabled={currentStep === 1} 
            className={`mr-2 p-2 rounded ${currentStep === 1 ? 'bg-gray-200 opacity-50 cursor-not-allowed' : 'bg-gray-200'}`}
          >
            Previous
          </button>
          <button 
            onClick={nextStep} 
            disabled={currentStep === 4} 
            className={`p-2 rounded text-white ${currentStep === 4 ? 'bg-blue-500 opacity-50 cursor-not-allowed' : 'bg-blue-500'}`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
