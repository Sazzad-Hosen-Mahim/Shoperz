import React from 'react';
import MessageSend from '../components/Contact/MessageSend';
import NewsletterSection from '../components/closetProducts/NewsletterSection';

const Contact = () => {
  return (
    <div className='bg-white'>
      <MessageSend />
      <NewsletterSection />
    </div>
  );
};

export default Contact;