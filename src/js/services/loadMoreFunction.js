export default function loadMoreButton() {
  const loadMore = document.querySelector('#button');
  let currentItems = 10;

  loadMore.addEventListener('click', e => {
    const elementList = [...document.querySelectorAll('section')];
    e.target.classList.add('show-loader');

    for (let i = currentItems; i < currentItems + 10; i++) {
      setTimeout(function () {
        e.target.classList.remove('show-loader');
        if (elementList[i]) {
          elementList[i].style.display = 'flex';
        }
      }, 1000);
    }
    currentItems += 10;

    // hide load button after fully load
    if (currentItems >= elementList.length) {
      event.target.classList.add('loaded');
    }
  });
}
