import newWindowImg from '../../img/newwindow.png';

export default function newWindowFn() {
  const newWindowImage = new Image();
  newWindowImage.src = newWindowImg;
  return newWindowImage;
}
