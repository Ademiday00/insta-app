import yourstory from "../assets/YourStory.jpg";
import Hero4 from "../assets/Hero4.png";
import Hero5 from "../assets/Hero5.png";

export interface User {
  id: number;
  name: string;
  image: string;
  isCurrentUser: boolean;
}

const users: User[] = [
  {
    id: 1,
    name: "Your Story",
    image: yourstory,
    isCurrentUser: true,
  },
  {
    id: 2,
    name: "Celinapaul",
    image: Hero4,
    isCurrentUser: false,
  },
  {
    id: 3,
    name: "Jessica",
    image: Hero5,
    isCurrentUser: false,
  },
];

export default users;
