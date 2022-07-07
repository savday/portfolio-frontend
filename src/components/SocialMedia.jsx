import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { ImCodepen } from "react-icons/im";
import { MdOutlineEmail } from "react-icons/md";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://github.com/savday">
          <BsGithub />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/savday/">
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a href="https://codepen.io/savannahday99">
          <ImCodepen />
        </a>
      </div>
      <div>
        <a href="mailto:savannahday99@gmail.com">
          <MdOutlineEmail />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
