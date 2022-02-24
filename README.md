<div align="center" id="top"> 
  <img src="./.github/app.gif" alt="Zignaly" />

&#xa0;

</div>

<h1 align="center">Zignaly Frontend Challenge</h1>

<hr>

<p align="center">
  <a href="#dart-about">About</a> &#xa0; | &#xa0; 
  <a href="#sparkles-how-to-run">How to run</a> &#xa0; | &#xa0;
  <a href="#rocket-technologies">Technologies</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-starting">Approach</a> &#xa0; | &#xa0;
</p>

<br>

## :dart: About

Zignaly Frontend Challenge. It consisted on building a simple product catalog. In this case, the product are phones.

## :sparkles: How to Run

With docker-compose:

```bash
  # On the root of the project
  docker-compose up
```

With npm:

```bash
  # ./server/
  npm install
  npm run dev

  # ./client/
  npm install
  npm run start
```

First command should start a server running on port 4000. <br>
Second should start the client running on port 3000

## :rocket: Technologies

The following tools were used in this project:

- [Node.js](https://nodejs.org/en/)
- [React](https://pt-br.reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [ChakraUI](https://chakra-ui.com/)
- [Docker](https://www.docker.com/)

## :checkered_flag: Approach

How did I approach this project?

Well, first and foremost I started working on the server. I wanted to have everything setup on the backend before moving onto the frontend. I used Node.js and Express to create the server, handle the routes and make the controllers. As for the data, I decided to use a simple .json file. I pondered the possibility of using a database (a Postgres database), however, I decided this was overkill since, according to the requirements for the project, all that was needed was mock data. I'm more than happy to change the data management to using a database if that's better for you though.

On the frontend, I worked with React and ChakraUI as my CSS framework. I used Redux to handle the data fetched (and used axios to fetch said data) from the API and to store the selected Phone (the user selects a phone to display the rest of the data) or, in other words, to handle both my states. Design wise, the phones are arranged in a grid and if the user clicks on any of the "cards", it opens a modal displaying the rest of the phone's information.

There's also test to verify whether the data is being fetched from the API and displayed properly.

Finally, as mentioned earlier, the app is also dockerized.
