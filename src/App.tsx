import { useState } from "react";
import { useRoutes } from "react-router-dom";
import Creator from "./types";
import Navbar from "./components/Navigator";
import CardGroup, { CardGroupInterface } from "./components/CreatorCardGroup";

function App() {
  const [count, setCount] = useState(0);

  const testData: CardGroupInterface = {
    cards: [
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
            "https://xcancel.com/pic/media%2FGCnRWxuaUAAEHfm.jpg%3Fname%3Dsmall%26format%3Dwebp",
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
            "https://xcancel.com/pic/media%2FF2IrbJwbkAAjQQj.jpg%3Fname%3Dsmall%26format%3Dwebp",
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
      // Add more test data as needed
    ],
  };

  return (
    <>
      <Navbar />
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <CardGroup cards={testData.cards} />
        </div>
      </div>
    </>
  );
}

export default App;
