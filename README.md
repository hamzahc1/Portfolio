# Customizable portfolio website using React.js

This project is my personal portfolio, adapted from the code here: https://github.com/react-portfolio/react-portfolio

Some technologies utilized here include:
* React
* Redux
* Node/Express
* Webpack
* Babel 
* SASS
* Bootstrap

## Development

In the project's directory, run the following commands:

```
$ npm install
$ npm run dev
```

This will start webpack-dev-server and enable hot reloading. Then  visit:

```
http://localhost:3000
```

## Production

Run `npm run build` and Webpack will bundle your scripts and output to `/dist/`. The app, however, will be looking for its dependecies in `/static/`. You can rename `/dist/` to `/static/` and open `index.html` to view your portfolio. [Click here](https://github.com/jchen85/jchen85.github.io) for an example of an easy deployment on Github Pages.
