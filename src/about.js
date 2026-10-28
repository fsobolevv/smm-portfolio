
import '../style/style.css';

const languageSwitch = document.querySelector('#languageSwitch');

const translations = {
  en: {
    button: 'ВЕРСИЯ НА РУССКОМ',
    buttonLabel: 'Switch to Russian',

    back: '← BACK TO HOME',
    eyebrow: 'ABOUT ME',
    title: 'Strategy. People. Production.',
    lead: 'From strategy to execution: content that connects business goals, audience interests and team expertise.',

    stat1: 'years in content marketing',
    stat2: 'years in leadership roles',
    stat3: 'followers across managed accounts',

    profileLabel: 'PROFILE',

    description1:
      '7 years in content marketing, including 3 years in leadership roles. Led a team of 10.',

    description2:
      'I specialize in content marketing and SMM production, developing strategies, bridging the gap between businesses and their audiences, leading teams, and managing the end-to-end content production process.',

    description3:
      'Experienced in building content operations from the ground up for projects with a range of budgets and managing social media accounts with a combined audience of over 400,000 followers.',

    educationLabel: 'EDUCATION',
    educationTitle: 'Education:',
    education: 'Journalism',

    additionalTitle: 'Additional training:',
    additional: 'Videography and Video Editing, Content Marketing',

    footerLink: 'BACK TO MAIN PAGE ↗',
  },

  ru: {
    button: 'SWITCH TO ENGLISH',
    buttonLabel: 'Переключить на английский',

    back: '← НА ГЛАВНУЮ',
    eyebrow: 'ОБО МНЕ',
    title: 'Стратегия. Команда. Продакшн.',
    lead: 'От стратегии до реализации: контент, который объединяет задачи бизнеса, интересы аудитории и работу команды.',

    stat1: 'лет в контент-маркетинге',
    stat2: 'года на руководящих позициях',
    stat3: 'подписчиков в управляемых аккаунтах',

    profileLabel: 'ПРОФИЛЬ',

    description1:
      '7 лет в контент-маркетинге, 3 года на руководящих позициях. Управлял командой из 10 человек.',

    description2:
      'Специализируюсь на контент-маркетинге и SMM-продюсировании: разрабатываю стратегии, выстраиваю коммуникацию между бизнесом и аудиторией, управляю командами и организую полный цикл производства контента.',

    description3:
      'Есть опыт запуска контент-направлений с нуля для проектов с разными бюджетами и управления аккаунтами с совокупной аудиторией более 400 000 подписчиков.',

    educationLabel: 'ОБРАЗОВАНИЕ',
    educationTitle: 'Образование:',
    education: 'Журналистика',

    additionalTitle: 'Дополнительное образование:',
    additional: 'Видеография и монтаж, контент-маркетинг',

    footerLink: 'НА ГЛАВНУЮ ↗',
  },
};

/* Определяем язык из адреса страницы */

const params = new URLSearchParams(window.location.search);

let currentLanguage = params.get('lang') === 'ru' ? 'ru' : 'en';

/* Обновляем текст страницы */

function updateLanguage() {
  const language = translations[currentLanguage];

  document.documentElement.lang = currentLanguage;

  languageSwitch.textContent = language.button;
  languageSwitch.setAttribute('aria-label', language.buttonLabel);

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;

    if (language[key] !== undefined) {
      element.textContent = language[key];
    }
  });

  // Обновляем язык в адресе страницы
  const url = new URL(window.location.href);
  url.searchParams.set('lang', currentLanguage);

  window.history.replaceState({}, '', url);
}

/* Переключаем язык */

languageSwitch.addEventListener('click', () => {
  currentLanguage = currentLanguage === 'en' ? 'ru' : 'en';

  updateLanguage();
});

/* Первоначальная настройка */

updateLanguage();
