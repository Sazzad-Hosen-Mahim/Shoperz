import NewsletterSection from '../components/closetProducts/NewsletterSection';
import ProfilePage from '../components/ProfilePage/ProfilePage';
import { NewsLetters } from '../hooks/shared/NewsLetters';

const Profile = () => {
  return (
    <div className='bg-white'>
      <ProfilePage />
      <NewsLetters />
    </div>
  );
};

export default Profile;