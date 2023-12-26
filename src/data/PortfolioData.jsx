// ALL PROJECTS READY FOR DISPLAY

import { ImageCollection } from "../assets";

export const projects = [
    {
      id: 1,
      title: "Project 1",
      type: "sql",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Essex aperiam quae quasi asperiores quis!",
      image: ImageCollection.Sql,
      githubRepo: "https://github.com/username/repo1",
    },
    {
      id: 2,
      title: "Project 2",
      type: "sql",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Essex aperiam quae quasi asperiores quis!",
      image: ImageCollection.Sql,
      githubRepo: "https://github.com/username/repo1",
    },
    {
      id: 3,
      title: "Project 3",
      type: "R",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Essex aperiam quae quasi asperiores quis!",
      image: ImageCollection.R,
      githubRepo: "https://github.com/username/repo1",
    },
    {
      id: 4,
      title: "Project 4",
      type: "R",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Essex aperiam quae quasi asperiores quis!",
      image: ImageCollection.R,
      githubRepo: "https://github.com/username/repo1",
    },
    {
      id: 5,
      title: "Project 5",
      type: "excel",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Essex aperiam quae quasi asperiores quis!",
      image: ImageCollection.Excel,
      githubRepo: "https://github.com/username/repo1",
    },
    {
      id: 6,
      title: "Project 6",
      type: "excel",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Essex aperiam quae quasi asperiores quis!",
      image: ImageCollection.Excel,
      githubRepo: "https://github.com/username/repo1",
    },
    {
      id: 7,
      title: "SURVEY BREAKDOWN",
      type: "power bi",
      description:
        "I performed an in-depth analysis on a diverse dataset encompassing roles, salaries, satisfaction, challenges, preferences, and industry insights.",
      image: ImageCollection.powerBi2,
      githubRepo: "https://github.com/username/repo1",
    },
    {
      id: 8,
      title: "Project 8",
      type: "power bi",
      description:
        "Developed a dashboard presenting analyzed insights from electric car data, covering battery, efficiency, price, range, and performance.",
      image: ImageCollection.PowerBi,
      githubRepo: "https://github.com/username/repo1",
    },
  ];
  
  
  // TYPES OF PROJECTS COMPLETED
  
  export const projectTypes = ["sql", "R", "power bi", "excel"];
  
  
  // PORTFOLIO SECTION IN LANDING PAGE
  
  export const PPTS = [
    {
      src: ImageCollection.Sql,
      project: "SQL",
      detail:
        " Used SQL to Analyzing databases, extracting insights, and manipulating data for meaningful interpretations and decision-making.",
      link: "#",
    },
    {
      src: ImageCollection.R,
      project: "R Programming",
      detail:
        "I use R programming for statistical analysis, data visualization, machine learning, and efficient data manipulation in my analytical work.",
      link: "#",
    },
    {
      src: ImageCollection.PowerBi,
      project: "Power Bi",
      detail:
        "Created impactful visualizations, derive insights, and made informed decisions using PowerBI's intuitive tools for data analysis and presentation.",
      link: "#",
    },
    {
      src: ImageCollection.Excel,
      project: "Excel",
      detail:
        "Utilized Excel for organizing, cleaning, analyzing, visualizing, and presenting data effectively, aiding insightful decision-making processes.",
      link: "#",
    },
  ];