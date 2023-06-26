import refreshImg from '../../img/refresh.png';

function refresh() {
  const refreshImage = new Image();
  refreshImage.src = refreshImg;
  return refreshImage;
}

export default function createRefreshButton() {
  document.querySelector('.refresh').prepend(refresh());
}
