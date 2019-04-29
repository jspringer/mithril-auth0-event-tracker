# Mithril App and Authentication Sample

## Installation

1. Clone this project or download it to your system.

2. Make the project folder your current directory. 

3. Install the required Node packages by running `npm install` or `yarn`.

4. Once the installation is complete, start the project by running `npm start` or `yarn start`. This will open a new tab or window in your default browser and load the web application at `localhost:8080`. 

## Production Build

To build a production version of the project run: 

```bash
yarn build
```

or

```bash
npm run build
```

Webpack will create a `dist` folder with an optimized production bundle. 

## Authentication

To run the application successfully you need to have an active Auth0 account to provide the needed data to allow the application to talk to Auth0.

1. Go to [Auth0](https://auth0.com) and click Sign Up.
2. Use Google, GitHub, or Microsoft Account to log in.


### Create a Client

1. In the Auth0 Dashboard click on "New Client".
2. Give the client a name. 
3. Choose "Single Page Web Applications" as the client type.
4. Choose "React" as the web app technology since it has a similar architecture to Mithril.
5. In the guide, scroll down to "Create an Authentication Service" and notice the configuration values within the `Auth` class. 
6. Create a new file called `auth0-variables.js` under the `services` folder. 
7. Within `auth0-variables.js` create and export an object with properties that map to the Auth0 web configuration data:

```javascript
const AUTH0 = {
  CLIENTID: '<your client id>',
  DOMAIN: '<your domain>',
  CALLBACKURL: '<your callback URL>',
  AUDIENCE: '<your audience URL>'
};

export default AUTH0;
```

8. As an important step, add `auth0-variables.js` to the `.gitignore` file so that it's never committed to source control.
9. Back in the Auth0 Dashboard, click on `Settings` under the client's name and scroll down till you find "Allowed Callback URLs". 
10. Paste your desired callback URL here &mdash; it may be your localhost address where the project is being run locally &mdash; and save the settings.

