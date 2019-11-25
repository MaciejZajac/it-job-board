import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const proffesionsArray = [
    {
      title: "front-end developer",
      type: "frontend"
    },
    {
      title: "back-end developer",
      type: "backend"
    },
    {
      title: "fullstack developer",
      type: "fullstack"
    },
    {
      title: "iOS developer",
      type: "ios"
    },
    {
      title: "android developer",
      type: "android"
    },
    {
      title: "AI/machine learning",
      type: "machine"
    },
    {
      title: "Data engineer",
      type: "data"
    },
    {
      title: "UI/UX design",
      type: "design"
    },
    {
      title: "tester",
      type: "test"
    },
    {
      title: "DevOps",
      type: "devops"
    },
    {
      title: "Security",
      type: "security"
    }
  ];
  return (
    <div className="home">
      <h4 className="home__header">I want to work as a...</h4>
      <div className="home__container">
        {proffesionsArray.map((jobObject, index) => {
          return (
            <Link
              key={index}
              to={`/search?type=${jobObject.type}`}
              className="home__box"
            >
              {jobObject.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
