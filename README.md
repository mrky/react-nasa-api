# React NASA APOD App

A simple React app that connects to NASA's APOD endpoint to display today's picture/video or a random picture/video.

Today's picture is loaded when the page loads, and when the calendar 📅 button is clicked.

A random picture will be displayed if you click the shuffle 🔀 button

You can view more information can be
about the content that is displayed by clicking the ℹ button.

There is a loading screen while content is being loaded, and an error message
with a retry button when an error is encountered.

## Getting started
Run `npm install` in both the `frontend` and `backend` folders

### Debug
#### Frontend
Run `npm run start`
#### Backend
Run `npm run dev`

### Deploying
#### Frontend
Run `npm run build`
#### Backend
Run `node index.js`

#### .env
Ensure you have a `.env` file in the root of the `backend` folder with a `NASA_API_KEY` environment variable that points to a valid API token, in order to run the application.

You will also need a `.env` file in the root of the `frontend` with a `REACT_APP_BACKEND_URL` environment variable that points to where the backend code is running. 

### Give it a try
Both the backend and frontend have been deployed using Vercel.
Click [here](https://react-nasa-api-frontend.vercel.app/) to view the project in action