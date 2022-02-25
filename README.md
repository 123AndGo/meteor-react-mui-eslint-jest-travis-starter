# Hello X App [![Build Status][build-shield]][build-url]
## _A scalable and improved "Hello World" app_
[![MIT License][license-shield]][license-url] [![LinkedIn][linkedin-shield]][linkedin-url]

Hello X is a simple app that can be used to quickly kickstart a scalable "full stack" web and/or hybrid mobile app.

- Users type their name and the app greets them "Hello X", with X as each of their names
- If the users don't type anything, the app greets "Hello World"
- Users can see the "last greetings" history page, with real-time updates

**[See it in action]**


## Technology

Hello X uses the following technologies:

- ReactJS - For the front-end
- NodeJS - For the backend and for creating the front end builds
- MongoDB - For the database
- Meteor - As the full stack framework
- React Router - For client side routing
- Material UI - As the React's UI toolkit (styled and functionally-rich components)
- Git - For version control
- ESLint - For linting
- Jest - For front-end testing
- Travis CI - For Continuous Integration

The app also has the following characteristics:
- Lazy loading pages, for scalability
- Front-end data caching, with Meteor's "Minimongo" local database.
- A secure basic backend API that could be easily extended and converted to a REST API
- Instant UI response to API calls, using Meteor's "Optimistic UI" and "Minimongo"
- Real-time data updating, using Meteor's DDP protocol implementation
- Option to extend the app to hybrid mobile apps with a single command (see Meteor's mobile guide)
- A free one command deployment option to Meteor's Galaxy cloud platform (not recommended for production)
- Code linting using Airbnb's style guide

And of course Hello X itself is open source with a [public repository] on GitHub.

## Installation

You should have Meteor installed, clone this repo and run "meteor npm install".

Please check Meteor's website and documentation for more info.

## License

MIT

**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

[See it in action]: <https://hello-x.meteorapp.com>
[public repository]: <https://github.com/123AndGo/hello-x-sample-app>

[build-shield]: https://app.travis-ci.com/123AndGo/meteor-react-mui-eslint-jest-travis-starter.svg?branch=master
[build-url]: https://app.travis-ci.com/123AndGo/meteor-react-mui-eslint-jest-travis-starter
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/123AndGo/hello-x-sample-app/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/AndGo
