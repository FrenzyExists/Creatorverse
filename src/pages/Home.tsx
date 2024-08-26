import { Button } from "@headlessui/react";
import CardGroup, { CardGroupInterface } from "../components/CreatorCardGroup";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";

const Home = () => {

  return (
    <>
      <Hero />
      {/* SVG art goes here */}
      <div className="w-full h-auto z-0">
        <svg
          width="574"
          height="173"
          viewBox="0 0 574 173"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto absolute"
        >
          <path
            d="M0 170.188L10.533 169.4C20.067 168.612 39.133 167.037 58.2 161.127C77.267 155.218 96.333 144.975 115.4 147.339C134.467 149.703 153.533 164.673 172.6 169.794C191.667 174.916 210.733 170.188 229.8 165.066C248.867 159.946 267.933 154.43 287 149.309C306.067 144.188 325.133 139.46 344.2 133.945C363.267 128.429 382.333 122.126 401.4 127.247C420.467 132.369 439.533 148.914 458.6 152.855C477.667 156.794 496.733 148.127 515.8 139.854C534.867 131.581 553.933 123.702 563.467 119.762L574 115.823V0H0V115.823Z"
            fill="#005792"
          />
          <path
            d="M0 170.188L10.533 169.4C20.067 168.612 39.133 167.037 58.2 161.127C77.267 155.218 96.333 144.975 115.4 147.339C134.467 149.703 153.533 164.673 172.6 169.794C191.667 174.916 210.733 170.188 229.8 165.066C248.867 159.946 267.933 154.43 287 149.309C306.067 144.188 325.133 139.46 344.2 133.945C363.267 128.429 382.333 122.126 401.4 127.247C420.467 132.369 439.533 148.914 458.6 152.855C477.667 156.794 496.733 148.127 515.8 139.854C534.867 131.581 553.933 123.702 563.467 119.762L574 115.823"
            stroke="#043A5F"
          />
        </svg>
      </div>
      <div className="bg-white">
        <div className="w-full flex justify-center">
          <div className="mx-auto max-w-2xl relative flex justify-between w-full">
            <Link to="/new-creator">
              <Button className="bg-gray-100 text-gray-900 text-xl font-bold border-[3px] border-gray-900 px-10 py-5 rounded-lg shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-200">
                Add A Creator
              </Button>
            </Link>
            <Link to="/user/all">
              <Button className="bg-gray-100 text-gray-900 text-xl font-bold border-[3px] border-gray-900 px-10 py-5 rounded-lg shadow-inner shadow-white/10  focus:outline-none data-[hover]:bg-gray-200">
                View All Creators
              </Button>
            </Link>
          </div>
        </div>
        <div className="relative">
          <h2 className="text-7xl font-extrabold pt-44 text-center text-gray-100 text-pop-stroke">
            Top 5 Creators
          </h2>
        </div>
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl xl:max-w-full xl:px-10 lg:px-8">
          <CardGroup cards={testData.cards} />
        </div>
      </div>
    </>
  );
};

export default Home;
