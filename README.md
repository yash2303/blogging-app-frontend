# React-Redux Blogging App

This is a simple blogging application built using React and Redux. The app allows logged-in users to view a list of blogs, view individual blog posts, and create new blog posts.

## Getting Started

To get started, clone the repository and run `npm install` to install the necessary dependencies. Then, run `npm start` to start the development server. The app should be running at `http://localhost:3000`.

## Features

- Register user
- Login user
- View a list of blogs
- View individual blog posts
- Create new blog posts
- Delete blog posts

## Technologies Used

- React
- Redux
- React Router

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.

## File Structure

The file structure for the app is as follows:

- src
    - actions
    - components
    - reducers
    - App.js
    - index.js

### `src/actions`
This directory contains all the action creators used in the app.

### `src/components`
This directory contains all the React components used in the app.

### `src/store`
This directory contains all the reducers used in the app. The `store.js` file exports all the reducers.

### `src/App.js`
This file contains the root component of the app and it is responsible for rendering all the other components.

### `src/index.js`
This file is the entry point of the app and it is responsible for rendering the root component in the `root` element of the `index.html` file.

## Deployment

The app can be deployed to any static hosting service or a server.
