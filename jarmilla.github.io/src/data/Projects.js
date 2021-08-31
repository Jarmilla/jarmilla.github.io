import nasaPic from "../img/FireShot Capture 005 - Daily Nasa - jarmilla.github.io.png";
import ryuutama from "../img/FireShot Capture 002 - Ryuutama - jarmilla.github.io.png";
import adamisFront from "../img/ASDF Adamish SX7 - jarmilla.github.io.png";
import adamisData from "../img/ASDF Adamish SX7 - 2 jarmilla.github.io.png";

import nasaBG from "../img/nasa-yZygONrUBe8-unsplash.jpg";
import ryuutamaBG from "../img/ryuutama_cover_pic.jpg";
import startrekBG from "../img/dom-talbot-ZuFxrKGzAj4-unsplash.jpg";

export const projects = [
  {
    name: "Astronomy Pictures Of the Day",
    description: "Each day a different image or photograph of our universe is featured, along with a brief explanation written by a professional astronomer.",
    features: ["Fetched from an API (Nasa APOD)", "Preview previous 6 day pictures", "Search options for previous dates."],
    ghPages: "https://jarmilla.github.io/nasa-open-API/",
    github: "https://github.com/Jarmilla/nasa-open-API",
    image: nasaPic,
    background: {
      img: nasaBG,
      alt: "Photo by NASA on Unsplash",
      backgroundSize: "cover",
    },
  },
  {
    name: "Ryuutama RPG Character Sheet",
    description:
      "At one point, in everyone’s lives, people get this intense feeling of wanderlust. They put their daily lives on hold and travel the world with new-found companions. They find out more about the world, and at the same time learn about themselves.",
    features: ["Create and edit your Ryuutama character", "Saving to localStorage", "Roll your checks for the game"],
    ghPages: "https://jarmilla.github.io/ryuutama-rpg/",
    github: "https://github.com/Jarmilla/ryuutama-rpg",
    image: ryuutama,
    background: {
      img: ryuutamaBG,
      alt: "Image from http://kotohi.com/ryuutama/",
      backgroundSize: "contain",
    },
  },
  {
    name: "Sci-Fi Scanner",
    description: "Search for QR codes, find your way to the next location, complite the given tasks, just like in Star Trek.",
    used: "Built for a sci-fi themed searching game. Got positive feedbacks from participants.",
    features: ["QR code scanner", "Weather forecast", "Optimized for mobile devices"],
    ghPages: "https://jarmilla.github.io/adamas-app/",
    github: "https://github.com/Jarmilla/adamas-app",
    image: adamisFront,
    background: {
      img: startrekBG,
      alt: "Photo by Dom Talbot on Unsplash",
      backgroundSize: "cover",
    },
  },
];
