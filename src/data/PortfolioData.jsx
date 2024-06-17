// ALL PROJECTS READY FOR DISPLAY

import { ImageCollection } from "../assets";

export const projects = [
    {
      id: 1,
      title: "WALMART SALES DATASET",
      type: "sql",
      description:
        "Exploring Walmart sales data for top branches, products, trends, customer behavior, and optimizing sales strategies from Kaggle competition.",
      image: ImageCollection.images,
      githubRepo: "https://github.com/Eboeme/MYSQL_SQL_Project_1",
    },
    {
      id: 2,
      title: "ELECTRIC VEHICLES DATASET",
      type: "sql",
      description:
        "Exploring EV data for top models, efficiency trends, key metrics, and consumer preferences to optimize EV features.",
      image: ImageCollection.evcars,
      githubRepo: "https://github.com/Eboeme/MYSQL_SQL_Project_2",
    },
    {
      id: 3,
      title: "GOOGLE PLAY APPS DATASET",
      type: "sql",
      description:
        "Exploring Google Play Store data for insights into app popularity, user engagement, key metrics, trends, and user preferences.",
      image: ImageCollection.google,
      githubRepo: "https://github.com/Eboeme/SSMS_SQL_Project_1",
    },
    {
      id: 4,
      title: "ANIME DATASET",
      type: "sql",
      description:
        "This project explores an anime dataset to uncover trends in genres, studios, ratings, and viewer engagement. The dataset includes detailed information on anime titles and attributes.",
      image: ImageCollection.anime,
      githubRepo: "https://github.com/Eboeme/SSMS_SQL_Project_2",
    },
    {
      id: 5,
      title: "Project 3",
      type: "R",
      description:
        "#Issue from github repo",
      image: ImageCollection.R,
      githubRepo: "https://github.com/Eboeme/Rprogramming_project_1",
    },
    {
      id: 6,
      title: "SALES DASHBOARD",
      type: "excel",
      description:
        "The dataset includes U.S. sales orders with customer details, product categories, regions, and sales figures, providing insights for sales optimization and profitability enhancement.",
      image: ImageCollection.USsales,
      githubRepo: "https://github.com/Eboeme/MS_Excel_Project_1",
    },
    {
      id: 7,
      title: "SIMPLE DASHBOARD",
      type: "excel",
      description:
        "This dataset, my very first project created using specific Excel functions, records sales from 1922 to 1924, including date, store, salesperson, product, quantity, and price.",
      image: ImageCollection.simple,
      githubRepo: "https://github.com/Eboeme/MS_Excel_Project_2",
    },
    {
      id: 8,
      title: "EUROPE SALE DASHBOARD",
      type: "excel",
      description:
        "The dataset includes European sales records, covering countries, item types, sales channels, orders, shipping, and financial metrics.",
      image: ImageCollection.EuropeSales,
      githubRepo: "https://github.com/Eboeme/MS_Excel_Project_3",
    },
    {
      id: 9,
      title: "SALES DASHBOARD",
      type: "excel",
      description:
        "The dataset includes sales records with customer details, product categories, and sales figures, offering insights into customer behavior, product performance, and sales optimization opportunities.",
      image: ImageCollection.Salesdash,
      githubRepo: "https://github.com/Eboeme/MS_Excel_Project_4",
    },
    {
      id: 10,
      title: "SURVEY BREAKDOWN",
      type: "power bi",
      description:
        "I performed an in-depth analysis on a diverse dataset encompassing roles, salaries, satisfaction, challenges, preferences, and industry insights.",
      image: ImageCollection.powerBi1,
      githubRepo: "https://github.com/Eboeme/MS_Powerbi_Project_1",
    },
    {
      id: 11,
      title: "Adventure works dashboard",
      type: "power bi",
      description:
        "Developed a dashboard presenting analyzed insights from adventure work dataset based on sales of different vehicles and the location in which the sales was been made",
      image: ImageCollection.powerBi2,
      githubRepo: "https://github.com/Eboeme/MS_Powerbi_Project_2",
    },
    {
      id: 12,
      title: "chocolate sales dashboard",
      type: "power bi",
      description:
        "Developed a dashboard presenting analyzed insights from chocolate sales and uncovered key insights into the company's performance dynamics, including employee contributions, product popularity, and sales trends over a specified period.",
      image: ImageCollection.chocolate,
      githubRepo: "https://github.com/Eboeme/MS_Powerbi_Project_3",
    },
    {
      id: 13,
      title: "Amazon Prime dashboard",
      type: "power bi",
      description:
        "Developed a dashboard presenting analyzed insights from Amazon prime video usage dataset which was based on user and usage details",
      image: ImageCollection.amazon,
      githubRepo: "https://github.com/Eboeme/MS_Powerbi_Project_4",
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