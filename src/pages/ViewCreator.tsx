import { useState } from "react";
import Creator from "../types";
import { useParams } from "react-router-dom";
import {
  Button,
  Description,
  Field,
  Fieldset,
  Input,
  Label,
  Legend,
  Select,
  Textarea,
} from "@headlessui/react";
import { FormInput } from "../components/GeneralModal";
import TikTokIcon from "../assets/tiktok-brands-solid.svg";
import InstagramIcon from "../assets/instagram-brands-solid.svg";
import TwitchIcon from "../assets/twitch-brands-solid.svg";
import XTwitterIcon from "../assets/x-twitter-brands-solid.svg";
import YoutubeIcon from "../assets/youtube-brands-solid.svg";

interface CreatorProps {
  creator: Creator;
}

const ViewCreator = ({ creator }: CreatorProps) => {
  const { id } = useParams<{ id: string }>();
  const [editMode, setEditMode] = useState(false);

  const [tempCreator, setTempCreator] = useState<Creator>(creator);

  const toggleEditMode = () => {
    setEditMode((prevEditMode) => !prevEditMode);
  };

  return (
    <div className="w-full h-full min-h-screen bg-[#94c7c1] ">
      <div className="bg-gray-100 w-full max-w-7xl relative mx-auto p-6 border-x-8 border-[#739f9a] border-b-8 rounded-b-2xl py-10">
        <Fieldset className="">
          <div className="grid grid-cols-3 gap-8 items-start">
            <div>
              {editMode ? (
                <Input type="file" />
              ) : (
                <article className="group relative rounded-3xl border-[4px] border-gray-900 overflow-hidden">
                  <span className="block w-full bg-gray-200 aspect-[3/4]">
                    <img
                      src="https://img-cdn.thepublive.com/filters:format(webp)/socialketchup/media/post_banners/EWtidmoC89xrLwjPDlfJ.jpg"
                      className="h-full w-full object-cover object-center p-1 rounded-3xl"
                    />
                  </span>
                </article>
              )}
            </div>
            <div className="col-span-2">
              <Field className="mb-6">
                <Label className="font-bold text-gray-900 text-2xl">Name</Label>
                {editMode ? (
                  <Input className="mt-2 p-2 border rounded-md w-full" />
                ) : (
                  <p className="text-lg mt-2">John Cena</p>
                )}
              </Field>
              <Field className="mb-6">
                <Label className="font-bold text-gray-900 text-2xl">
                  About Me
                </Label>
                {editMode ? (
                  <Textarea className="mt-2 p-2 border rounded-md w-full" />
                ) : (
                  <Description className="text-base mt-2">
                    John Cena, born on April 23, 1977, is the living glitch in
                    the matrix...
                  </Description>
                )}
              </Field>
              <Field className="mb-6">
                <Legend className="font-bold text-gray-900 text-2xl mb-2">
                  My Social Media
                </Legend>
                <div className="space-y-2">
                  <FormInput
                    icon={TikTokIcon}
                    placeholder="@johncenatheunseen"
                    formMode={editMode}
                  />
                  <FormInput
                    icon={InstagramIcon}
                    placeholder={undefined}
                    formMode={editMode}
                  />
                  <FormInput
                    icon={XTwitterIcon}
                    placeholder={undefined}
                    formMode={editMode}
                  />
                  <FormInput
                    icon={TwitchIcon}
                    placeholder={undefined}
                    formMode={editMode}
                  />
                  <FormInput
                    icon={YoutubeIcon}
                    placeholder={undefined}
                    formMode={editMode}
                  />
                </div>
              </Field>
            </div>
          </div>
          <Field>
            {editMode ? (
              <div className="mx-auto max-w-2xl relative flex justify-between w-full gap-4">
                <Button onClick={toggleEditMode} className="text-xl font-bold border-[3px] border-gray-900 text-gray-900 px-10 py-5 rounded-lg shadow-inner shadow-white/10 hover:bg-gray-900 hover:text-white">
                  Cancel
                </Button>
                <Button className="text-xl font-bold border-[3px] border-red-900 text-red-900 px-10 py-5 rounded-lg shadow-inner shadow-white/10 hover:bg-red-900 hover:text-white">
                  Remove
                </Button>
                <Button className="text-xl font-bold border-[3px] border-green-900 text-green-900 px-10 py-5 rounded-lg shadow-inner shadow-white/10 hover:bg-green-900 hover:text-white">
                  Save
                </Button>
              </div>
            ) : (
              <div className="mx-auto max-w-2xl relative flex justify-between w-full gap-4">
                <Button onClick={toggleEditMode} className="text-xl font-bold border-[3px] border-gray-900 text-gray-900 px-10 py-5 rounded-lg shadow-inner shadow-white/10 hover:bg-gray-900 hover:text-white">
                  Edit
                </Button>
                <Button className="text-xl font-bold border-[3px] border-red-900 text-red-900 px-10 py-5 rounded-lg shadow-inner shadow-white/10 hover:bg-red-900 hover:text-white">
                  Remove
                </Button>
              </div>
            )}
          </Field>
        </Fieldset>
      </div>
    </div>
  );
};

export default ViewCreator;
