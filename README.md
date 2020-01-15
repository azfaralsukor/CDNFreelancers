# User Management

A simple user management that can create, update, delete user. A client for viewing data from [server](https://github.com/azfaralsukor/RESTful-Mongo). Working [demo](https://azfaralsukor.github.com/CDNFreelancers)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development. See deployment for notes on how to deploy the project on a live system.

### File structure
In this repository, you will find
```
.
|____jsconfig.json
|____LICENSE
|____README.md
|____public
| |____favicon.ico
| |____index.html
| |____apple-icon.png
| |____manifest.json
|____.gitignore
|____package.json
|____gulpfile.js
|____test.txt
|____src
| |____index.js
| |____components
| | |____Footer
| | | |____Footer.jsx
| | |____User
| | | |____List.jsx
| | |____Header
| | | |____Header.jsx
| |____api
| | |____Base.jsx
| | |____User.js
| |____views
| | |____LandingPage
| | | |____LandingPage.jsx
| |____assets
| | |____scss
| | | |____core
| | | | |_____variables.scss
| | | | |____mixins
| | | | | |_____colored-shadows.scss
| | | | |_____misc.scss
| | | | |____variables
| | | | | |_____functions.scss
| | | | | |_____colors.scss
| | | | | |_____variables.scss
| | | | | |_____shadow.scss
| | | | | |_____bootstrap-material-design.scss
| | | | | |_____bootstrap-material-design-base.scss
| | | | | |_____colors-map.scss
| | | | | |_____brand.scss
| | | | |_____mixins.scss
| | | |____plugins
| | | | |_____plugin-react-datetime.scss
| | | | |_____plugin-react-slick.scss
| | | | |_____plugin-nouislider.scss
| | | |____material-kit-react.scss
| | |____jss
| | | |____material-kit-react
| | | | |____components
| | | | | |____footerStyle.js
| | | | | |____headerStyle.js
| | | | |____views
| | | | | |____landingPage.js
| | | | |____imagesStyles.js
| | | |____material-kit-react.js
```
### Prerequisites

You should have these installed on your machine before getting started.
* [git](https://git-scm.com/)
* [NodeJS](https://nodejs.org/en/)
* [Visual Studio Code](https://code.visualstudio.com/)_(optional)_

### Clone / Download

You may download ZIP file and extract the files, clone with [GitHub Desktop](https://desktop.github.com/), or

```
cd /your-desired-path
git clone https://github.com/azfaralsukor/CDNFreelancers.git
```

### Installing

Run
```
cd CDNFreelancers
npm install
npm start
```

There you have it a simple user management web app on your machine browser.

## Deployment

To deploy, run
```
npm run deploy
```

## Built With

* [NodeJS](https://nodejs.org/en/)
* [ReactJS](https://reactjs.org/) - The framework

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

Go to [Material-UI](https://material-ui.com/) for the awesome React components.
