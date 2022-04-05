
# Project Title
A Minimalistic Ecommerce API
# Description

This is a simple e-commerce api that allows customer to make orders.
Users of the api need to be authenticate for access and allowed to view
only order items created by them.
**JWT** web token has been implemented to allow authentication

# Configuration Steps

1. Ensure you have **node and npm** packages installed

2. Clone the repository with **_ssh_** for security

3. Install the dependencies using **_npm install_**

# Environment variables

For local development, you need to _export_ the following env vars:

1. export NODE_ENV="a node environment the api is running"
2. export SECRET="secret key for the app"
3. export PASS="mongo db password"
4. export SECRETKEY="a secret key for signing jwt token"
5. export EXPIRES_IN="token expiration duration"
6. export PORT ="the port number on which the dev server will be running"

7. Run the app with **npm start** to spin up the local server

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
