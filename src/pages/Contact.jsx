import React from 'react';
import NewsletterSection from '../components/closetProducts/NewsletterSection';
import About from './About';
import Selling from './Selling';
import MessageSend from '../components/Contact/MessageSend';
import ProfilePage from '../components/ProfilePage/ProfilePage';

const Contact = () => {
  return (
    <div>
      <MessageSend />
      <NewsletterSection />
    </div>
  );
};

export default Contact;