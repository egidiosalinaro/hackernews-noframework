import axios from 'axios';

import createRefreshButton from './components/refreshButton';
import createLoadMoreButton from './components/loadMoreButton';
import newWindowFn from './components/newWindowButton';
import { mapTime } from './services/timeMapper';
import loadMoreButton from './services/loadMoreFunction';

import '../style/main.scss';

createRefreshButton();
createLoadMoreButton();
loadMoreButton();

const baseUrl = 'https://hacker-news.firebaseio.com/v0/';
const newStoriesUrl = `${baseUrl}newstories.json`;
const storyUrl = `${baseUrl}item/`;

axios
  .get(newStoriesUrl)
  .then(arrayy500 => {
    let storiesIds = arrayy500.data;
    extractFromArray(storiesIds);
  })
  .catch(function (error) {
    console.log(error);
  });

function extractFromArray(storiesIds) {
  storiesIds.forEach(storyId => {
    axios.get(`${storyUrl}${storyId}.json`).then(storiesDetails => {
      let storiesData = storiesDetails.data;
      createListItem(storiesData);
    });
  });
}

function createListItem(storiesData) {
  let storyContainer = document.createElement('section');
  let storyContent = document.createElement('div');
  let storyTitle = document.createElement('h1');
  let storyDetails = document.createElement('div');
  storyDetails.setAttribute('class', 'story-meta');
  let storyAuthor = document.createElement('span');
  storyAuthor.setAttribute('class', 'author');
  let storyTime = document.createElement('span');
  let openStory = document.createElement('div');
  let openStoryLink = document.createElement('a');
  openStoryLink.setAttribute('href', `${storiesData.url}`);
  openStoryLink.setAttribute('target', '_blank');

  document.querySelector('main').appendChild(storyContainer);
  storyContainer.appendChild(storyContent);
  storyContainer.appendChild(openStory);
  storyContent.appendChild(storyTitle);
  storyContent.appendChild(storyDetails);
  storyDetails.appendChild(storyAuthor);
  storyDetails.appendChild(storyTime);
  openStory.appendChild(openStoryLink);
  openStoryLink.appendChild(newWindowFn());

  storyTitle.innerHTML = storiesData.title;
  storyAuthor.innerHTML = storiesData.by;
  storyTime.innerHTML = mapTime(storiesData.time);
}
