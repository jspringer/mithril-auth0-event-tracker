const m = require("mithril");

import Auth0 from "auth0-js";
import AUTH0_DATA from "./auth0-variables";


/* Load env variables, left side is if they are stored locally on the server, 
   right side is if they are being pulled from the auth0-variables file. 
   If the former, remove the auth0-variables import. */

export default class Auth {
  auth0 = new Auth0.WebAuth({
    domain: process.env.AUTH0_DOMAIN || AUTH0_DATA.DOMAIN,
    clientID: process.env.AUTH0_CLIENT_ID || AUTH0_DATA.CLIENTID,
    redirectUri: process.env.AUTH0_CALLBACK_URL || AUTH0_DATA.CALLBACKURL,
    audience: process.env.AUTH0_AUDIENCE || AUTH0_DATA.AUDIENCE,
    responseType: "token id_token",
    scope: "openid profile email"
  });

  login() {
    this.auth0.authorize();
  }

  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        m.route.set("/conferences");
      } else if (err) {
        m.route.set("/auth");
        console.log(err);
      }
    });
  }

  setSession(authResult) {
    // Set the time that the Access Token will expire at
    let expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    );
    localStorage.setItem("access_token", authResult.accessToken);
    localStorage.setItem("id_token", authResult.idToken);
    localStorage.setItem("expires_at", expiresAt);
    // navigate to the home route
    m.route.set("/conferences");
  }

  logout() {
    // Clear Access Token and ID Token from local storage
    localStorage.removeItem("access_token");
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
    // navigate to the default route
    m.route.set("/auth");
  }

  isAuthenticated() {
    // Check whether the current time is past the
    // Access Token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem("expires_at"));
    return new Date().getTime() < expiresAt;
  }
}