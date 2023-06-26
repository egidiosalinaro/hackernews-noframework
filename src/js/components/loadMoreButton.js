import loadMoreImg from '../../img/loadmore.png';

function loadMoreImgFn() {
  const loadMoreImage = new Image();
  loadMoreImage.src = loadMoreImg;
  return loadMoreImage;
}

export default function createLoadMoreButton() {
  document.querySelector('#button').prepend(loadMoreImgFn());

  let loadingSpan = document.createElement('span');
  loadingSpan.setAttribute('class', 'loading');
  let innerLoadingSpan = document.createElement('span');

  document.querySelector('#button').appendChild(loadingSpan);
  document.querySelector('.loading').appendChild(innerLoadingSpan);
}
