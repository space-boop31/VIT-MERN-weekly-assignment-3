import React, { useState } from 'react';

const FormLogger = () => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted value:", inputValue);
    // Optionally clear the input:
    // setInputValue('');
  };
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-800 text-white p-6">
      <h1 className="text-2xl font-bold mb-4">React Form Logger</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-72">
        <input
          type="text"
          placeholder="Enter something..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="p-2 rounded-md text-black"
        />
        <button
          type="submit"
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormLogger;