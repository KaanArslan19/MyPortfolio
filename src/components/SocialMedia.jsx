import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a className="app__social_github" href="https://github.com/KaanArslan19">
          <BsGithub/>
        </a>
      </div>
      <div>
        <a className="app__social_linked-in" href="https://linkedin.com/in/kaan-arslan-eeeng">
          <BsLinkedin/>
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
