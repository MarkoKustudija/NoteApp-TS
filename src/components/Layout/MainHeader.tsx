/* eslint-disable jsx-a11y/alt-text */

import  { PropsWithChildren } from "react";
import { Link, NavLink } from "react-router-dom";
// import Button from "../UI/Button";
import classes from "./MainHeader.module.css";

type HeaderProps = PropsWithChildren<{
  // image: {
  //   src: string;
  //   alt: string;
  // };
}>;

function MainHeader({ children }: HeaderProps) {
  return (
    <header className={classes.header}>
      <Link to="/" className={classes.logo}> NoteApp </Link>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              <h1>Home</h1>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/notes"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              <h1>Notes</h1>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
