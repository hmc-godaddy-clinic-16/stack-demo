[Node]: https://nodejs.org/en/
[npm]: https://www.npmjs.com/
[Webpack]: https://webpack.github.io/
[Babel]: https://babeljs.io/
[React]: https://facebook.github.io/react/
[Express]: https://expressjs.com/
[Mocha]: https://mochajs.org/
[Commits]: https://github.com/hmc-godaddy-clinic-16/stack-demo/commits/master

# Stack demo

This repo contains code for the demo that Dan gave during our
September 23, 2016 site visit.

## How to get and run this code

### Getting the code
You can download or clone this repository.

### Setting up your environment
After you've got the code, go to the top-level directory (the directory
that contains the `package.json` file) and run:
```
npm install
```
_(wait for all the packages to install)_

### Running the code
Run the command
```
npm start
```
and visit the following URL: [http://localhost:8080/webpack-dev-server/](http://localhost:8080/webpack-dev-server/)

Now, you should be able to edit and live-reload your code.

### Running unit tests
Run the tests
```
npm test
```
Generate a test code coverage report
```
npm run cover
```
the report will be published to `coverage/lcov-report/index.html`

## Resources
You can look at the [commit messages][Commits] to see the commands we used to install / set
up the the project. 

Here are the technologies we used:
   + [Node]
   + [npm]
   + [Webpack]
   + [Babel]
   + [React]

## Where to go from here (eventually?)
   + Add unit tests (e.g., with [Mocha])
   + [Express]
