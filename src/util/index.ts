import { CardGroupInterface } from "../components/CreatorCardGroup";
import { Creator, SocialMedia } from "../types";

export interface rawCreatorData {
  id: number;
  name: string;
  description?: string;
  image_url?: string;
  tiktok_url?: string;
  youtube_url?: string;
  instagram_url?: string;
  twitch_url?: string;
  twitter_x_url?: string;
}

export interface NavigationInterfaceItem {
  name: string;
  route: string;
  current: boolean;
  leftSide: boolean;
}

// Define the interface for the Navbar component
export interface NavbarProps {
  nav: NavigationInterfaceItem[];
  handleNavigation: (name: string) => void;
}

export const rawCreatorDataToCreatorType = (
  data: rawCreatorData[]
): Creator[] => {
  return data.map((i) => {
    const socialMedia: SocialMedia | undefined =
      i.tiktok_url ||
      i.youtube_url ||
      i.instagram_url ||
      i.twitch_url ||
      i.twitter_x_url
        ? {
            tiktok: i.tiktok_url,
            youtube: i.youtube_url,
            instagram: i.instagram_url,
            twitch: i.twitch_url,
            twitter: i.twitter_x_url,
          }
        : undefined;

    const creator: Creator = {
      name: i.name,
      description: "",
      imageURL: i.image_url,
      socialMedia: socialMedia,
      url: "",
      id: i.id,
    };
    return creator;
  });
};
