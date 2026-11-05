
import '../style/style.css';


/* =================================
   ELEMENTS
================================= */

const subtitle = document.querySelector('#heroSubtitle');
const languageSwitch = document.querySelector('#languageSwitch');
const photo = document.querySelector('#heroPhoto');
const navigation = document.querySelector('.navigation');
const heroInfo = document.querySelector('.hero__info');
const heroTitle = document.querySelector('.hero__title');

const aboutLink = document.querySelector('[data-nav="about"]');
const projectsLink = document.querySelector('[data-nav="projects"]');


/* =================================
   TRANSLATIONS
================================= */

const translations = {

  en: {

    button: 'ВЕРСИЯ НА РУССКОМ',
    buttonLabel: 'Switch to Russian',
    photoAlt: 'Portrait of an SMM producer',
    navigationLabel: 'Main navigation',

    heroTitle: 'SMM PRODUCTION',

    links: {
      about: 'ABOUT ME',
      projects: 'PROJECTS',
    },

    phrases: [
      '7+ YEARS OF EXPERIENCE',
      '3 YEARS IN A LEADERSHIP ROLE',
      'DRIVING CONTENT GROWTH THROUGH MARKETING',
      'BRIDGING THE GAP BETWEEN BUSINESS AND USERS',
    ],


    /* ABOUT */

    eyebrow: 'ABOUT ME',

    title: 'Strategy. People. Production.',

    lead: '7 years in content marketing. 3 years in a leadership position.',

    stat1: 'YEARS IN CONTENT MARKETING',

    stat2: 'YEARS IN A LEADERSHIP ROLE',

    stat3: 'COMBINED SOCIAL MEDIA AUDIENCE',

    profileLabel: 'PROFILE',

    description1:
      'Building content strategies from scratch for projects with different budgets and business objectives.',

    description2:
      'Driving content growth through marketing, building communication between business and users.',

    description3:
      'Managing production processes and teams. Experience managing accounts with a combined audience of more than 400,000 followers.',

    educationLabel: 'EDUCATION',

    educationTitle: 'Journalism',

    education: 'Higher education in journalism.',

    additionalTitle: 'Additional education',

    additional:
      'Videography, video editing and content marketing.',


    /* PROJECTS */

    projectsEyebrow: 'SELECTED WORK',

    projectsTitle: 'Projects',

    projectsLead: 'Selected projects and collaborations.',

    projectModum:
      'Content strategy for a VR/AR product. An accredited IT company and Skolkovo resident.',

    projectAleshaTitle:
      'Alesha Charitable Foundation',

    projectAlesha:
      'One of the largest charitable foundations in Russia.',

    projectAleshaNote:
      '*By the number of donations among charitable foundations. Source: Rusfond.Navigator, 2024.',

    projectIdea:
      'Designer furniture with in-house production in Saint Petersburg.',

    projectSerotoninTitle:
      'Serotonin Medical Center',

    projectProscheTitle:
      'Prosche Platform',

    projectSystemsTitle:
      'Medical Systems and Technologies',


    /* CONTACTS */

    contactsEyebrow: 'CONTACTS',

    contactsTitle: "Let's work together.",

  },


  ru: {

    button: 'SWITCH TO ENGLISH',
    buttonLabel: 'Переключить на английский',
    photoAlt: 'Портрет SMM-продюсера',
    navigationLabel: 'Основная навигация',

    heroTitle: 'Продакшн для соцсетей',

    links: {
      about: 'ОБО МНЕ',
      projects: 'ПРОЕКТЫ',
    },

    phrases: [
      'БОЛЕЕ 7 ЛЕТ ОПЫТА',
      '3 ГОДА НА РУКОВОДЯЩЕЙ ДОЛЖНОСТИ',
      'РОСТ КОНТЕНТА ЧЕРЕЗ МАРКЕТИНГ',
      'СВЯЗЬ МЕЖДУ БИЗНЕСОМ И ПОЛЬЗОВАТЕЛЯМИ',
    ],


    /* ABOUT */

    eyebrow: 'ОБО МНЕ',

    title: 'Стратегия. Люди. Продакшн.',

    lead: '7 лет в контент-маркетинге. 3 года на руководящей должности.',

    stat1: 'ЛЕТ В КОНТЕНТ-МАРКЕТИНГЕ',

    stat2: 'ГОДА НА РУКОВОДЯЩЕЙ ДОЛЖНОСТИ',

    stat3: 'СОВОКУПНАЯ АУДИТОРИЯ АККАУНТОВ',

    profileLabel: 'ПРОФИЛЬ',

    description1:
      'Разработка контент-стратегий с нуля для проектов с разными бюджетами и бизнес-задачами.',

    description2:
      'Рост контента через маркетинг, выстраивание коммуникации между бизнесом и пользователями.',

    description3:
      'Управление продакшн-процессами и командами. Опыт ведения аккаунтов с совокупной аудиторией более 400 000 подписчиков.',

    educationLabel: 'ОБРАЗОВАНИЕ',

    educationTitle: 'Журналистика',

    education: 'Высшее образование по направлению «Журналистика».',

    additionalTitle: 'Дополнительное образование',

    additional:
      'Видеосъёмка, видеомонтаж и контент-маркетинг.',


    /* PROJECTS */

    projectsEyebrow: 'ИЗБРАННЫЕ ПРОЕКТЫ',

    projectsTitle: 'Проекты',

    projectsLead: 'Избранные проекты и сотрудничества.',

    projectModum:
      'Контент-стратегия для VR/AR продукта. Аккредитованная IT-компания, резидент «Сколково».',

    projectAleshaTitle:
      'Благотворительный фонд «Алёша»',

    projectAlesha:
      'Крупнейший* благотворительный фонд России.',

    projectAleshaNote:
      '*По количеству пожертвований среди благотворительных фондов. Данные «Русфонд.Навигатор». 2024.',

    projectIdea:
      'Дизайнерская мебель с собственным производством в Санкт-Петербурге.',

    projectSerotoninTitle:
      'Медицинский центр «Серотонин»',

    projectProscheTitle:
      'Платформа Проще',

    projectSystemsTitle:
      'Медицинские системы и технологии',


    /* CONTACTS */

    contactsEyebrow: 'КОНТАКТЫ',

    contactsTitle: 'Открыт к сотрудничеству.',

  },

};


