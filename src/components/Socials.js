import React from "react";
import InstagramLogo from "../images/socials/instagram.svg";
import GithubLogo from "../images/socials/github.svg";
import LinkedinLogo from "../images/socials/linkedin.svg";

const Socials = () => {
  return (
    <div className="flex flex-col justify-center items-center fixed bottom-0 left-0 w-10 mx-6 py-6 gap-4">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/kamilkoziol"
        className="hover:scale-125 transition duration-300"
      >
        <img src={GithubLogo} alt="github-logo"></img>
      </a>
      <a
        className="w-9 pt-1 hover:scale-125 transition duration-300"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/kamilkoziol/"
      >
        <img src={LinkedinLogo} alt="linkedin-logo"></img>
      </a>
      <a
        className="w-12 hover:scale-125 transition duration-300"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.instagram.com/kamil_dwyer/"
      >
        <img src={InstagramLogo} alt="instagram-logo"></img>
      </a>
    </div>
  );
};

export default Socials;
