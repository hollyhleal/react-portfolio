import betaTasters from "./images/devlore-screenshot.png";
import travelBuddy from "./images/travel-buddy-screenshot.png";
import denverRecs from "./images/denverrecsscreenshot.png";
import terminalIcon from "./images/terminalicon.jpg";
import workDay from "./images/work-day-scheduler-screenshot.png";

export const projects = [
  {
    image: betaTasters,
    title: "Beta Tasters",
    description:
      "This full-stack application allows restaurant managers to build and post a menu and allows for users to review the given menu. This way, restaurants can have their first step into 'Beta-Tasting' their menu prior to open!",
    deployed: "https://secure-mesa-62807.herokuapp.com/",
    repo: "https://github.com/hollyhleal/beta-tasters",
    id: 0,
  },
  {
    image: travelBuddy,
    title: "Travel Buddy",
    description:
      "This front-end application allows for a traveler to enter their destination and dates of travel, and receive brewery recommendations and event suggestions in the area for the time of their visit.",
    deployed: "https://hollyhleal.github.io/travel-buddy/",
    repo: "https://github.com/hollyhleal/travel-buddy",
    id: 1,
  },
  {
    image: denverRecs,
    title: "Denver Recs",
    description:
      "A front-end application displaying entertainment recommendations for the Denver, CO area.",
    deployed: "https://hollyhleal.github.io/denver-recs/",
    repo: "https://github.com/hollyhleal/denver-recs",
    id: 2,
  },
  {
    image: terminalIcon,
    title: "SVG Logo Generator",
    description:
      "Command-line application to develop a simple SVG logo based on user input.",
    deployed:
      "https://drive.google.com/file/d/1Q-18GasGf_ipmKLsaW1hNEEN7FZ1sN8B/view?usp=share_link",
    repo: "https://github.com/hollyhleal/SVG-logo-maker",
    id: 3,
  },
  {
    image: terminalIcon,
    title: "E-Commerce Back End",
    description:
      "Back end application for an e-commerce website using Express.js and MySQL.",
    deployed:
      "https://drive.google.com/file/d/1_x8vmGbNMsTQKvB5AcGNJQgRE6S_3M1O/view?usp=share_link",
    repo: "https://github.com/hollyhleal/ecommerce-backend",
    id: 4,
  },
  {
    image: workDay,
    title: "Work Day Scheduler",
    description:
      "Application that allows the user to add hourly tasks and displays colors coordinated with past, present and future times.",
    deployed: "https://hollyhleal.github.io/work-day-scheduler/",
    repo: "https://github.com/hollyhleal/work-day-scheduler",
    id: 5,
  },
];
