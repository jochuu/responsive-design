import '../css/cssreset.css';
import '../css/style.css';
import ProfilePicture from '../img/profile.jpg';
import AdminPage from '../img/admin-page.png';
import Restaurant from '../img/restaurant.png';
import SignupForm from '../img/signup-form.jpg';
import TicTacToe from '../img/tic-tac-toe.png';
import GoogleHomepage from '../img/google-homepage.png';
import RockPaperScissors from '../img/rock-paper-scissors.png';
import EtchASketch from '../img/etch-a-sketch.png';
import Calculator from '../img/calculator.png';
import 'lazysizes';

// creates an element with the specified tag name, classes, and content.
function createElement(tag, classes = [], content = '') {
  const element = document.createElement(tag);
  if (classes.length > 0) {
    element.classList.add(...classes);
  }
  if (content) {
    element.innerHTML = content;
  }
  return element;
}

// create an image element with the specified source and classes
function createImage(src, classes = [], alt = '') {
  const img = document.createElement('img');
  img.src = src;
  img.alt = alt;
  if (classes.length > 0) {
    img.classList.add(...classes);
  }
  return img;
}

// handles profile picture loading and appending to the profile section.
const profile = () => {
  const profilePicElement = createImage(
    ProfilePicture,
    ['profile-picture', 'lazyload'],
    'Profile picture'
  );
  document.querySelector('.profile-info').appendChild(profilePicElement);
};

// handles project thumbnail loads and appending to the project section.
const project = () => {
  function createProjectItem(
    name,
    liveDemoURL,
    githubURL,
    details,
    imageSrc,
    imageAlt
  ) {
    const projectItem = createElement('div', ['project-item']);
    const projectHeader = createElement('div', ['project-header']);
    const projectTitle = createElement('div', ['project-title']);
    const projectTitleHeading = createElement('h3', [], name);
    projectTitle.appendChild(projectTitleHeading);

    const projectLinks = createElement('div', ['project-links']);
    const globeButton = createElement('button', ['fa-solid', 'fa-globe']);
    globeButton.setAttribute(
      'onclick',
      `window.open('${liveDemoURL}', '_blank');`
    );
    const githubButton = createElement('button', ['fa-brands', 'fa-github']);
    githubButton.setAttribute(
      'onclick',
      `window.open('${githubURL}', '_blank');`
    );

    projectLinks.appendChild(globeButton);
    projectLinks.appendChild(githubButton);

    projectHeader.appendChild(projectTitle);
    projectHeader.appendChild(projectLinks);

    const projectThumbnail = createElement('div', ['project-thumbnail']);
    const thumbnailImage = createImage(imageSrc, ['lazyload'], imageAlt);
    projectThumbnail.appendChild(thumbnailImage);

    // Create and append the overlay element to the body
    const overlay = document.querySelector('.overlay');
    document.body.appendChild(overlay);
    // Add event listeners for hover effect
    projectThumbnail.addEventListener('click', () => {
      overlay.appendChild(thumbnailImage);
      overlay.style.display = 'flex'; // Show the overlay
    });

    overlay.addEventListener('click', () => {
      overlay.style.display = 'none'; // Hide the overlay
      projectThumbnail.appendChild(thumbnailImage);
    });

    const projectDetails = createElement('div', ['project-details'], details);

    projectItem.appendChild(projectHeader);
    projectItem.appendChild(projectThumbnail);
    projectItem.appendChild(projectDetails);

    return projectItem;
  }
  const project = document.querySelector('.project');

  // create project items

  //signup form
  const signupForm = createProjectItem(
    'Signup Form',
    'https://jochuu.github.io/sign-up-form/',
    'https://github.com/jochuu/sign-up-form/',
    'A page that was built for the purpose of exploring DOM manipulation and validation in forms with HTML, CSS and Javascript.',
    SignupForm,
    'Signup Form Thumbnail'
  );
  project.appendChild(signupForm);

  // admin page
  const adminPage = createProjectItem(
    'Admin Page',
    'https://jochuu.github.io/admin-panel/',
    'https://github.com/jochuu/admin-panel/',
    'A page that was built for the purpose of exploring CSS Grids for the first time.',
    AdminPage,
    'Admin Page Thumbnail'
  );
  project.appendChild(adminPage);

  // tic-tac-toe
  const ticTacToe = createProjectItem(
    'Tic-Tac-Toe',
    'https://jochuu.github.io/tic-tac-toe/',
    'https://github.com/jochuu/tic-tac-toe/',
    'A playable game of Tic-Tac-Toe with name validation, ability to change player names and scoring.',
    TicTacToe,
    'Tic-Tac-Toe Thumbnail'
  );
  project.appendChild(ticTacToe);

  // restaurant
  const restaurant = createProjectItem(
    'Restaurant',
    'https://jochuu.github.io/restaurant/',
    'https://github.com/jochuu/restaurant/',
    'A page that was built for the purpose of exploring webpack and building a single page website using only Javscript.',
    Restaurant,
    'Restaurant Thumbnail'
  );
  project.appendChild(restaurant);

  // etch-a-sketch
  const etchASketch = createProjectItem(
    'Etch-a-Sketch',
    'https://jochuu.github.io/etch-a-sketch/',
    'https://github.com/jochuu/etch-a-sketch/',
    'An online version of etch-a-sketch (pixel painting) built with Javascript (built 3 years ago).',
    EtchASketch,
    'Etch-a-Sketch Thumbnail'
  );
  project.appendChild(etchASketch);

  // rock paper scissors
  const rockPaperScissors = createProjectItem(
    'Rock Paper Scissors',
    'https://jochuu.github.io/rock-paper-scissors/',
    'https://github.com/jochuu/rock-paper-scissors/',
    'A game of Rock, Paper, Scissors - first to five wins (built 3 years ago).',
    RockPaperScissors,
    'Rock Paper Scissors Thumbnail'
  );
  project.appendChild(rockPaperScissors);

  // calculator
  const calculator = createProjectItem(
    'Calculator',
    'https://jochuu.github.io/calculator/',
    'https://github.com/jochuu/calculator/',
    'A functional calculator built with Javascript (built 3 years ago).',
    Calculator,
    'Calculator Thumbnail'
  );
  project.appendChild(calculator);

  // google homepage
  const googleHomepage = createProjectItem(
    'Rock Paper Scissors',
    'https://jochuu.github.io/google-homepage/',
    'https://github.com/jochuu/google-homepage/',
    'A replica Google Homepage for the purpose of exploring web development for the first time (built 3 years ago).',
    GoogleHomepage,
    'Google Homepage Thumbnail'
  );
  project.appendChild(googleHomepage);
};

// execute main functions
profile();
project();
