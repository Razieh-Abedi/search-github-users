import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { GithubProvider } from "./context/context";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-la13v2wb5mjftwmn.us.auth0.com"
      clientId="WJyFBBOxiYoRE1dwuF6DbBa99U90gDzC"
      redirectUri={window.location.origin}
      casheLocation="localstorage"
    >
      <GithubProvider>
        <App />
      </GithubProvider>
    </Auth0Provider>
  </React.StrictMode>
);
