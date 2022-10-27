import React from "react";
import HeaderCartBtn from "./HeaderCartBtn";
import mealsimg from "../../assets/meals.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Super meals</h1>
        <HeaderCartBtn onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsimg} alt="a table full of food" />
      </div>
    </>
  );
};

export default Header;
