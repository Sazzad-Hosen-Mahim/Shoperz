import React from 'react';
import MessageSend from '../components/Contact/MessageSend';
import { NewsLetters } from '../hooks/shared/NewsLetters';

const Contact = () => {
  return (
    <div className='bg-white'>
      <MessageSend />
      <NewsLetters />
    </div>
  );
};

export default Contact;