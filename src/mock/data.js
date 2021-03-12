import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Josh Glazer | Front-End Architect | Full Stack Developer | Really Smart Person', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio.  Check out some cool projects I have built.', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi! My name is',
  name: 'Josh Glazer',
  subtitle: "I'm a Full Stack Developer, and really enjoy working with Front-End code.",
  cta: 'Get To Know Me!',
};

// ABOUT DATA
export const aboutData = {
  img: 'joshglazer-headshot.png',
  paragraphOne:
    "Hi! I'm Josh, it's nice to meet you.  I am a software engineer from Baltimore, MD.",
  paragraphTwo:
    "I really like to code, and have been doing it for a very long time.  When I'm not writing code, you might find me playing piano, watching the Orioles or Ravens, or eating bagels.",
  paragraphThree: 'Check out some of my projects below.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'SpotYou.png',
    title: 'SpotYou',
    info:
      'SpotYou is a React/Gatsby web application that lets you connect Spotify and Youtube to watch your favorite music videos.',
    info2: '',
    url: 'https://spotyou.joshglazer.com/',
    repo: 'https://github.com/joshglazer/SpotYou',
  },
  {
    id: nanoid(),
    img: 'spower-hour.png',
    title: 'Spower Hour',
    info:
      'Spower Hour is an Angular 11 web application that lets you listen to the first minute of every song in a Spotify playlist.',
    info2: '',
    url: 'https://spowerhour.joshglazer.com/now-playing',
    repo: 'https://github.com/joshglazer/spower-hour',
  },
  {
    id: nanoid(),
    img: 'reading-hero.png',
    title: 'Reading Hero',
    info:
      'Reading Hero is a mobile application built using Angular and the Ionic framework.  It is currently available for download for free on for iOS on the App Store and for Android on the Google Play Store.',
    info2:
      'This app helps a child learn to read by showing them commonly used sight words and uses voice recognition to provide immediate feedback to let them know if they have read the word correctly.',
    url: 'https://www.readingheroapp.com',
    demoCta: 'More Info',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'joshglazer@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'github',
      url: 'https://www.github.com/joshglazer',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/joshglazer/',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/glazerade/',
    },
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://www.facebook.com/joshglazer82/',
    },
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/glazerade',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
