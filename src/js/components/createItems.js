import newWindowFn from './newWindowButton';
import { mapTime } from '../services/timeMapper';

export default function createListItem(storiesData) {
  let storyContainer = document.createElement('section');
  let storyContent = document.createElement('div');
  let storyTitle = document.createElement('h1');
  let storyTitleLink = document.createElement('a');
  storyTitleLink.setAttribute('href', `${storiesData.url}`);
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
  storyTitle.appendChild(storyTitleLink);
  storyDetails.appendChild(storyAuthor);
  storyDetails.appendChild(storyTime);
  openStory.appendChild(openStoryLink);
  openStoryLink.appendChild(newWindowFn());

  storyTitleLink.innerHTML = storiesData.title;
  storyAuthor.innerHTML = storiesData.by;
  storyTime.innerHTML = mapTime(storiesData.time);
}
