export default function scrollShadow() {
  if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
    document.querySelector('header').className = 'sticky';
  } else {
    document.querySelector('header').className = '';
  }

  if (
    Math.ceil(window.innerHeight + window.scrollY) <
    document.documentElement.scrollHeight
  ) {
    document.querySelector('footer').className = 'more';
  } else {
    document.querySelector('footer').className = '';
  }
}
