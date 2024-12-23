import React from 'react'

const SocialLink = ({ icon, url }) => {
  return (
    <a
      href={"https://www.instagram.com/drippicks.in/"} 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-center"
    >
      <img
        src={icon}
        alt="icon/social"
        className="w-8 h-8 cursor-pointer md:w-6 md:h-6 sm:w-5 sm:h-5 transition-all duration-200 hover:scale-110"
      />
    </a>
  );
};


export default SocialLink