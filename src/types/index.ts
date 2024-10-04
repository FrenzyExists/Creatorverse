import { ReactNode } from "react";

export type Creator = {
    id: Number,
    name: string,
    url: string,
    description: String,
    imageURL: string|undefined
    socialMedia: SocialMedia|undefined
};
export type SocialMedia = {
    tiktok: string|undefined,
    youtube: string|undefined,
    instagram: string|undefined,
    twitch: string|undefined,
    twitter: string|undefined
}
export interface Modal {
    isOpen: boolean,
    onClose: () => void,
    propeties: {}|undefined,
    children: ReactNode
};
