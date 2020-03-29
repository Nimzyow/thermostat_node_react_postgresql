# **Thermostat with Node, Express and React**

This was a passion project inspired by a Makers Academy Thermostat challenge done with Jquery, Javascript, HTML and Sinatra.

I decided to challenge myself by completing this challenge with Node.js and Express.js for the backend and React for the front end. React components use hooks and functional components to keep code as clean as possible. Testing was done with jest and enzyme.

# To install dependencies

on root of project run:

```
$ npm install
```

cd one directory into thermostat and again run:

```
$ npm install
```

## Creating the database

Right, so you will need to setup up the database before running this app, but there is a pre-requisite. You will need to make sure you have sqlite installed in your system. If you don't, please visit https://www.sqlite.org/download.html and download the right version for your system.

When installed, create a directory anywhere you want to store your database.

When installation is done, cd into the folder which you intend to have your database in. Once there, run:

```
$ sqlite3 thermostat
```

sqlite will be running. Create the following table:

```
CREATE TABLE thermo(temperature, city);
```

if successful, you should be able to run the following and see the structure of your thermo table:

```
$ .schema thermo
```

Once successful, you will need to open db.js, conveniently located in the root of this project, and change the storage location:

```
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "PATH_FROM_ROOT_OF_YOUR_COMPUTER_TO_DATABASE_LOCATION"
});
```

And that's it for setting up the database! Phew!!

# To run tests

cd into thermostat and run:

```
$ npm test
```

# Running the project

You will need to start the server. So in the root of the project run:

```
$ node index.js
```

cd into thermostat and run:

```
$ npm start
```

Enjoy :)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
