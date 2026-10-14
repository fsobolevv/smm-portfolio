
import '../style/style.css';

const subtitle = document.querySelector('#heroSubtitle');
const languageSwitch = document.querySelector('#languageSwitch');
const photo = document.querySelector('#heroPhoto');
const navigation = document.querySelector('.navigation');
const heroInfo = document.querySelector('.hero__info');

const translations = {
  en: {
    button: 'ВЕРСИЯ НА РУССКОМ',
    buttonLabel: 'Switch to Russian',
    photoAlt: 'Portrait of an SMM producer',
    navigationLabel: 'Main navigation',

    links: {
      about: 'ABOUT ME',
      smm: 'SMM PRODUCTION',
      ai: 'AI-CONTENT',
      coding: 'CODING',
    },

    phrases: [
      '7+ YEARS OF EXPERIENCE',
      '2 YEARS IN A LEADERSHIP ROLE',
      'DRIVING CONTENT GROWTH THROUGH MARKETING',
      'BRIDGING THE GAP BETWEEN BUSINESS AND USERS',
    ],
  },

  ru: {
    button: 'SWITCH TO ENGLISH',
    buttonLabel: 'Переключить на английский',
    photoAlt: 'Портрет SMM-продюсера',
    navigationLabel: 'Основная навигация',

    links: {
      about: 'ОБО МНЕ',
      smm: 'SMM-ПРОДЮСИРОВАНИЕ',
      ai: 'AI-КОНТЕНТ',
      coding: 'РАЗРАБОТКА',
    },

    phrases: [
      'БОЛЕЕ 7 ЛЕТ ОПЫТА',
      '2 ГОДА НА РУКОВОДЯЩЕЙ ДОЛЖНОСТИ',
      'РОСТ КОНТЕНТА ЧЕРЕЗ МАРКЕТИНГ',
      'СВЯЗЬ МЕЖДУ БИЗНЕСОМ И ПОЛЬЗОВАТЕЛЯМИ',
    ],
  },
};

let currentLanguage = 'en';
let currentPhrase = 0;
let isChangingLanguage = false;
let phraseInterval;
let phraseTimeout;

const FADE_DURATION = 700;
const PHRASE_INTERVAL = 4000;

/* Обновление текста страницы */

function updateLanguage() {
  const language = translations[currentLanguage];

  document.documentElement.lang = currentLanguage;

  languageSwitch.textContent = language.button;
  languageSwitch.setAttribute('aria-label', language.buttonLabel);

  photo.alt = language.photoAlt;

  navigation.setAttribute(
    'aria-label',
    language.navigationLabel
  );

  document.querySelector('[data-nav="about"]').textContent =
    language.links.about;

  document.querySelector('[data-nav="smm"]').textContent =
    language.links.smm;

  document.querySelector('[data-nav="ai"]').textContent =
    language.links.ai;

  document.querySelector('[data-nav="coding"]').textContent =
    language.links.coding;
}

/* Плавная смена подзаголовка */

function changePhrase() {
  if (isChangingLanguage) {
    return;
  }

  subtitle.classList.add('subtitle--hidden');

  phraseTimeout = setTimeout(() => {
    const phrases = translations[currentLanguage].phrases;

    currentPhrase = (currentPhrase + 1) % phrases.length;
    subtitle.textContent = phrases[currentPhrase];

    subtitle.classList.remove('subtitle--hidden');
  }, FADE_DURATION);
}

/* Запуск цикла подзаголовков */

function startPhraseRotation() {
  clearInterval(phraseInterval);

  phraseInterval = setInterval(
    changePhrase,
    PHRASE_INTERVAL
  );
}

/* Плавное переключение языка */

languageSwitch.addEventListener('click', () => {
  if (isChangingLanguage) {
    return;
  }

  isChangingLanguage = true;

  clearTimeout(phraseTimeout);

  heroInfo.classList.add('language--changing');
  subtitle.classList.add('subtitle--hidden');

  currentLanguage = currentLanguage === 'en' ? 'ru' : 'en';
  currentPhrase = 0;

  setTimeout(() => {
    updateLanguage();

    subtitle.textContent =
      translations[currentLanguage].phrases[0];

    heroInfo.classList.remove('language--changing');

    setTimeout(() => {
      subtitle.classList.remove('subtitle--hidden');
      isChangingLanguage = false;
    }, 100);
  }, 350);
});

/* Первоначальная настройка */

updateLanguage();
startPhraseRotation();
