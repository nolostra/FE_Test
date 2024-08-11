import React from "react";
import Image from 'next/image';
import RightArrow from "../../assets/images/icons/right-arrow.svg";

const Button: React.FC = () => {
  return (
    <button type="button" className="contact-btn flex flex-row justify-center items-center">
      Contact us
      <Image src={RightArrow} alt="Contact us" width={16} height={16} />
    </button>
  );
};

export default Button;
