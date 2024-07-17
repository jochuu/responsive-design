import '../css/cssreset.css';
import '../css/style.css';
import 'lazysizes';

const index = function internalIndex() {
  // setup elements
  const title = document.createElement('h1');
  const subTitle = document.createElement('h2');
  const subSubTitle = document.createElement('h3');

  // add text to elements
  title.innerHTML = 'h1';
  subTitle.innerHTML = 'h2';
  subSubTitle.innerHTML = 'h3';

  // create div and append all elements to the div
  const div = document.createElement('div');
  div.appendChild(title);
  div.appendChild(subTitle);
  div.appendChild(subSubTitle);

  return div;
};

// append div to document
document.getElementById('container').appendChild(index());
