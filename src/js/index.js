import axios from 'axios';

import createRefreshButton from './components/refreshButton';
import createLoadMoreButton from './components/loadMoreButton';
import createListItem from './components/createItems';
import loadMoreButton from './services/loadMoreFunction';
import scrollShadow from './services/scrollShadow';

const _ = require('lodash');

import '../style/main.scss';

createRefreshButton();
createLoadMoreButton();
loadMoreButton();

const baseUrl = process.env.BASE_URL;
const newStoriesUrl = `${baseUrl}newstories.json`;
const storyUrl = `${baseUrl}item/`;

axios
  .get(newStoriesUrl)
  .then(arrayy500 => {
    let storiesIds = _.get(arrayy500, 'data', '');
    extractFromArray(storiesIds);
  })
  .catch(function (error) {
    console.log(error);
  });

function extractFromArray(storiesIds) {
  storiesIds.forEach(storyId => {
    axios.get(`${storyUrl}${storyId}.json`).then(storiesDetails => {
      let storiesData = _.get(storiesDetails, 'data', '');
      createListItem(storiesData);
    });
  });
}

window.onscroll = () => {
  scrollShadow();
};
