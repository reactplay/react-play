import React from 'react';
import { FaTimes, FaRegCircle } from 'react-icons/fa';

const Icon = ({ choice }: any) => {
  switch (choice) {
    case 'cross':
      return <FaTimes className="text-2xl font-extrabold text-red-500" />;
    case 'circle':
      return <FaRegCircle className="text-2xl font-extrabold text-red-500" />;
    default:
      return null;
  }
};

export default Icon;
