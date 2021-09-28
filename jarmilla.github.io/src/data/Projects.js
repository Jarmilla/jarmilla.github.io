import nasaPic from "../img/FireShot Capture 005 - Daily Nasa - jarmilla.github.io.png";
import ryuutama from "../img/FireShot Capture 002 - Ryuutama - jarmilla.github.io.png";
import adamis from "../img/ASDF Adamish SX7 - jarmilla.github.io.png";

import nasaBG from "../img/nasa-yZygONrUBe8-unsplash.jpg";
import forestBG from "../img/j-photos-yY1KhFBlisg-unsplash.jpg";
import startrekBG from "../img/dom-talbot-ZuFxrKGzAj4-unsplash.jpg";

export const projects = [
  {
    name: "Sci-Fi Scanner",
    description:
      "Your group is tasked to land and investigate on the nearby planet. Search for QR codes, find your way to the next location, complete the given tasks, just like in Star Trek.",
    used: "Built for a sci-fi themed searching game for groups. Got positive feedbacks from participants.",
    features: ["QR code scanner", "Weather forecast", "Optimized for mobile devices", "Data stored in easy to change JSON file"],
    ghPages: "https://jarmilla.github.io/adamas-app/",
    github: "https://github.com/Jarmilla/adamas-app",
    image: adamis,
    background: {
      img: startrekBG,
      createdBy: "Photo by Dom Talbot on Unsplash",
    },
  },
  {
    name: "Ryuutama RPG Character Sheet",
    description:
      "Online editable character sheet for Ryuutama. Ryuutama is a light hearted tabletop roleplaying game, where you can play with regular people whose are going on an adventure.",
    features: ["Create and edit your Ryuutama character", "Saving to localStorage", "Roll your checks for the game"],
    ghPages: "https://jarmilla.github.io/ryuutama-rpg/",
    github: "https://github.com/Jarmilla/ryuutama-rpg",
    image: ryuutama,
    background: {
      img: forestBG,
      createdBy: "Photo by J-Photos on Unsplash",
    },
  },
  {
    name: "Astronomy Pictures Of the Day",
    description: "Each day a different image or video of our universe is featured, along with a brief explanation written by a professional astronomer.",
    features: ["Fetched from an API (Nasa APOD)", "Preview pictures of the previous 6 day ", "Search options for previous dates."],
    ghPages: "https://jarmilla.github.io/nasa-open-API/",
    github: "https://github.com/Jarmilla/nasa-open-API",
    image: nasaPic,
    background: {
      img: nasaBG,
      createdBy: "Photo by NASA on Unsplash",
    },
  },
];
