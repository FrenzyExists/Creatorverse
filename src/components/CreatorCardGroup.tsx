import { Key } from "react";
import Creator from "../types";
import Card from "./CreatorCard";

export interface CardGroupInterface {
  cards: {
    id: Key,
    creator: Creator
  }[];
}

const CardGroup = ( { cards } : CardGroupInterface) => {
  return (
    <section className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {cards.map( (card, index) => (
       <Card
       key={index}
       id={card.id}
       creator={card.creator}
       />
      ))}
    </section>
  );
};

export default CardGroup;
