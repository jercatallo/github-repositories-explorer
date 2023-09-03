# React + TypeScript + Vite
This app is created with React, TypeScript and Vite

## Steps to run the application
1. Clone the repository
2. Go to the repository via Bash or Command line
3. Create .env file inside the repository
4. Add the environments listed below of this README.md to the .env file
3. To install needed dependencies. Type "yarn" press "enter"
4. To run the application. Type "yarn dev" press "enter"
5. The application will run on http://localhost:5173/ and you can open it on a browser.

## Environments

##### VITE_REACT_GITHUB_API_URL=https://api.github.com
- This is configurable GitHub API URL.
##### VITE_REACT_GITHUB_API_USER_PER_PAGE_LIMIT=5
- Also created configurable page per limit option for fetching the users in GitHub API.
##### VITE_REACT_DEFAULT_LANGUAGE=en
- I setup the translation of the app, now this app supports multiple language, we will just add translation on translations file. I mainly did this integration to store of all of the text in one place.
##### VITE_REACT_GITHUB_API_TOKEN=
- Token for GitHub API, this is optional.