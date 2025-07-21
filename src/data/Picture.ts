import collab from "../assets/colllab.jpeg";
import downlaod from "../assets/download.jpeg";
import javascr from "../assets/javscrfr.png";
import person from "../assets/perso.jpeg";
import reach from "../assets/rec.png";

export interface Pictures {
  name: string;
  url: string;
}

const pictures: Pictures[] = [
  {
    name: "colllab.jpeg",
    url: collab,
  },
  {
    name: "downlaod.jpeg",
    url: downlaod,
  },
  {
    name: "javscrfr.png",
    url: javascr,
  },
  {
    name: "perso.jpeg",
    url: person,
  },
  {
    name: "rec.png",
    url: reach,
  },
];
export default pictures;
