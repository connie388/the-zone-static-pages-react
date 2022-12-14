import { v4 as uuidv4 } from "uuid";

const photoList = [
  {
    index: uuidv4(),
    text: "Explore the minecraft feature party room",
    label: "Party Room Rental",
    path: "/pricing",
    img: "img-1.jpg",
  },
  {
    index: uuidv4(),
    text: "Princess feature room with catering services",
    label: "Event Planning",
    path: "/pricing",
    img: "img-2.jpg",
  },

  {
    index: uuidv4(),
    text: "Professional photography",
    label: "Photograpy Service",
    path: "/pricing",
    img: "img-3.jpg",
  },
  {
    index: uuidv4(),
    text: "Yummy yummy",
    label: "Catering Service",
    path: "/pricing",
    img: "img-4.jpg",
  },
];

export default photoList;
