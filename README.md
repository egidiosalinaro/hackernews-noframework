<a name="readme-top"></a>

  <h1 align="center">HackerNews</h1>

  <p align="center">
    An awesome Tech News Reader powered with <a href="https://github.com/HackerNews/API" target="_blank"><strong>Hacker News</strong></a> service.
    <br />
    <a href="https://hn-api-dotenv-vanilla-egidiosalinaro.netlify.app/" target="_blank">Try the app!</a>
  </p>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project-question">About The Project</a>
      <ul>
        <li><a href="#built-with-bricks">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started-clapper">Getting Started</a>
      <ul>
        <li><a href="#prerequisites-pencil">Prerequisites</a></li>
        <li><a href="#installation-gear">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage-joystick">Usage</a></li>
    <li><a href="#roadmap-world_map">Roadmap</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project :question:

<br>
<p align="center">
  <img width="800" alt="hackernews-by-egidiosalinaro" src="https://github.com/egidiosalinaro/hackernews/assets/129901135/e2dfcf14-f30e-4876-917d-aa930ee4f9b8">
<p>
<br>
The goal of the project is to deliver an application to democratize the sharing of information in the tech field, through the use of the <strong>Hacker News</strong> service.
  
At its startup the application displays the list of the latest news available by showing title, link, author and date of the story. It contacts APIs of the external Hacker News service to retrieve the list of latest news IDs. For each ID, the application recalls another API of the Hacker News service to obtain the information to be displayed such as title, link, author and date of the news.

Note: the first API useful to get the list of the latest news (newstories) returns about 500 elements. In order to avoid performance problems, after having retrieved the list of the latest news, the application will show only details of the first 10 news. Through a button `Load more` the application will allow the user to go and view information of the next 10 news.
  
The function used to call APIs is in the `index.js` file, in the `js` folder; the main button features and a function to show release time of each story referred to current nowtime are developed in the `services` folder.
  
A golden shadow, developed in `scrollShadow.js`, shows up to inform the user that there are new available stories above/below her/his viewport.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With :bricks:

JavaScript is basically all I used to bootstrap this project.
I bundled the app using Webpack. I used Axios for simpler API calls and Dotenv to recall hidden environment variables (as a studying purpose since HN API's are still public)

<p align="left"><a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> Html5 <br>
<a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/></a> Css3 <br>
<a href="https://sass-lang.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="sass" width="40" height="40"/> </a> Sass <br>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> JavaScript ES6 <br> <br> <br>
<a href="https://axios-http.com/" target="_blank" rel="noreferrer"> <img src="https://github.com/egidiosalinaro/hackernews-noframework/assets/129901135/e5e56a13-c9e2-48ac-a874-2a0c94dc832f" alt="axios" width="40" height="40"/> </a> Axios</p>
<a href="https://www.npmjs.com/package/dotenv" target="_blank" rel="noreferrer"> <img src="https://github.com/egidiosalinaro/hackernews-noframework/assets/129901135/8c11269d-5b85-4ac4-aeca-f72770507c1f" alt="axios" width="40" height="40"/> </a> Dotenv</p>
<a href="https://webpack.js.org" target="_blank" rel="noreferrer"> <img src="https://github.com/egidiosalinaro/hackernews-noframework/assets/129901135/651caf8c-af6c-4b6e-89d0-0af5538bfc5b" alt="webpack" width="40" height="40"/> </a> Webpack <br> 

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started :clapper:

This project was bootstrapped with [Webpack](https://webpack.js.org), [Axios](https://axios-http.com/) and [Dotenv](https://www.npmjs.com/package/dotenv). <br>
I published this code at the link [https://hackernews-api-react-egidiosalinaro.netlify.app/](https://hn-api-dotenv-vanilla-egidiosalinaro.netlify.app/) so you can use it, but if you want you can also install it in your device using Webpack:


### Prerequisites :pencil:

You need to have Node and npm installed. You can check the version you have installed by running:

  ```sh
  npm -v
  ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Installation :gear:

Once downloaded this repo, in the project directory, you can run:

```sh
npm init -y
```

Then you will need to
* install webpack

```sh
npm i -D webpack webpack-cli
```
* initialize the project
```sh
npx webpack init
```

While answering initialization questions, make sure you select the SASS option for style compiling, since this is how I styled this app.

To use all the code's functionalities you will need to install also Axios (for API calls) and Dotenv (to recall environment variables from a `.env` file) libraries.
Use these commands in terminal:
```sh
npm install axios
```
```sh
npm install dotenv --save
```



At this stage you can run

```sh
npm run build
```

to build the app for production in the `dist` folder, and 
```sh
npm run serve
```
to see the app in action in your local machine.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage :joystick:

At its startup the application displays a list of the latest 10 tech news available by showing title, link, author and release date of each story. The user can read them by clicking on the title or on the relative open-in-a-new-tab button. User can decide to load ten more stories with the bottom `LOAD MORE` button, or to refresh the page using the `NEW STORIES` button.
Golden shadows shows up from the header and the footer to inform the user that there are new available stories above/below her/his viewport.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap :world_map:

- [x] call `newstories` API
- [x] call APIs for each stories' details
- [x] create `.env` file and insert it in the `.gitignore` list
- [x] time functions
- [x] `Load More` button to call 10 new stories
- [x] styles improvements
    - [x] shadows to inform about new available stories
    - [x] colors and buttons images


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

egidiosalinaro@gmail.com

<p align="right">(<a href="#readme-top">back to top</a>)</p>
