type Creator = {
    name: String,
    url: string,
    description: String,
    imageURL: string|undefined
    socialMedia: SocialMedia|undefined
};
type SocialMedia = {
    id: Number,
    tiktok: string|undefined,
    youtube: string|undefined,
    instagram: string|undefined,
    twitch: string|undefined,
    twitter: string|undefined
}
export default Creator;