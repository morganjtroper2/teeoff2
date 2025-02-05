import React from 'react';
import Hotels from './Components/Hotels'

const hotelApp: React.FC = () => {
  return (
    <div className="font-serif grid grid-cols-3 gap-3">
      <h1>Hotels</h1>
      <Hotels />
    </div>
  );
};

export default hotelApp;