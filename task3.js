import React from 'react';

const UserCard = ({ name, email }) => {
  return (
    <div className="max-w-sm mx-auto bg-white text-gray-900 shadow-lg rounded-lg p-6 mt-6 border border-gray-300">
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <p className="text-sm text-gray-700">{email}</p>
    </div>
  );
};

export default UserCard;