import React from "react";
import RoboCard from "./Card";
const CardList = ({ robots }) => {
  return (
    <>
      {robots.map((item) => (
        <RoboCard
          key={item.id}
          image_url={`https://robohash.org/${item.id}?100x100`}
          name={item.name}
          username={item.username}
          email={item.email}
        />
      ))}
    </>
  );
};

export default CardList;
