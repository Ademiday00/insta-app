import React from "react";
import StoryCircle from "./StoryCircle";

const users = [
  { name: "CelinaMorgan", image: "Images.Hero4," },
  { name: "ChristianaPaul", image: "Images.Hero5" },
];

const Stories = () => {
  return (
    <>
      <div className=" d-flex">
        {users.map((users, index) => (
          <StoryCircle key={index} users={users} />
        ))}
      </div>
    </>
  );
};

export default Stories;
