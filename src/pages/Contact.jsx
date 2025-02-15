import React from 'react';
import NewsletterSection from '../components/closetProducts/NewsletterSection';
import MessageSend from '../components/Contact/MessageSend';
/* import Filter from '../components/SideBar/Filter'; */

const Contact = () => {
  return (
    <div className='bg-white'>
      <MessageSend />
      <NewsletterSection />

    </div>
  );
};

export default Contact;