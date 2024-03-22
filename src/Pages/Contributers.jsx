import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { BsGlobe } from "react-icons/bs";

const MyCard = () => {
  const name = "Subham Das";
  const instagram = "https://www.instagram.com/subhammdas/";
  const website = "https://www.subhamdevelopment.netlify.app";

  return (
    <div className="w-full min-h-screen h-full flex justify-center items-center">
      <div className="w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div className="flex flex-col items-center p-5">
          <img
            className="w-32 h-32 mb-3 rounded-full shadow-lg"
            src={process.env.PUBLIC_URL + "/profilepic.jpg"}
            alt="Profile picture"
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {name}
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Subham Development
          </span>
          <div className="flex mt-4 space-x-3 md:mt-6">
            <a
              href="https://www.instagram.com/subhammdas/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-gray-500 hover:underline dark:text-gray-400"
            >
              <AiFillInstagram className="w-5 h-5 mr-2" />
              Instagram
            </a>
            <a
              href="https://subhamdevelopment.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-gray-500 hover:underline dark:text-gray-400"
            > Website
              <BsGlobe className="w-5 h-5 mr-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCard;