## Install and Use

To run and edit the project, clone the project to your computer, `cd` into the project directory and follow the instructions below for your javascript package manager of choice.

After cloning you will need to create `.env` file with your own TRELLO API_KEY and TOKEN variables (see example below). Create trello account and follow official api documentation to gain more understanding how everything works https://developer.atlassian.com/cloud/trello/rest/api-group-actions/

After you login on your trello account visit this link to get API KEY and generate API TOKEN (https://trello.com/app-key)

```javascript
REACT_APP_TRELLO_KEY=<YOUR_TRELLO_KEY>
```

```javascript
REACT_APP_TRELLO_TOKEN=<YOUR_TRELLO_TOKEN>
```

### yarn

In the project directory run `yarn install` to install the dependencies, and `yarn start` to star the development server. It should open a browser tab to `localhost:3000`.

### npm

In the project directory run `npm install` to install the dependencies, and `npm start` to star the development server. It should open a browser tab to `localhost:3000`.
