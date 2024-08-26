import CardGroup, { CardGroupInterface } from "../components/CreatorCardGroup";

const ShowAllCreators = () => {
    const testData: CardGroupInterface = {
        cards: [
            {
                id: "1",
                creator: {
                  name: "John Doe",
                  url: "/user/1",
                  description: "Popular TikTok content creator",
                  imageURL:
                    "https://xcancel.com/pic/media%2FGN9e5XOa4AAaf9L.jpg%3Fname%3Dsmall%26format%3Dwebp",
                  socialMedia: {
                    id: 1,
                    tiktok: "https://www.tiktok.com/@johndoe",
                    instagram: "https://www.instagram.com/johndoe",
                    twitter: "https://www.twitter.com/johndoe",
                    twitch: undefined,
                    youtube: undefined,
                  },
                },
              },
              {
                id: "2",
                creator: {
                  name: "Jane Smith",
                  url: "https://www.tiktok.com/@janesmith",
                  description: "Creative influencer and video editor",
                  imageURL:
                    "https://xcancel.com/pic/media%2FF7wbHy2agAAZIgc.jpg%3Fname%3Dsmall%26format%3Dwebp",
                  socialMedia: {
                    id: 2,
                    tiktok: "https://www.tiktok.com/@janesmith",
                    youtube: "https://www.youtube.com/janesmith",
                    instagram: undefined,
                    twitch: undefined,
                    twitter: undefined,
                  },
                },
              },
              {
                id: "3",
                creator: {
                  name: "Alex Johnson",
                  url: "https://www.tiktok.com/@alexjohnson",
                  description: "Travel vlogger with a passion for adventure",
                  imageURL:
                    "https://xcancel.com/pic/media%2FGTXnTj4bwAALz1J.jpg%3Fname%3Dsmall%26format%3Dwebp",
                  socialMedia: {
                    id: 3,
                    instagram: "https://www.instagram.com/alexjohnson",
                    twitter: "https://www.twitter.com/alexjohnson",
                    twitch: undefined,
                    tiktok: undefined,
                    youtube: undefined,
                  },
                },
              },
              {
                id: "4",
                creator: {
                  name: "Slutty Tina",
                  url: "https://www.tiktok.com/@alexjohnson",
                  description: "Travel vlogger with a passion for adventure",
                  imageURL:
                    "https://xcancel.com/pic/media%2FF5wi_ljaIAI04Lc.jpg%3Fname%3Dsmall%26format%3Dwebp",
                  socialMedia: {
                    id: 3,
                    instagram: "https://www.instagram.com/alexjohnson",
                    twitter: "https://www.twitter.com/alexjohnson",
                    twitch: undefined,
                    tiktok: undefined,
                    youtube: undefined,
                  },
                },
              },
              {
                id: "5",
                creator: {
                  name: "Sexy Nina",
                  url: "https://www.tiktok.com/@alexjohnson",
                  description: "Travel vlogger with a passion for adventure",
                  imageURL:
                    "https://xcancel.com/pic/media%2FF6z13TcbQAAY6vM.jpg%3Fname%3Dsmall%26format%3Dwebp",
                  socialMedia: {
                    id: 3,
                    instagram: "https://www.instagram.com/alexjohnson",
                    twitter: "https://www.twitter.com/alexjohnson",
                    twitch: undefined,
                    tiktok: undefined,
                    youtube: undefined,
                  },
                },
              },
              {
                id: "1",
                creator: {
                  name: "John Doe",
                  url: "https://www.tiktok.com/@johndoe",
                  description: "Popular TikTok content creator",
                  imageURL:
                    "https://xcancel.com/pic/media%2FGN9e5XOa4AAaf9L.jpg%3Fname%3Dsmall%26format%3Dwebp",
                  socialMedia: {
                    id: 1,
                    tiktok: "https://www.tiktok.com/@johndoe",
                    instagram: "https://www.instagram.com/johndoe",
                    twitter: "https://www.twitter.com/johndoe",
                    twitch: undefined,
                    youtube: undefined,
                  },
                },
              },
              {
                id: "2",
                creator: {
                  name: "Jane Smith",
                  url: "https://www.tiktok.com/@janesmith",
                  description: "Creative influencer and video editor",
                  imageURL:
                    "https://xcancel.com/pic/media%2FF7wbHy2agAAZIgc.jpg%3Fname%3Dsmall%26format%3Dwebp",
                  socialMedia: {
                    id: 2,
                    tiktok: "https://www.tiktok.com/@janesmith",
                    youtube: "https://www.youtube.com/janesmith",
                    instagram: undefined,
                    twitch: undefined,
                    twitter: undefined,
                  },
                },
              },
              {
                id: "3",
                creator: {
                  name: "Alex Johnson",
                  url: "https://www.tiktok.com/@alexjohnson",
                  description: "Travel vlogger with a passion for adventure",
                  imageURL:
                    "https://xcancel.com/pic/media%2FGTXnTj4bwAALz1J.jpg%3Fname%3Dsmall%26format%3Dwebp",
                  socialMedia: {
                    id: 3,
                    instagram: "https://www.instagram.com/alexjohnson",
                    twitter: "https://www.twitter.com/alexjohnson",
                    twitch: undefined,
                    tiktok: undefined,
                    youtube: undefined,
                  },
                },
              },
              {
                id: "4",
                creator: {
                  name: "Slutty Tina",
                  url: "https://www.tiktok.com/@alexjohnson",
                  description: "Travel vlogger with a passion for adventure",
                  imageURL:
                    "https://xcancel.com/pic/media%2FF5wi_ljaIAI04Lc.jpg%3Fname%3Dsmall%26format%3Dwebp",
                  socialMedia: {
                    id: 3,
                    instagram: "https://www.instagram.com/alexjohnson",
                    twitter: "https://www.twitter.com/alexjohnson",
                    twitch: undefined,
                    tiktok: undefined,
                    youtube: undefined,
                  },
                },
              },
              {
                id: "5",
                creator: {
                  name: "Sexy Nina",
                  url: "https://www.tiktok.com/@alexjohnson",
                  description: "Travel vlogger with a passion for adventure",
                  imageURL:
                    "https://xcancel.com/pic/media%2FF6z13TcbQAAY6vM.jpg%3Fname%3Dsmall%26format%3Dwebp",
                  socialMedia: {
                    id: 3,
                    instagram: "https://www.instagram.com/alexjohnson",
                    twitter: "https://www.twitter.com/alexjohnson",
                    twitch: undefined,
                    tiktok: undefined,
                    youtube: undefined,
                  },
                },
              },
          {
            id: "1",
            creator: {
              name: "John Doe",
              url: "https://www.tiktok.com/@johndoe",
              description: "Popular TikTok content creator",
              imageURL:
                "https://xcancel.com/pic/media%2FGN9e5XOa4AAaf9L.jpg%3Fname%3Dsmall%26format%3Dwebp",
              socialMedia: {
                id: 1,
                tiktok: "https://www.tiktok.com/@johndoe",
                instagram: "https://www.instagram.com/johndoe",
                twitter: "https://www.twitter.com/johndoe",
                twitch: undefined,
                youtube: undefined,
              },
            },
          },
          {
            id: "2",
            creator: {
              name: "Jane Smith",
              url: "https://www.tiktok.com/@janesmith",
              description: "Creative influencer and video editor",
              imageURL:
                "https://xcancel.com/pic/media%2FF7wbHy2agAAZIgc.jpg%3Fname%3Dsmall%26format%3Dwebp",
              socialMedia: {
                id: 2,
                tiktok: "https://www.tiktok.com/@janesmith",
                youtube: "https://www.youtube.com/janesmith",
                instagram: undefined,
                twitch: undefined,
                twitter: undefined,
              },
            },
          },
          {
            id: "3",
            creator: {
              name: "Alex Johnson",
              url: "https://www.tiktok.com/@alexjohnson",
              description: "Travel vlogger with a passion for adventure",
              imageURL:
                "https://xcancel.com/pic/media%2FGTXnTj4bwAALz1J.jpg%3Fname%3Dsmall%26format%3Dwebp",
              socialMedia: {
                id: 3,
                instagram: "https://www.instagram.com/alexjohnson",
                twitter: "https://www.twitter.com/alexjohnson",
                twitch: undefined,
                tiktok: undefined,
                youtube: undefined,
              },
            },
          },
          {
            id: "4",
            creator: {
              name: "Slutty Tina",
              url: "https://www.tiktok.com/@alexjohnson",
              description: "Travel vlogger with a passion for adventure",
              imageURL:
                "https://xcancel.com/pic/media%2FF5wi_ljaIAI04Lc.jpg%3Fname%3Dsmall%26format%3Dwebp",
              socialMedia: {
                id: 3,
                instagram: "https://www.instagram.com/alexjohnson",
                twitter: "https://www.twitter.com/alexjohnson",
                twitch: undefined,
                tiktok: undefined,
                youtube: undefined,
              },
            },
          },
          {
            id: "5",
            creator: {
              name: "Sexy Nina",
              url: "https://www.tiktok.com/@alexjohnson",
              description: "Travel vlogger with a passion for adventure",
              imageURL:
                "https://xcancel.com/pic/media%2FF6z13TcbQAAY6vM.jpg%3Fname%3Dsmall%26format%3Dwebp",
              socialMedia: {
                id: 3,
                instagram: "https://www.instagram.com/alexjohnson",
                twitter: "https://www.twitter.com/alexjohnson",
                twitch: undefined,
                tiktok: undefined,
                youtube: undefined,
              },
            },
          },
        ],
      };
    return (
        <div className="mx-auto px-4 py-16 bg-gray-100">
            <CardGroup cards={testData.cards}/>
        </div>
    )
}

export default ShowAllCreators;