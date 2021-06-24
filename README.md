# Escape Room
Rachel Kroetch, Nicholas Werner, Pirooz Wallace, Paolo Rafael

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](#license)


## Deployed Site

https://react-escape-room.herokuapp.com/

## Table of Contents
* [Description](#description)
* [Deployed Site](#deployed-site)
* [Screenshots](#screenshots)
* [Installation](#installation)
* [Tech](#tech)
* [License](#license)
* [Questions](#Questions)
* [Credits](#Credits)
* [License](#license)


## Description
A virtual escape room where users will have to piece together clues and riddles in order to find a key and escape before the killer gets home.  Made using the MERN Stack. 2D game played by clicking / dragging on images to find clues and figure out puzzles and riddles. App has user authentication and stores save file with progress in Mongo database.

## Credits

[Rachel Kroetch](https://github.com/rekroetch)
Contributions: App idea and general plan/user flow, all things back-end (database, models, API routes, server connection, user authentication, password encryption), React front-end (app navigation: BrowserRouter routes including protected routes, axios to connect the front and back, state management of users and puzzles), the safe puzzle (styling, concept, and execution), the leader board (styling, functional concept, and execution), logic and final styling of the progress bar and the sign on the game info page, app logo, and general styling contributions throughout.

[Pirooz Wallace](https://github.com/attack-theoRy)
Contributions: Funtionality and styling of the bookshelf and painting puzzles.

[Nicholas Werner](https://github.com/ncwerner85)
Contributions: Styling of the office and the desk.

[Paolo Rafael](https://github.com/paolorafaelyap)
Contributions: Styling of the login page and the game info page backgrounds.  Game story author. 

## Screenshots

![Login Screen](screenshots/escapeLogin.png)

![Game Info Screen](screenshots/escapeGameInfo.png)

![Office](screenshots/escapeOffice.png)

![Painting](screenshots/escapePainting.png)

![Bookshelf](screenshots/escapeBookshelf.png)

![Safe](screenshots/escapeSafe.png)

![LeaderBoard](screenshots/escapeLeaderBoard.png)

## Installation

Heroku deployed site requires no installation. If you would like to install on your local machine then download source code and type in terminal :
` npm install ` to install dependencies and then start the app using ` npm start `.  

## Tech

* React
* Mongoose / Mongo DB
* Bcryptjs
* Bootstrap / React-Bootstrap
* Express
* JSON Web Token
* Passport
* React-drag-drop-container
* Sweet Alert 2
* Heroku

## Questions

Email:

paolorafaelyap@gmail.com

ncwerner@gmail.com

rkroetch8@gmail.com

PiroozWallace@outlook.com


## License 

Copyright <2021> <Rachel Kroetch, Nicholas Werner, Paolo Rafael, Pirooz Wallace>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.