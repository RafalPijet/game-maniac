import uuid from "uuid";
import BField5image from "../data/pictures/battlefield-v-200x249.jpg";
import BFront2image from "../data/pictures/star-wars-battlefront-2-200x249.jpg";
import Diablo3image from "../data/pictures/star-wars-battlefront-2-200x249.jpg";
import Surge2image from "../data/pictures/the-surge-2-200x253.jpg";

const gamesData = [
    {
        id: uuid.v4(),
        name: "Battlefield 5",
        platform: "PS4",
        image: BField5image,
        price: 249,
        quantity: 20
    },
    {
        id: uuid.v4(),
        name: "Battlefront 2",
        platform: "PS4",
        image: BFront2image,
        price: 179,
        quantity: 5
    },
    {
        id: uuid.v4(),
        name: "Diablo 3",
        platform: "PS4",
        image: Diablo3image,
        price: 119,
        quantity: 11
    },
    {
        id: uuid.v4(),
        name: "Surge 2",
        platform: "PS4",
        image: Surge2image,
        price: 239,
        quantity: 78
    },
];

export default gamesData;
