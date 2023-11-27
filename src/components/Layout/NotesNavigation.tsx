import { NavLink } from "react-router-dom";
import classes from "./NotesNavigation.module.css";

function NotesNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/notes"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              All Notes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/notes/new"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              New Note
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NotesNavigation;
