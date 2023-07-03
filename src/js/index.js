import axios from 'axios';

import createRefreshButton from './components/refreshButton';
import createLoadMoreButton from './components/loadMoreButton';
import createListItem from './services/createItems';
import loadMoreButton from './services/loadMoreFunction';
import scrollShadow from './services/scrollShadow';

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

window.onscroll = () => {
  scrollShadow();
};
