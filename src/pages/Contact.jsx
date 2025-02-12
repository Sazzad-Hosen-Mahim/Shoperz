import React from 'react';
import MessageSend from '../components/Contract/MessageSend';
import NewsletterSection from '../components/closetProducts/NewsletterSection';
import About from './About';
import Selling from './Selling';

const Contact = () => {
  return (
    <div>
      <MessageSend />
      <NewsletterSection />
      <About />
      <Selling />
    </div>
  );
};

export default Contact;