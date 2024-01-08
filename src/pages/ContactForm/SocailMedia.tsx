import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import SocialMediaIcons from "../../component/SocialMediaIcons/SocialMediaIcons";

const SocialMedia = () => {
  const phoneNumber = "+919955956721";
  const emailAddress = "irahulkv@gmail.com";
  const location = "Noida, UP, India";

  const handlePhoneCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleEmail = () => {
    window.location.href = `mailto:${emailAddress}`;
  };

  const handleLocation = () => {
    window.location.href = `geo:0,0?q=${encodeURIComponent(location)}`;
  };

  return (
    <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="flex flex-col space-y-4">
          <div className="flex items-center cursor-pointer underline" onClick={handlePhoneCall}>
            <FaPhone className="text-xl mr-2" />
            <span>{phoneNumber}</span>
          </div>
          <div className="flex items-center cursor-pointer underline" onClick={handleEmail}>
            <FaEnvelope className="text-xl mr-2" />
            <span>{emailAddress}</span>
          </div>
          <div className="flex items-center cursor-pointer underline" onClick={handleLocation}>
            <FaMapMarkerAlt className="text-xl mr-2" />
            <span>{location}</span>
          </div>
        </div>
        <div className="flex justify-center sm:justify-end items-center">
          <SocialMediaIcons />
        </div>
      </div>
        <div></div>
    </div>
  );
};


export default SocialMedia;