/* =================================
   CURRENT STATE
================================= */

let currentLanguage = 'en';
let currentPhrase = 0;
let isChangingLanguage = false;

let phraseInterval;
let phraseTimeout;

const FADE_DURATION = 700;
const PHRASE_INTERVAL = 4000;


/* =================================
   UPDATE PAGE LANGUAGE
================================= */

function updateLanguage() {

  const language = translations[currentLanguage];

  // Document language
  document.documentElement.lang = currentLanguage;


  // Language switch button
  languageSwitch.textContent = language.button;

  languageSwitch.setAttribute(
    'aria-label',
    language.buttonLabel
  );


  // Hero
  photo.alt = language.photoAlt;

  heroTitle.textContent = language.heroTitle;

  navigation.setAttribute(
    'aria-label',
    language.navigationLabel
  );


  // Navigation links
  aboutLink.textContent = language.links.about;
  projectsLink.textContent = language.links.projects;

  aboutLink.href = '#about';
  projectsLink.href = '#projects';


  // All translated elements
  const translatedElements = document.querySelectorAll('[data-i18n]');

  translatedElements.forEach((element) => {

    const translationKey = element.dataset.i18n;

    if (language[translationKey] !== undefined) {
      element.textContent = language[translationKey];
    }

  });

}


/* =================================
   CHANGE HERO SUBTITLE
================================= */

function changePhrase() {

  if (isChangingLanguage) {
    return;
  }

  subtitle.classList.add('subtitle--hidden');

  phraseTimeout = setTimeout(() => {

    const phrases = translations[currentLanguage].phrases;

    currentPhrase =
      (currentPhrase + 1) % phrases.length;

    subtitle.textContent = phrases[currentPhrase];

    subtitle.classList.remove('subtitle--hidden');

  }, FADE_DURATION);

}


/* =================================
   START SUBTITLE ROTATION
================================= */

function startPhraseRotation() {

  clearInterval(phraseInterval);

  phraseInterval = setInterval(
    changePhrase,
    PHRASE_INTERVAL
  );

}


/* =================================
   SWITCH LANGUAGE
================================= */

languageSwitch.addEventListener('click', () => {

  if (isChangingLanguage) {
    return;
  }

  isChangingLanguage = true;

  clearTimeout(phraseTimeout);

  heroInfo.classList.add('language--changing');

  subtitle.classList.add('subtitle--hidden');


  // Switch current language
  currentLanguage =
    currentLanguage === 'en' ? 'ru' : 'en';

  currentPhrase = 0;


  setTimeout(() => {

    // Update all page text
    updateLanguage();

    // Reset hero subtitle
    subtitle.textContent =
      translations[currentLanguage].phrases[0];

    heroInfo.classList.remove('language--changing');


    setTimeout(() => {

      subtitle.classList.remove('subtitle--hidden');

      isChangingLanguage = false;

    }, 100);

  }, 350);

});


/* =================================
   INITIAL PAGE SETUP
================================= */

updateLanguage();

subtitle.textContent =
  translations[currentLanguage].phrases[0];

startPhraseRotation();
