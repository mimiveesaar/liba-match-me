"use client";

import { CircleWrapper } from "../../atoms/CircleWrapper/CircleWrapper";
import { useState } from "react";
import { SignUpOrLogInButton } from "../../atoms/SignUpOrLogInButton/SignUpOrLogInButton";

export const WelcomePage = () => {

  return (
    <div className="flex items-center justify-center min-h-screen">
      <CircleWrapper size="w-[600px] h-[600px]" backgroundColor="bg-olive" className="p-8 text-center">
        <div className="w-full px-6 py-8 items-center">
          <div className="w-full flex flex-col items-center">
            <h1 className="text-4xl font-serif ">
              <div>Experience the </div>
              <div>otherworldly Joy of a</div> 
              <div>Shared Life</div>
            </h1>
            <br />
            <SignUpOrLogInButton />
          </div>
        </div>

      </CircleWrapper>
    </div>

  );
};
