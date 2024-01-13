import imgGames1 from "./images/games_bucket.jpg";
import imgGames2 from "./images/games_chicken.jpg";
import imgGames3 from "./images/games_hands.jpg";
import imgML1 from "./images/ml_inv.jpg";
import imgML2 from "./images/ml_questions.jpg";
import imgML3 from "./images/ml_settings.jpg";

const projects = [
  {
    title: "Spoken Language Identification using ML",
    shortTitle: "spoken language ml",
    experience: "Python, TensorFlow, Flutter",
    desc: "As part of my final project of my undergrad, I worked with a team of 6 to complete a project working with the State Emergency Service (SES) in Tasmania. The aim of the project was to create a mobile application capable of identifying spoken language using machine learning, to aid non-English-speaking crash site victims. Because of the context, the application was also expected to work offline, requiring implementation of on-device machine learning inference. Additionally, the SES required the app to facilitate communication with casualties on site via audio questions in their spoken language.\nThis produced an incredibly unique project, one which is capable of performing language identification on recorded audio on device. The app is implemented using Flutter, with a model trained in TensorFlow. The model is then ran directly inside Flutter, with all audio transformations being completed inside the app. The project was invaluable for collaborative and development experience. \nDue to privacy concerns from the SES, the project is not open source, and so no repo can be provided.",
    links: [],
    images: [
      {
        image: imgML1,
        caption:
          "The app prompts casualties to speak their language into a tablet which will record the audio and identify the language spoken",
      },
      {
        image: imgML2,
        caption:
          "Once a language is identified, SES responders can use prerecorded audio questions to assess casualties",
      },
      {
        image: imgML3,
        caption: "Settings page for the application",
      },
    ],
  },
  {
    title: "Game Dev",
    shortTitle: "game dev",
    experience: "Unity (C#), Lua, Python",
    desc: "Throughout my studies and also through personal projects I have spent a fair amount of time doing game dev. Most of these are created using Unity, but I have also used other engines from other languages, such as Python and Lua. I will generally try and find game jams to participate in to try new ideas. \nGame development produces unique challenges and requires problem solving not generally found in other fields. The games are tons of fun to make, and most can be found through my itch-io page below.",
    links: ["https://jofbob.itch.io"],
    images: [
      {
        image: imgGames1,
        caption:
          "In Bucket Lad (made in Lua) you play as a bucket trying to collect as much rainwater as you can",
      },
      {
        image: imgGames2,
        caption:
          "Chicken Hutch is a chaotic chicken management game created for a UTAS game jam using Unity",
      },
      {
        image: imgGames3,
        caption:
          "Hands On/Hands Off is a wave-based arena shooter created as a Uni project in Unity",
      },
    ],
  },
  {
    title: "Advent of Code",
    shortTitle: "advent of code",
    experience: "Java, Javascript",
    desc: "The Advent of Code is an annual programming puzzle/problem solving event hosted at [adventofcode.com], comprised of 25 daily puzzles to emulate an advent calender. I started doing these in 2023, and have worked through previous years as exercises in learning more about algorithms and problem solving. \nCurrently I have completed 2023 in Java and am working on 2022 in Javascript. Links to my attempts can be found below through Github repos.",
    links: ["https://github.com/jofb/advent-of-code-23"],
    images: [],
  },
  {
    title: "Portfolio Website",
    shortTitle: "portfolio website",
    experience: "React, Tailwind",
    desc: "That's this site! It is intended to be a simple place for me to dump my projects and talk about my experience. It was created with ReactJS and Tailwind for the styling, hosted on GitHub Pages. Previous versions were created with vanilla web stack tech, but I suck at CSS, and Tailwind has been refreshing to work with. \nThe repo for the site can be found below.",
    links: ["https://github.com/jofb/portfolio"],
    images: [],
  },
];

export default projects;
