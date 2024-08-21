import { useNavigate } from "react-router-dom";
import Creator from "../types";
import { Key } from "react";

import TikTokIcon from "../assets/tiktok-brands-solid.svg";
import YoutubeIcon from "../assets/youtube-brands-solid.svg";
import TwitchIcon from "../assets/twitch-brands-solid.svg";
import XTwitterIcon from "../assets/x-twitter-brands-solid.svg";
import InstagramIcon from "../assets/instagram-brands-solid.svg";
import IncognitoIcon from "../assets/user-secret-solid.svg";

interface CardInformation {
  id: Key;
  creator: Creator;
}

const socialMediaIcons: { [key: string]: string } = {
  tiktok: TikTokIcon,
  instagram: InstagramIcon,
  twitter: XTwitterIcon,
  youtube: YoutubeIcon,
  twitch: TwitchIcon,
  incognito: IncognitoIcon,
};

const Card = ({ creator, id }: CardInformation) => {
  // const navigate = useNavigate();

  //   const handleClick = () => {
  //       navigate(`/creator/${id}`)
  //   }

  const socialMediaList = [
    { type: "tiktok", url: creator.socialMedia?.tiktok },
    { type: "twitter", url: creator.socialMedia?.twitter },
    { type: "instagram", url: creator.socialMedia?.instagram },
    { type: "youtube", url: creator.socialMedia?.youtube },
    { type: "twitch", url: creator.socialMedia?.twitch },
  ]
    .filter((sm) => sm.url)
    .slice(0, 3);

  return (
    <article className="group relative">
      <a key={id} href={creator.url}>
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
          <img
            src={creator.imageURL}
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>
        <div className="mt-4 flex justify-between items-center">
          <h3 className="text-sm text-gray-700">{creator.name}</h3>
          <div className="flex">
            {socialMediaList.map((sm) => (
              <a key={sm.type} href={sm.url || "#"} className="w-6 mx-2 flex">
                <img src={socialMediaIcons[sm.type]} alt={sm.type}/>
              </a>
            ))}
          </div>
        </div>
      </a>
    </article>
  );
};
export default Card;
