import React, { ReactNode } from "react";
import classes from "./Card.module.css";

type CardProps = {
  children: ReactNode;
};
function Card({ children }: CardProps) {
  return <div className={classes.card}>{children}</div>;
}

export default Card;
