import MainHeader from "../components/Layout/MainHeader";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
}

export default Root;
