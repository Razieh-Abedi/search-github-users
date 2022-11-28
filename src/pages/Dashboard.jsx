import React from "react";
import loadingImg from "../images/preloader.gif";
import { Info, User, Search, Navbar, Repos } from "../components/index";

function Dashboard() {
  return (
    <main>
      {/* <Navbar /> */}
      {/* <Search /> */}
      <Info />
      <User />
      {/* <Repos /> */}
    </main>
  );
}

export default Dashboard;
