//import React from "react";
import dayo from "../assets/Dayo.jpg";
import beauty from "../assets/landscape 1.jpeg";
import beauty2 from "../assets/landscap-2.jpeg";
import preach from "../assets/preach.jpeg";

export interface Slide {
  id: number;
  name: string;
  image: string;
  postImage: string;
  caption: string;
  likes: number;
  comments: number;
  shares: number;
  timeAgo: string;
}

const slide: Slide[] = [
  {
    id: 1,
    name: "Ayanbajo Funsho",
    image: dayo,
    postImage: beauty,
    caption: "Beautiful view",
    likes: 103,
    comments: 50,
    shares: 20,
    timeAgo: "3 days ago",
  },
  {
    id: 2,
    name: "Landscape-g",
    image: beauty2,
    postImage: beauty2,
    caption: "Stunning landscape",
    likes: 200,
    comments: 75,
    shares: 30,
    timeAgo: "2 days ago",
  },
  {
    id: 3,
    name: "pastorgeorge",
    image: preach,
    postImage: preach,
    caption: "Preach the word",
    likes: 150,
    comments: 60,
    shares: 25,
    timeAgo: "1 day ago",
  },
];
export default slide;
