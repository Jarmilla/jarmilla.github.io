import nasaPic from "../img/FireShot Capture 005 - Daily Nasa - jarmilla.github.io.png";
import ryuutamaRoll from "../img/FireShot Capture 002 - Ryuutama rolls.png";
import adamisFront from "../img/ASDF Adamish SX7 - jarmilla.github.io.png";
import adamisData from "../img/ASDF Adamish SX7 - 2 jarmilla.github.io.png";

export const projects = [
  {
    name: "Nasa APOD",
    description: "Each day a different image or photograph of our universe is featured, along with a brief explanation written by a professional astronomer.",
    features: ["Astronomy Pictures Of the Day fetched from a Nasa API", "Preview previous 6 day pictures", "Search options for previous dates."],
    image: nasaPic,
  },
  {
    name: "Ryuutama Character Sheet",
    description:
      "At one point, in everyone’s lives, people get this intense feeling of wanderlust. They put their daily lives on hold and travel the world with new-found companions. They find out more about the world, and at the same time learn about themselves.",
    features: ["Create and edit your Ryuutama character", "Saving to localStorage", "Roll your checks for the game"],
    image: ryuutamaRoll,
  },
  {
    name: "Sci-Fi Scanner",
    description: "Search for QR codes, find your way to the next location, complite the given tasks, just like in Star Trek.",
    used: "Built for a sci-fi themed searching game. Got positive feedbacks from participants.",
    features: ["QR code scanner", "Weather forecast", "Optimized for mobile devices"],
    image: [adamisFront, adamisData],
  },
];
