import SocialMediaIcons from "../../component/SocialMediaIcons/SocialMediaIcons";
const SocialMedia = () => {
  const phoneNumber = "+919955956721";
  const emailAddress = "irahulkv@gmail.com";
  const location = "Noida, UP, India";

  const handlePhoneCall = () => {
    // Use the "tel" scheme to initiate a phone call
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleEmail = () => {
    // Use the "mailto" scheme to open the default email client
    window.location.href = `mailto:${emailAddress}`;
  };

  const handleLocation = () => {
    // Use the "geo" scheme to open the location in maps
    window.location.href = `geo:0,0?q=${encodeURIComponent(location)}`;
  };

  return <> <div className="flex justify-around items-center pt-14">
    <div className="space-y-3">
      <div>
        <p onClick={handlePhoneCall} style={{ cursor: "pointer", textDecoration: "underline" }}>
          {phoneNumber}
        </p>
        <p onClick={handleEmail} style={{ cursor: "pointer", textDecoration: "underline" }}>
          {emailAddress}
        </p>
        <p onClick={handleLocation} style={{ cursor: "pointer", textDecoration: "underline" }}>
          {location}
        </p>
      </div>
      <div className='pt-3'>
        <SocialMediaIcons />

      </div>
    </div>
    <div></div>
  </div></>;
};

export default SocialMedia;
