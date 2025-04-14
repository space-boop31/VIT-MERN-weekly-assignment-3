import React, { useState } from 'react';

const TextUpdater = () => {
  const [text, setText] = useState('');

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-4">
      <h1 className="text-2xl font-bold mb-4">Text Updater</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
        className="p-2 rounded-md text-black w-72 mb-4"
      />
      <p className="text-lg font-medium">You typed: {text}</p>
    </div>
  );
};

export default TextUpdater;