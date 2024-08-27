import {
  Field,
  Fieldset,
  Textarea,
  Input,
  Label,
  Legend,
  Button,
} from "@headlessui/react";
import TikTokIcon from "../assets/tiktok-brands-solid.svg";
import InstagramIcon from "../assets/instagram-brands-solid.svg";
import TwitchIcon from "../assets/twitch-brands-solid.svg";
import XTwitterIcon from "../assets/x-twitter-brands-solid.svg";
import YoutubeIcon from "../assets/youtube-brands-solid.svg";

import React, { useEffect, useState } from "react";
import { ImageIcon } from "../assets/image-solid";
import { supabase } from "../client";

const AddCreator = () => {
  const [imageSrc, setImageSrc] = useState<string | ArrayBuffer | null>(null);
  const [name, setName] = useState<string | undefined>(undefined);
  const [description, setDescription] = useState<string | undefined>(undefined);
  const [url, setUrl] = useState<string | undefined>(undefined);
  const [tiktokUrl, setTiktokUrl] = useState<string | undefined>(undefined);
  const [xTwitterUrl, setXTwitterUrl] = useState<string | undefined>(undefined);
  const [instagramUrl, setInstagramUrl] = useState<string | undefined>(
    undefined
  );
  const [youTubeUrl, setYouTubeUrl] = useState<string | undefined>(undefined);
  const [twitchUrl, setTwitchUrl] = useState<string | undefined>(undefined);
  // Handle local file uploads
  
  useEffect(() => {
    checkConnection();
  }, []);
  
  
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

  const handleAddCreator = async () => {
    const { data, error } = await supabase.from('creators').insert([
      {
        name: name,
        url: url,
        description: description,
        image_url: imageSrc,
        tiktok_url: tiktokUrl,
        youtube_url: youTubeUrl,
        instagram_url: instagramUrl,
        twitch_url: twitchUrl,
        twitter_x_url: xTwitterUrl
      }
    ])
    if (error) {
      console.error('Error adding creator:', error);
    } else {
      console.log('Creator added:', data);
    }
  }

  const checkConnection = async () => {
    const { data, error } = await supabase.from('creators').select('*').limit(1);
    if (error) {
      console.error('Error connecting to Supabase:', error);
    } else {
      console.log('Successfully connected to Supabase:', data);
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
                  className="flex-grow px-4 py-2 text-gray-900 bg-gray-50 border-0 rounded-none rounded-l-lg shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#005792] sm:text-sm sm:leading-6"
                />
                <div className="relative group">
                  <Input
                    type="file"
                    accept="image/*"
                    name="creators[]"
                    onChange={handleFileUpload}
                    className="absolute inset-0 w-full h-full opacity-0 z-10"
                  />
                  <Button className="w-full h-full px-4 py-2 font-extrabold bg-gray-200 text-gray-900 rounded-none rounded-r-lg border-l-0 shadow-sm focus:ring-2 focus:ring-inset focus:ring-[#005792]  group-hover:bg-gray-300 group-hover:cursor-pointer">
                    Local
                  </Button>
                </div>
              </div>

              <div className="mt-4">
                <article className="group relative rounded-3xl outline-none outline-4 outline-gray-300 overflow-hidden">
                  <span className="block w-full  bg-gray-200 aspect-[3/4]">
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
                <div className="relative flex items-center rounded-lg group mt-4">
                  <Input
                    type="text"
                    placeholder="John Smith"
                    onChange={(e) => setName(e.target.value)}
                    className="outline-2 px-2 outline-gray-300 flex-grow placeholder:italic text-gray-800 h-full py-3 outline-none focus:outline focus:outline-[#94c7c1] rounded-lg focus:outline-2 focus:outline-offset-2"
                  />
                </div>
              </Field>
              <Field className="mb-6">
                <Label className="font-bold text-gray-900 text-2xl">
                  About Me
                </Label>
                <div className="relative flex items-center rounded-lg group mt-4">
                  <Textarea
                    placeholder="I am the one, don't weight a ton
Don't need a gun to get respect on the street..."
                    rows={5}
                    onChange={(e) => setDescription(e.target.value)}
                    className="outline-2 px-2 outline-gray-300 flex-grow placeholder:italic text-gray-800 h-full py-3 outline-none focus:outline focus:outline-[#94c7c1] rounded-lg focus:outline-2 focus:outline-offset-2"
                  />
                </div>
              </Field>
              <Field className="mb-6">
                <Legend className="font-bold text-gray-900 text-2xl mb-2">
                  My Social Media
                </Legend>
                <div className="space-y-8">
                  <div className="relative flex items-center rounded-lg group mt-4">
                    <Input
                      type="url"
                      placeholder="TikTok"
                      onChange={(e) => setTiktokUrl(e.target.value)}
                      className="outline-2 pr-2 outline-gray-300 flex-grow placeholder:italic text-gray-800 h-full py-3 pl-14 outline-none focus:outline focus:outline-[#94c7c1] rounded-lg focus:outline-2 focus:outline-offset-2"
                    />
                    <div className="absolute left-0 w-12 ">
                      <img
                        src={TikTokIcon}
                        className=" w-full h-full px-4 py-3 font-extrabold bg-gray-200 text-gray-900 rounded-none rounded-l-lg border-l-0 shadow-sm"
                      />
                    </div>
                  </div>

                  <div className="relative flex items-center rounded-lg group">
                    <Input
                      type="url"
                      placeholder="Instagram"
                      onChange={(e) => setInstagramUrl(e.target.value)}
                      className="outline-2 pr-2 outline-gray-300 flex-grow placeholder:italic text-gray-800 h-full py-3 pl-14 outline-none focus:outline focus:outline-[#94c7c1] rounded-lg focus:outline-2 focus:outline-offset-2"
                    />
                    <div className="absolute left-0 w-12 ">
                      <img
                        src={InstagramIcon}
                        className=" w-full h-full px-4 py-3 font-extrabold bg-gray-200 text-gray-900 rounded-none rounded-l-lg border-l-0 shadow-sm"
                      />
                    </div>
                  </div>

                  <div className="relative flex items-center rounded-lg group">
                    <Input
                      type="url"
                      placeholder="YouTube"
                      onChange={(e) => setYouTubeUrl(e.target.value)}
                      className="outline-2 pr-2 outline-gray-300 flex-grow placeholder:italic text-gray-800 h-full py-3 pl-14 outline-none focus:outline focus:outline-[#94c7c1] rounded-lg focus:outline-2 focus:outline-offset-2"
                    />
                    <div className="absolute left-0 w-12 ">
                      <img
                        src={YoutubeIcon}
                        className=" w-full h-full px-4 py-3 font-extrabold bg-gray-200 text-gray-900 rounded-none rounded-l-lg border-l-0 shadow-sm"
                      />
                    </div>
                  </div>

                  <div className="relative flex items-center rounded-lg group">
                    <Input
                      type="url"
                      placeholder="Twitter X"
                      onChange={(e) => setXTwitterUrl(e.target.value)}
                      className="outline-2 pr-2 outline-gray-300 flex-grow placeholder:italic text-gray-800 h-full py-3 pl-14 outline-none focus:outline focus:outline-[#94c7c1] rounded-lg focus:outline-2 focus:outline-offset-2"
                    />
                    <div className="absolute left-0 w-12 ">
                      <img
                        src={XTwitterIcon}
                        className=" w-full h-full px-4 py-3 font-extrabold bg-gray-200 text-gray-900 rounded-none rounded-l-lg border-l-0 shadow-sm"
                      />
                    </div>
                  </div>

                  <div className="relative flex items-center rounded-lg group">
                    <Input
                      type="url"
                      placeholder="Twitch"
                      onChange={(e) => setTwitchUrl(e.target.value)}
                      className="outline-2 pr-2 outline-gray-300 flex-grow placeholder:italic text-gray-800 h-full py-3 pl-14 outline-none focus:outline focus:outline-[#94c7c1] rounded-lg focus:outline-2 focus:outline-offset-2"
                    />
                    <div className="absolute left-0 w-12 ">
                      <img
                        src={TwitchIcon}
                        className=" w-full h-full px-4 py-3 font-extrabold bg-gray-200 text-gray-900 rounded-none rounded-l-lg border-l-0 shadow-sm"
                      />
                    </div>
                  </div>
                </div>
              </Field>
            </div>
          </div>
          <Field>
            <div className="mx-auto grid grid-cols-2 relative">
              <Button 
              onClick={handleAddCreator}
              className="text-xl font-bold border-[3px] border-blue-900 text-blue-900 flex items-center justify-center gap-x-2.5 p-3 hover:bg-blue-900 hover:text-gray-100 rounded-lg mr-2 py-5">
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
