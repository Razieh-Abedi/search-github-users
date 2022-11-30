import React from "react";
import loadingImg from "../images/preloader.gif";
import { Info, User, Search, Navbar, Repos } from "../components/index";
import { GithubContext } from "../context/context";

function Dashboard() {
  const { isLoading } = React.useContext(GithubContext);

  if (isLoading) {
    return (
      <main>
        <Navbar />
        <Search />
        <img src={loadingImg} alt="loading" className="loading-img" />
      </main>
    );
  }
  return (
    <main>
      <Navbar />
      <Search />
      <Info />
      <User />
      <Repos />
    </main>
  );
}

export default Dashboard;
