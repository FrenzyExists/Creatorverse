import {
  Field,
  Fieldset,
  Textarea,
  Input,
  Label,
  Legend,
  Button,
} from "@headlessui/react";
import { FormInput } from "../components/GeneralModal";
import TikTokIcon from "../assets/tiktok-brands-solid.svg";
import InstagramIcon from "../assets/instagram-brands-solid.svg";
import TwitchIcon from "../assets/twitch-brands-solid.svg";
import XTwitterIcon from "../assets/x-twitter-brands-solid.svg";
import YoutubeIcon from "../assets/youtube-brands-solid.svg";

import React, { useState } from "react";
import { ImageIcon } from "../assets/image-solid";

const AddCreator = () => {
  const [imageSrc, setImageSrc] = useState<string | ArrayBuffer | null>(null);

  // Handle local file uploads
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle URL input
  const handleUrlInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImageSrc(event.target.value);
  };

  return (
    <div className="w-full h-full min-h-screen bg-[#94c7c1] ">
      <div className="bg-gray-100 w-full max-w-6xl relative mx-auto p-6 border-x-8 border-[#739f9a] border-b-8 rounded-b-2xl py-10">
        <Fieldset className="">
          <Legend className="relative mb-10 text-pop-stroke text-7xl font-extrabold">
            Add a Creator
          </Legend>
          <div className="grid grid-cols-3 gap-8 items-start">
            <Field className="">
              <Label className="font-bold text-gray-900 text-2xl">
                Profile Picture
              </Label>

              <div className=" relative flex items-center rounded-lg overflow-hidden">
                <Input
                  type="url"
                  placeholder="Web"
                  onChange={handleUrlInput}
                  className="flex-grow px-4 py-2 text-gray-900 bg-gray-50 border-0 rounded-none rounded-l-lg shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <div className="relative group">
                  <Input
                    type="file"
                    accept="image/*"
                    name="creators[]"
                    onChange={handleFileUpload}
                    className="absolute inset-0 w-full h-full opacity-0 z-10"
                  />
                  <Button className="w-full h-full px-4 py-2 font-extrabold bg-gray-200 text-gray-900 rounded-none rounded-r-lg border-l-0 shadow-sm focus:ring-2 focus:ring-inset focus:ring-indigo-600  group-hover:bg-gray-300 group-hover:cursor-pointer">
                    Local
                  </Button>
                </div>
              </div>

              <div className="mt-4">
                <article className="group relative rounded-3xl border-[4px] border-gray-900 overflow-hidden">
                  <span className="block w-full bg-gray-200 aspect-[3/4]">
                    {imageSrc ? (
                      <img
                        src={typeof imageSrc === "string" ? imageSrc : ""}
                        alt="Preview"
                        className="h-full w-full object-cover object-center p-1 rounded-3xl"
                      />
                    ) : (
                      <div className="h-full flex flex-col items-center justify-center bg-gray-200 text-gray-500 rounded-full">
                        <span>No Image Selected</span>
                        <div className="w-10 mt-2">
                          <ImageIcon />
                        </div>
                      </div>
                    )}
                  </span>
                </article>
              </div>
            </Field>
            <div className="col-span-2">
              <Field className="mb-6">
                <Label className="font-bold text-gray-900 text-2xl">Name</Label>
                <Input className="mt-2 p-2 border rounded-md w-full" />
              </Field>
              <Field className="mb-6">
                <Label className="font-bold text-gray-900 text-2xl">
                  About Me
                </Label>
                <Textarea className="mt-2 p-2 border rounded-md w-full" />
              </Field>
              <Field className="mb-6">
                <Legend className="font-bold text-gray-900 text-2xl mb-2">
                  My Social Media
                </Legend>
                <div className="space-y-2">
                  <FormInput
                    icon={TikTokIcon}
                    placeholder="@tiktokname"
                    formMode={true}
                  />
                  <FormInput
                    icon={InstagramIcon}
                    placeholder={undefined}
                    formMode={true}
                  />
                  <FormInput
                    icon={XTwitterIcon}
                    placeholder={undefined}
                    formMode={true}
                  />
                  <FormInput
                    icon={TwitchIcon}
                    placeholder={undefined}
                    formMode={true}
                  />
                  <FormInput
                    icon={YoutubeIcon}
                    placeholder={undefined}
                    formMode={true}
                  />
                </div>
              </Field>
            </div>
          </div>
          <Field>
            <div className="mx-auto grid grid-cols-2 relative">
              <Button className="text-xl font-bold border-[3px] border-blue-900 text-blue-900 flex items-center justify-center gap-x-2.5 p-3 hover:bg-blue-900 hover:text-gray-100 rounded-lg mr-2 py-5">
                Add Creator
              </Button>
              <Button className="text-xl font-bold border-[3px] border-red-900 text-red-900 px-10 flex items-center justify-center gap-x-2.5 p-3 hover:bg-red-900 hover:text-gray-100 rounded-lg ml-2 py-5">
                Cancel
              </Button>
            </div>
          </Field>
        </Fieldset>
      </div>
    </div>
  );
};

export default AddCreator;
