import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { Auth0Provider } from "@auth0/auth0-react";
import store from "./redux/store";

import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH_DOMAIN!}
      clientId={process.env.REACT_APP_AUTH_CLIENT_ID!}
      redirectUri={window.location.origin}
      audience="https://dev-v91vml4a.eu.auth0.com/api/v2/"
      scope="read:current_user update:current_user_metadata"
    >
      <App />
    </Auth0Provider>
  </Provider>
);
