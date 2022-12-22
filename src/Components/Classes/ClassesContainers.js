import React from "react";
import "./Classes.css";
import ClassContainer from "./ClassContainer.js";
import { Link } from "react-router-dom";

const ClassesContainers = () => {
  return (
    <>
      <h1 className="class-header">
        <Link to="/">الصفوف الثانوية</Link>
      </h1>
      <div className="classes-container">
        <ClassContainer title="الأول الثانوي" link="/firstSecondary" />
        <ClassContainer title="الثاني الثانوي" link="/secondSecondary" />
        <ClassContainer title="الثالث الثانوي" link="thirdSecondary" />
      </div>
    </>
  );
};

export default ClassesContainers;
