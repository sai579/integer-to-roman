# Integer To Roman Application

# Table of Contents
1. [Project Overview](#overview)
2. [Technologies Used](#technologies-used)
3. [Installation](#installation)
4. [Usage](#usage)
5. [API Endpoints](#api-endpoints)
6. [Folder Structure](#folder-structure)
7. [Testing](#testing)
8. [License](#license)
9. [References](#references)

# Overview
This is a full-stack application built with React for the frontend and Node.js (Express) for the backend. The application allows users to convert an integer its corresponding roman numeral value. This app provides a way to input a number and submit which will call backend api and retrieve the roman numeral and display the result on UI.

# Technologies Used
## Frontend

* React.js
* React Router
* Axios (for HTTP requests)
* SCSS

## Backend

* Node.js
* Express.js

## Testing
* React testing library
* Jest

## Development Tools

* Babel
* Nodemon

# Installation
## Prerequisites
Before running this project, you need to have the following software installed:

* Node.js (>=v20)
* npm
* Git

## Step 1: Clone the Repository
git clone https://github.com/sai579/integer-to-roman.git

cd integer-to-roman

## Step 2: Install Backend Dependencies
Navigate to the server folder and install the backend dependencies:

`cd server`

`npm install`

## Step 3: Install Frontend Dependencies
Navigate to the client folder and install the frontend dependencies:

`cd ../client`

`npm install`

#  Usage
##  Running the Development Server

Used `concurrerntly` npm package to run both client and server projects simultaneously instead of running them separately in two terminals.

## Install concurrently
Navigate to the root folder and install the npm package.

`cd ../`

`npm install concurrently`

After successful install of the package, you can run both client and server

`npm run dev`

This will start the React app on http://localhost:3000.

## Build

To build app for both frontend and backend:

## Frontend
```
cd client
npm run build
```

## Backend
```
cd ../server
npm run build
```

## Accessing the Application
Once both servers are running:

* Frontend will be available at http://localhost:3000.
* Backend will be available at http://localhost:3001.

## App Theme
Used `window.matchMedia` API to check the OS theme set by the user. An event listener listens to any change in the system theme and changes the same in UI accordingly.

# API Endpoints

GET `/romannumeral?query={integer}`
* Description: Convert integer to roman numeral.
* Response: converted roman numeral string
    * `example`: For query parameter `5`, response is `V`

#  Folder Structure
```
/integer-to-roman
|-- /client
|   |-- /src
|   |   |-- /components
|   |   |-- App.tsx
|   |-- package.json
|   |-- tsconfig.json
|
|-- /server
|   |-- /src
|   |   |-- /routes
|   |   |-- /services
|   |-- index.ts
|   |-- package.json
|
|-- .gitignore
|-- README.md
|-- package.json
```

# Testing

To run tests for both frontend and backend:

## Frontend
```
cd client
npm test
```

## Backend
```
cd server
npm test
```

# License
This project is licensed under the GPL-3.0 License – see the [LICENSE](https://github.com/sai579/integer-to-roman?tab=GPL-3.0-1-ov-file#readme) file for details.

# References
* [Wikipedia-Roman numerals](https://en.wikipedia.org/wiki/Roman_numerals)
* [Cuemath](https://www.cuemath.com/numbers/roman-numerals/)
