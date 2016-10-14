# Starry Website

React implementation of the [Starry Website](http://starryweb.azurewebsites.net/).

## Installation and Running the App

The app has a server directory that has an Express API for serving up contacts data.

If you haven't already done so, [sign up for Auth0](https://auth0.com/signup) and retrieve your credentials from your [management area](https://manage.auth0.com).

Once you have your credentials, replace the values in `server/server.js` with your secret and client ID, an the values in the Lock instance in `src/compoennts/App.js` with your client ID and domain.

After that, install the dependencies and run the app.

```bash

cd server
npm install
node server.js

cd ..
npm install
npm start
```

## Author
Jason Wang

Forked from [Auth0](auth0.com)

## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more info.