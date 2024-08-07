
# Our Luxury Cars | Single Page Application (SPA)

## Overview

The Vehicles Store is a Single Page Application (SPA) built with JavaScript, HTML, CSS, and several modern libraries. The application allows users to perform various actions including login, registration, managing vehicle items (create, edit, delete, search), and viewing details of both their own and other users' vehicles. Authentication is implemented using local storage to store user credentials securely.

## Technologies Used

- **JavaScript**
- **HTML/CSS**
- **lit-html** for templating
- **page.js** for routing
- **mocha** and **chai** for testing
- **playwright** for browser automation

## Getting Started

### To save you Time
Run the file called `run.bat`. For first time Users will install the node package then on the second run will start the server and open the Website. **Recommend it.**

Follow the steps below to set up and run the Vehicles Store application:

### 1. Install Dependencies

Navigate to the Terminal and run the following command:

```bash
npm i
```

### 2. Start the Server

Navigate to the `server` directory where the server-side code is located.

```bash
cd server
```

Start the server using Node.js:

```bash
node server.js
```

The server will now be running, and you can interact with the application.

### 3. To start the Website

You can either run a new Terminal with the command:

```bash
npm run start
```

Or you can use an extension of your choice.

## Features

- **User Authentication**
    - Register a new account
    - Log in and log out

- **Vehicle Management**
    - Create vehicles
    - Edit existing vehicles
    - Delete vehicles
    - View details of your own and other users' vehicles

## How to Use

1. **Register**: Create a new account to start using the application.
2. **Log In**: Access your account to manage vehicle items.
3. **Home Page / The logo**: Navigate to the dashboard to view an overview of your activities.
4. **Our Cars**: View, edit, and delete your own vehicle items.
5. **Search**: Explore vehicle items created by other users.
6. **Details**: Inspect details of other users' vehicles.

## Testing

If you have installed Mocha and Chai, you can run tests using the following command:

```bash
npm test
```

For Playwright browser automation, make sure to check the Playwright documentation for running end-to-end tests.

---

This documentation provides a clearer and more structured guide to setting up and using the Vehicles Store SPA application.
