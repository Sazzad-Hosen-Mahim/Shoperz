import React from 'react';
import SellingMade from '../components/SellingMade/SellingMade';
import { NewsLetters } from '../hooks/shared/NewsLetters';

const Selling = () => {
  return (
    <div className='bg-white'>
      <SellingMade />
      <NewsLetters />
    </div>
  );
};

export default Selling;