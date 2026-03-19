import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { TiMail } from "react-icons/ti";

const ProfileCard = () => {
  return (
    <div className="max-w-xl mx-auto bg-white shawdo-md rounded-lg p-6 flex flex-col sm:flex-row items-center gap-6">
      {/* Profile Img */}
      <div className="shrink-0">
        <img
          src="profile.jpg"
          alt="profile"
          width={120}
          height={120}
          className="rounded ring-2 ring-green-300"
        />
      </div>
      <div className="flex-1 text-center sm:text-left">
        <div className="flex items-center justify-center sm:justify-start gap-2">
          <h1 className="text-2xl font-bold">Regie Boy Bacarra </h1>
          <FaCheckCircle className="text-blue-500" />
        </div>
        <p className="text-gray-500 text-sm mt-1">
          Zone 3, Paranas Samar, Philippines
        </p>
        <p className="text-gray-700 mt-2">
          Aspiring FULLSTACKS DEVELOPER | 2026 Journey
        </p>
        <div className="flex flex-col sm:flex-row gap-2 mt-4 justify-center sm:justify-start">
          <button className="bg-black text-white px-2 py-1 rounded hover:bg-gray-800 flex items-center gap-1">
            <IoCall />
            Schedule a Call
          </button>
          <button className="bg-gray-100 text-black px-2 py-1 rounded hover:bg-gray-200 flex items-center gap-1">
            <TiMail />
            Send Email
          </button>
          <button className="bg-gray-100 text-black px-4 py-2 rounded hover:bg-gray-200">
            Discord
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
