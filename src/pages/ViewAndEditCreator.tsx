import { useEffect, useState } from "react";
import {Creator, SocialMedia } from "../types";
import { useNavigate, useParams } from "react-router-dom";
import {
  Button,
  Field,
  Fieldset,
  Input,
  Label,
  Legend,
  Textarea,
} from "@headlessui/react";
import TikTokIcon from "../assets/tiktok-brands-solid.svg";
import InstagramIcon from "../assets/instagram-brands-solid.svg";
import TwitchIcon from "../assets/twitch-brands-solid.svg";
import XTwitterIcon from "../assets/x-twitter-brands-solid.svg";
import YoutubeIcon from "../assets/youtube-brands-solid.svg";
import { ImageIcon } from "../assets/image-solid";
import { supabase } from "../client";

interface rawCreatorData {
  id: number;
  name: string;
  description: string;
  image_url?: string;
  tiktok_url?: string;
  youtube_url?: string;
  instagram_url?: string;
  twitch_url?: string;
  twitter_x_url?: string;
}

const ViewCreator = () => {
  const { id } = useParams<{ id: string }>();
  const [editMode, setEditMode] = useState(false);
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

  const [originalData, setOriginalData] = useState<rawCreatorData | null>(null);

  const navigate = useNavigate();

  const rawCreatorDataToCreatorType = (data: rawCreatorData[]): Creator[] => {
    return data.map((i) => {
      const socialMedia: SocialMedia | undefined =
        i.tiktok_url ||
        i.youtube_url ||
        i.instagram_url ||
        i.twitch_url ||
        i.twitter_x_url
          ? {
              id: i.id,
              tiktok: i.tiktok_url,
              youtube: i.youtube_url,
              instagram: i.instagram_url,
              twitch: i.twitch_url,
              twitter: i.twitter_x_url,
            }
          : undefined;

      const creator: Creator = {
        name: i.name,
        description: i.description,
        imageURL: i.image_url,
        socialMedia: socialMedia,
        url: ""
      };
      return creator;
    });
  };

  const toggleEditMode = () => {
    setEditMode((prevEditMode) => !prevEditMode);
  };

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

  const handleUrlInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImageSrc(event.target.value);
  };

  const handleCancelEdit = () => {
    if (originalData) {
      setName(originalData.name);
      setDescription(originalData.description);
      setImageSrc(originalData.image_url);
      setTiktokUrl(originalData.tiktok_url);
      setXTwitterUrl(originalData.twitter_x_url);
      setInstagramUrl(originalData.instagram_url);
      setYouTubeUrl(originalData.youtube_url);
      setTwitchUrl(originalData.twitch_url);
    }
    toggleEditMode();
  };

  const handleRemoveCreator = async () => {
    const { error } = await supabase.from("creators").delete().eq("id", id);

    if (error) {
      console.error("Error removing creator:", error);
    } else {
      console.log("Creator removed successfully");
      navigate("/all-creators"); // Redirect to the creators list page after deletion
    }
  };

  const handleCancelView = async () => {
    navigate("/all-creators")
  }

  const handleGetCreator = async () => {
    const { data, error } = await supabase
      .from("creators")
      .select(
        "id, name, description, image_url, tiktok_url, youtube_url, instagram_url, youtube_url, twitch_url, twitter_x_url"
      )
      .eq("id", id);
    if (error) {
      console.error("Error obtainting creators: ", error);
    } else {
      console.log("Creators obtained succesfully ", data);
      setOriginalData(data[0]);
      setName(data[0].name);
      setImageSrc(data[0].image_url);
      setDescription(data[0].description);
      setTiktokUrl(data[0].tiktok_url);
      setYouTubeUrl(data[0].youtube_url);
      setInstagramUrl(data[0].instagram_url);
      setTwitchUrl(data[0].twitch_url);
      setXTwitterUrl(data[0].twitter_x_url);
    }
  };

  const handleUpdateCreator = async () => {
    const { data, error } = await supabase
      .from("creators")
      .update({
        name: name,
        description: description,
        image_url: imageSrc,
        tiktok_url: tiktokUrl,
        youtube_url: youTubeUrl,
        instagram_url: instagramUrl,
        twitch_url: twitchUrl,
        twitter_x_url: xTwitterUrl
      })
      .eq("id", id);

    if (error) {
      console.error("Error updating creator id:", error);
    } else {
      console.log("Creator updated:", data);
    }
  };

  useEffect(() => {
    handleGetCreator();
  }, []);

  return (
    <div className="relative w-full h-full min-h-screen bg-[#0084C8] ">
      <div className="absolute top-0 left-0 w-full h-auto -z-3">
        <svg
          className="w-full h-auto"
          width="574"
          height="93"
          viewBox="0 0 574 93"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 61.0907L16.889 60.485C32.778 59.8785 64.556 58.6671 96.333 63.2123C128.111 67.7575 159.889 78.0608 191.667 79.273C223.444 80.4852 255.222 72.6063 287 69.879C318.778 67.1517 350.556 69.5761 382.333 68.9697C414.111 68.3639 445.889 64.7273 477.667 68.0603C509.444 71.3941 541.222 81.6967 557.111 86.8483L574 92"
            stroke="#043A5F"
            strokeWidth="2"
          />
          <path
            d="M0 61.0907L16.889 60.485C32.778 59.8785 64.556 58.6671 96.333 63.2123C128.111 67.7575 159.889 78.0608 191.667 79.273C223.444 80.4852 255.222 72.6063 287 69.879C318.778 67.1517 350.556 69.5761 382.333 68.9697C414.111 68.3639 445.889 64.7273 477.667 68.0603C509.444 71.3941 541.222 81.6967 557.111 86.8483L574 92V0H0V61.0907Z"
            fill="#005792"
          />
        </svg>
      </div>
      <div className="bg-gray-100 w-full max-w-6xl relative mx-auto px-8 border-[#043A5F] border-4 rounded-3xl pb-8 pt-6">
        <Fieldset className="">
          <div className="grid grid-cols-3 gap-8 items-start">
            <Field className="">
              <Label className="font-bold text-gray-900 text-2xl">
                Profile Picture
              </Label>

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
              {editMode ? (
                <div className="mt-3 relative flex items-center rounded-lg overflow-hidden">
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
              ) : (
                <></>
              )}
            </Field>
            <div className="col-span-2">
              <Field className="mb-6">
                <Label className="font-bold text-gray-900 text-2xl">Name</Label>
                <div className="relative flex items-center rounded-lg group mt-4">
                  {editMode ? (
                    <Input
                      type="text"
                      value={name || undefined}
                      placeholder="John Doe"
                      onChange={(e) => setName(e.target.value)}
                      className="outline-2 pr-2 leading-5 outline-gray-300 flex-grow placeholder:italic text-gray-800 h-full py-3 pl-2 outline-none focus:outline focus:outline-[#94c7c1] rounded-lg focus:outline-2 focus:outline-offset-2"
                    />
                  ) : (
                    <div className="flex-grow flex items-center h-full py-3 leading-5 pl-2 outline-none rounded-lg outline-2 pr-2 outline-gray-300 placeholder:italic text-gray-800">
                      {name || "Unknown"}
                    </div>
                  )}
                </div>
              </Field>
              <Field className="mb-6">
                <Label className="font-bold text-gray-900 text-2xl">
                  About Me
                </Label>
                <div className="flex-grow outline-gray-300 outline-none outline-2 relative flex items-center rounded-lg group mt-4">
                  {editMode ? (
                    <Textarea
                      placeholder="I am the one, don't weight a ton
Don't need a gun to get respect on the street..."
                      value={description || undefined}
                      rows={1}
                      onChange={(e) => setDescription(e.target.value)}
                      className="outline-2 px-2 outline-gray-300 flex-grow placeholder:italic text-gray-800 h-full py-3 outline-none focus:outline focus:outline-[#94c7c1] rounded-lg focus:outline-2 focus:outline-offset-2"
                    />
                  ) : (
                    <p className="px-2 flex-grow text-gray-800 h-full py-3 outline-none">
                      {description}
                    </p>
                  )}
                </div>
              </Field>
              <Field className="mb-6">
                <Legend className="font-bold text-gray-900 text-2xl mb-2">
                  My Social Media
                </Legend>
                <div className="space-y-8">
                  <div className="relative flex items-center rounded-lg group">
                    {editMode ? (
                      <Input
                        type="url"
                        placeholder="TikTok"
                        value={tiktokUrl || undefined}
                        onChange={(e) => setTiktokUrl(e.target.value)}
                        className="outline-2 pr-2 leading-5 outline-gray-300 flex-grow placeholder:italic text-gray-800 h-full py-3 pl-14 outline-none focus:outline focus:outline-[#94c7c1] rounded-lg focus:outline-2 focus:outline-offset-2"
                      />
                    ) : (
                      <div className="flex-grow flex items-center h-full py-3 leading-5 pl-14 outline-none rounded-lg outline-2 pr-2 outline-gray-300 placeholder:italic text-gray-800">
                        {tiktokUrl || "Data Not Found"}
                      </div>
                    )}
                    <div className="absolute left-0 w-12">
                      <img
                        src={TikTokIcon || undefined}
                        className="w-full h-full px-4 py-3 font-extrabold bg-gray-200 text-gray-900 rounded-none rounded-l-lg border-l-0 shadow-sm"
                      />
                    </div>
                  </div>

                  <div className="relative flex items-center rounded-lg group">
                    {editMode ? (
                      <Input
                        type="url"
                        value={instagramUrl || undefined}
                        placeholder="Instagram"
                        onChange={(e) => setInstagramUrl(e.target.value)}
                        className="outline-2 pr-2 leading-5 outline-gray-300 flex-grow placeholder:italic text-gray-800 h-full py-3 pl-14 outline-none focus:outline focus:outline-[#94c7c1] rounded-lg focus:outline-2 focus:outline-offset-2"
                      />
                    ) : (
                      <div className="flex-grow flex items-center h-full py-3 leading-5 pl-14 outline-none rounded-lg outline-2 pr-2 outline-gray-300 placeholder:italic text-gray-800">
                        {instagramUrl || "Data Not Found"}
                      </div>
                    )}
                    <div className="absolute left-0 w-12">
                      <img
                        src={InstagramIcon}
                        className="w-full h-full px-4 py-3 font-extrabold bg-gray-200 text-gray-900 rounded-none rounded-l-lg border-l-0 shadow-sm"
                      />
                    </div>
                  </div>

                  <div className="relative flex items-center rounded-lg group">
                    {editMode ? (
                      <Input
                        type="url"
                        placeholder="Youtube"
                        value={youTubeUrl || undefined}
                        onChange={(e) => setYouTubeUrl(e.target.value)}
                        className="outline-2 pr-2 leading-5 outline-gray-300 flex-grow placeholder:italic text-gray-800 h-full py-3 pl-14 outline-none focus:outline focus:outline-[#94c7c1] rounded-lg focus:outline-2 focus:outline-offset-2"
                      />
                    ) : (
                      <div className="flex-grow flex items-center h-full py-3 leading-5 pl-14 outline-none rounded-lg outline-2 pr-2 outline-gray-300 placeholder:italic text-gray-800">
                        {youTubeUrl || "Data Not Found"}
                      </div>
                    )}
                    <div className="absolute left-0 w-12">
                      <img
                        src={YoutubeIcon}
                        className="w-full h-full px-4 py-3 font-extrabold bg-gray-200 text-gray-900 rounded-none rounded-l-lg border-l-0 shadow-sm"
                      />
                    </div>
                  </div>

                  <div className="relative flex items-center rounded-lg group">
                    {editMode ? (
                      <Input
                        type="url"
                        placeholder="Twitter X"
                        value={xTwitterUrl}
                        onChange={(e) => setXTwitterUrl(e.target.value)}
                        className="outline-2 pr-2 leading-5 outline-gray-300 flex-grow placeholder:italic text-gray-800 h-full py-3 pl-14 outline-none focus:outline focus:outline-[#94c7c1] rounded-lg focus:outline-2 focus:outline-offset-2"
                      />
                    ) : (
                      <div className="flex-grow flex items-center h-full py-3 leading-5 pl-14 outline-none rounded-lg outline-2 pr-2 outline-gray-300 placeholder:italic text-gray-800">
                        {xTwitterUrl || "Data Not Found"}
                      </div>
                    )}
                    <div className="absolute left-0 w-12">
                      <img
                        src={XTwitterIcon}
                        className="w-full h-full px-4 py-3 font-extrabold bg-gray-200 text-gray-900 rounded-none rounded-l-lg border-l-0 shadow-sm"
                      />
                    </div>
                  </div>

                  <div className="relative flex items-center rounded-lg group">
                    {editMode ? (
                      <Input
                        type="url"
                        placeholder="Twitch"
                        value={twitchUrl || undefined}
                        onChange={(e) => setTwitchUrl(e.target.value)}
                        className="outline-2 pr-2 leading-5 outline-gray-300 flex-grow placeholder:italic text-gray-800 h-full py-3 pl-14 outline-none focus:outline focus:outline-[#94c7c1] rounded-lg focus:outline-2 focus:outline-offset-2"
                      />
                    ) : (
                      <div className="flex-grow flex items-center h-full py-3 leading-5 pl-14 outline-none rounded-lg outline-2 pr-2 outline-gray-300 placeholder:italic text-gray-800">
                        {twitchUrl || "Data Not Found"}
                      </div>
                    )}
                    <div className="absolute left-0 w-12">
                      <img
                        src={TwitchIcon}
                        className="w-full h-full px-4 py-3 font-extrabold bg-gray-200 text-gray-900 rounded-none rounded-l-lg border-l-0 shadow-sm"
                      />
                    </div>
                  </div>
                </div>
              </Field>
            </div>
          </div>
          <Field>
            {editMode ? (
              <div>
                <div className="mx-auto grid grid-cols-2 relative">
                  <Button 
                  onClick={handleUpdateCreator}
                  className="text-xl font-bold flex items-center justify-center gap-x-2.5 p-3 text-blue-900 border-[3px] border-blue-900 hover:bg-blue-900 hover:text-gray-100 rounded-lg mr-2 py-5">
                    Save Creator
                  </Button>
                  <Button
                    className="text-xl font-bold border-[3px] border-red-900 text-red-900 px-10 flex items-center justify-center gap-x-2.5 p-3 hover:bg-red-900 hover:text-gray-100 rounded-lg ml-2 py-5"
                    onClick={handleCancelEdit}
                  >
                    Cancel
                  </Button>
                </div>
                <div className="mx-auto grid grid-cols-1 relative">
                  <Button 
                  onClick={handleRemoveCreator}
                  className="text-xl font-bold border-[3px] border-gray-900 text-gray-900 px-10 flex items-center justify-center p-3 hover:bg-gray-900 hover:text-gray-100 rounded-lg mt-5 py-5">
                    Remove Creator
                  </Button>
                </div>
              </div>
            ) : (
              <div className="mx-auto grid grid-cols-2 relative">
                <Button
                  className="text-xl font-bold border-[3px] border-blue-900 text-blue-900 flex items-center justify-center gap-x-2.5 p-3 hover:bg-blue-900 hover:text-gray-100 rounded-lg mr-2 py-5"
                  onClick={toggleEditMode}
                >
                  Edit Creator
                </Button>
                <Button 
                onClick={handleCancelView}
                className="text-xl font-bold border-[3px] border-red-900 text-red-900 px-10 flex items-center justify-center gap-x-2.5 p-3 hover:bg-red-900 hover:text-gray-100 rounded-lg ml-2 py-5">
                  Cancel
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
