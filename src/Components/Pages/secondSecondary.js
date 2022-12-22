import React from "react";
import { Link } from "react-router-dom";
import ClassContainer from "../Classes/ClassContainer.js";
import "../Classes/Classes.css";

const SecondSecondary = () => {
  return (
    <>
      <h1 className="class-header">
        <Link to="/">الصفوف الثانوية</Link> ←{" "}
        <Link to="/secondSecondary">الثاني الثانوي</Link>{" "}
      </h1>
      <div className="classes-container">
        <ClassContainer title="Okay test 2" />
        <ClassContainer />
        <ClassContainer />
        <ClassContainer />
        <ClassContainer />
        <ClassContainer />
        <ClassContainer />
        <ClassContainer />
      </div>
    </>
  );
};

export default SecondSecondary;
