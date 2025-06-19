"use client";

import { LabeledInputField } from "../../molecules/LabeledInputField/LabeledInputField";
import { LabeledMultiLineInput } from "../../molecules/LabeledMultiLineInput/LabeledMultiLineInput";
import { NextPageIconButton } from "../../atoms/NextPageIconButton/NextPageIconButton";
import { CircleWrapper } from "../../atoms/CircleWrapper/CircleWrapper";
import { useState } from "react";
import { CameraIcon } from "../../atoms/CameraIcon/CameraIcon";

export const AccountFormSignUp3 = () => {
  const [planet, setPlanet] = useState("");
  const [lookingFor, setLookingFor] = useState("");
  const [interests, setInterests] = useState("");
  const [bio, setBio] = useState("");

  return (
    <div className="flex items-center justify-center min-h-screen">
      <CircleWrapper size="w-[600px] h-[600px]" backgroundColor="bg-blue bg-opacity-10" className="p-8 text-center">
        <div className="w-full px-6 py-8 text-center">
          <div className="w-full">
            <h2 className="text-lg font-semibold mb-6">Add Profile Picture</h2>

            <div className="flex items-center justify-center">
              <CameraIcon />
            </div>

            {/* TODOO: Implement profile picture upload functionality */}

            <LabeledMultiLineInput
              placeholder="Bio (optional)"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />

            <NextPageIconButton onClick={() => console.log({ planet, lookingFor, interests, bio })} />
          </div>
        </div>

      </CircleWrapper>
    </div>

  );
};
