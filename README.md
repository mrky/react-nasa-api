# React NASA APOD App

A simple React app that connects to NASA's APOD endpoint with the option to 
display today's picture/video or random picture/video. More information can be
displayed for the content media type that is displayed.

There is a loading screen while content is being loaded, and an error message
with a retry button when an error is encountered.

#### .env
Ensure you have a `.env` file in the root of the `backend` folder with a `NASA_API_KEY` environment variable that points a 
valid API token, in order to run the application