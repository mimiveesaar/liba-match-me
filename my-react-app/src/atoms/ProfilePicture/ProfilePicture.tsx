"use client";

import React from "react";

interface ProfilePictureProps {
  width?: number;
  height?: number;
  className?: string;
}

export const ProfilePicture: React.FC<ProfilePictureProps> = ({
  width = 260,
  height = 190,
  className = "",
}) => (
  <div
    className={`rounded-2xl overflow-hidden bg-gray-200 ${className}`}
    style={{ width, height }}
  >
    <img
      src="/default-profile.png"
      alt="Default Profile"
      className="object-cover w-full h-full"
    />
  </div>
);
