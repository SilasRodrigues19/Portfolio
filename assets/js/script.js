// Helpers

/**
 * Define atributos para um elemento DOM especificado.
 * @param {HTMLElement} el - O elemento DOM a ser modificado.
 * @param {Object.<string, string>} attrs - Um objeto que contém os atributos que serão setados no el
 */

const setAttributesHelper = (el, attrs) => {
  for (let attr in attrs) {
    el.setAttribute(attr, attrs[attr]);
  }
};

/**
 * Seleciona um ou vários elementos do DOM através do seletor
 * @param {string|HTMLElement} el - Uma string de seletores CSS ou o próprio elemento do DOM.
 * @param {boolean} [shouldSelectAll=false] - Uma flag que indica se deve retornar um ou vários elementos do DOM.
 * @returns {HTMLElement|NodeListOf<HTMLElement>} - O elemento DOM correspondente ou uma lista de elementos DOM correspondentes.
 */

const selectElement = (el, shouldSelectAll = false) => {
  if (typeof el === 'string') {
    return shouldSelectAll
      ? document.querySelectorAll(el)
      : document.querySelector(el);
  }
  return el;
};

/**
 * Adiciona, remove ou alterna a classe especificada em um elemento DOM.
 * @param {HTMLElement} el - O elemento DOM a ser modificado.
 * @param {string} className - A classe CSS a ser adicionada, removida ou alternada.
 * @param {string} action - A ação a ser executada: 'add' para adicionar, 'rem' para remover ou qualquer outro valor para alternar.
 */
const handleClass = (el, className, action) => {
  action === 'add'
    ? el.classList.add(className)
    : action === 'rem'
    ? el.classList.remove(className)
    : el.classList.toggle(className);
};

/**
 * Verifica se um elemento DOM especificado contém a classe CSS especificada.
 * @param {HTMLElement} el - O elemento DOM a ser verificado.
 * @param {string} className - A classe CSS a ser verificada.
 * @returns {boolean} - Verdadeiro se o elemento contiver a classe especificada, falso caso contrário.
 */
const hasClass = (el, className) => el.classList.contains(className);

const typedTextSpan = selectElement('.typed-text'),
  cursorSpan = selectElement('.cursor'),
  home = selectElement('.home .container'),
  avatar = selectElement('.avatar');

const textArray = ['Programador', 'Front End'],
  typingDelay = 50,
  erasingDelay = 50,
  newTextDelay = 2500;

let textArrayIndex = 0;
let charIndex = 0;

/* Data Words */
type = () => {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!hasClass(cursorSpan, 'typing'))
      handleClass(cursorSpan, 'typing', 'add');
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
    return;
  }
  handleClass(cursorSpan, 'typing', 'rem');
  setTimeout(erase, newTextDelay);
};

erase = () => {
  if (charIndex > 0) {
    if (!hasClass(cursorSpan, 'typing'))
      handleClass(cursorSpan, 'typing', 'add');
    typedTextSpan.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, erasingDelay);
    return;
  }
  handleClass(cursorSpan, 'typing', 'rem');
  textArrayIndex++;
  if (textArrayIndex >= textArray.length) textArrayIndex = 0;
  setTimeout(type, typingDelay + 1100);
};


/* Add warning when the user tries to access mail.php by URL */
let buttonMailAlert = selectElement('#warningMail_button'),
  mailAlert = selectElement('#warningMail');

if (mailAlert != null) {
  /* Avoid null variable error when the user doesn't try to access by URL */
  buttonMailAlert.addEventListener('click', () => {
    mailAlert.style.display = 'none';
  });
}

document.addEventListener('DOMContentLoaded', () => {
  let loader = selectElement('.wrapperLoader'),
    navBar = selectElement('.nav-bar'),
    header = selectElement('#header');

  loader.style.display = 'none';
  /* Tooltip Alert */
  selectElement('[data-toggle="tooltip"]', true).forEach(
    (el) => new bootstrap.Tooltip(el)
  );

  if (!localStorage.lgpd && loader.style.display === 'none') {
    setTimeout(() => {
      cookie.classList.remove('hideDown');
    }, 2000);
  }

  if (loader.style.display === 'none') {
    handleClass(navBar, 'nav-bar-animation', 'add');
    handleClass(home, 'infoAnimation', 'add');
    handleClass(avatar, 'infoAnimation', 'add');

    textArray.length && setTimeout(type, newTextDelay + 250);
    return;
  }
  header.style.display = 'none';
});

const menu = selectElement('.header .nav-bar .nav-list .menu'),
  mobile_menu = selectElement('.header .nav-bar .nav-list ul'),
  menu_item = selectElement('.header .nav-bar .nav-list ul li a', true),
  hamburger = selectElement('#hamburger'),
  header = selectElement('.header.container');

const scrollToTop = selectElement('#smoothScroll'),
  social = selectElement('.social'),
  rightArrow = selectElement('.rightArrow'),
  themeIcon = selectElement('#theme-toggle');

menu.addEventListener('click', () => {
  handleClass(menu, 'active', 'toggle');
  handleClass(mobile_menu, 'active', 'toggle');

  // Improving accessibility for visually impaired people
  if (hasClass(mobile_menu, 'active')) {
    setAttributesHelper(menu, {
      'aria-expanded': 'true',
      'aria-label': 'Fechar Menu',
    });
    return;
  }
  setAttributesHelper(menu, {
    'aria-expanded': 'false',
    'aria-label': 'Abrir Menu',
  });
});

document.addEventListener('scroll', () => {
  let scroll_position = window.scrollY;

  if (!navigator.userAgent.match(/Mobile/) && scroll_position < 100) {
    menu_item.forEach((item) => handleClass(item, 'underline', 'add'));
  } else if (navigator.userAgent.match(/Mobile/)) {
    menu_item.forEach((item) => handleClass(item, 'underline', 'rem'));
    handleClass(iconLink, 'underline', 'rem');
  } else {
    menu_item.forEach((item) => handleClass(item, 'underline', 'rem'));
  }

  const logo = selectElement('.logo');
  const menubar = selectElement('.bar', true);

  if (scroll_position < 100) {
    handleClass(header, 'menu-default', 'rem');
    handleClass(header, 'menu-transparent', 'add');
    menu_item.forEach((item) => {
      handleClass(item, 'menuLinks-2', 'rem');
      handleClass(item, 'scale95', 'rem');
    });
    handleClass(themeIcon, 'menuLinks-2', 'rem');
    logo.style.cssText = 'filter: none';
    menubar.forEach((item) => (item.style.cssText = 'filter: invert(1)'));
    return;
  }
  handleClass(header, 'menu-transparent', 'rem');
  handleClass(header, 'menu-default', 'add');
  menu_item.forEach((item) => {
    handleClass(item, 'menuLinks-2', 'add');
    handleClass(item, 'scale95', 'add');
  });
  handleClass(themeIcon, 'menuLinks-2', 'add');
  logo.style.cssText = 'filter: invert(1)';
  menubar.forEach((item) => (item.style.cssText = 'filter: none'));

  if (navigator.userAgent.match(/Mobile/)) {
    menu_item.forEach((item) => {
      handleClass(item, 'menuLinks-2', 'rem');
      handleClass(item, 'scale95', 'rem');
    });
  }

  if (scroll_position < 600) {
    scrollToTop.style.cssText = 'bottom: -150px';
    social.style.cssText =
      'visibility: hidden; opacity: 0; left: -50%; pointer-events: none';
    rightArrow.style.cssText = 'opacity: 0; top: -100%';
    return;
  }
  scrollToTop.style.cssText = 'bottom: 50px';
  social.style.cssText =
    'visibility: visible; opacity: 1; pointer-events: auto; transition: .7s ease-in-out';
  rightArrow.style.cssText = 'opacity: 1';
});

// Close menu after link is clicked
menu_item.forEach((item) => {
  item.addEventListener('click', () => {
    handleClass(menu, 'active', 'toggle');
    setTimeout(() => {
      handleClass(menu, 'active', 'toggle');
      // Animate menu icon when link is clicked
      if (!hasClass(mobile_menu, 'active')) {
        hamburger.checked = false;
        return;
      }
      hamburger.checked = true;
    }, 1500);
  });
});

const textArea = selectElement('#mensagem');
const count = selectElement('.count');
const charLimit = selectElement('.charLimit');
const CHAR_LIMIT = 1500;

charLimit.innerHTML = `Limite de ${CHAR_LIMIT} caracteres`;

textArea.addEventListener('keyup', (e) => {
  textArea.style.height = 'auto';

  let scrollHeight = e.target.scrollHeight;
  textArea.style.height = `${scrollHeight}px`;
});

countLetters = () => {
  const textLength = textArea.value.length;
  count.innerText = `${textLength}`;

  textLength >= CHAR_LIMIT
    ? handleClass(count, 'error', 'add')
    : handleClass(count, 'error', 'rem');
};

const certificate = selectElement('.certificate');

certificate.addEventListener('wheel', (e) => {
  e.preventDefault();
  certificate.scrollLeft += e.deltaY;
});

const certificateScroll = selectElement('.certificate-scroll');

const isMobile = /Mobile/.test(navigator.userAgent);

certificateScroll.innerHTML = isMobile
  ? 'Pressione com o dedo e arraste para o lado'
  : 'Utilize o scroll para rolagem lateral e clique na imagem para abrir';

menu_item.forEach((item) =>
  item.classList[isMobile ? 'remove' : 'add']('underline')
);

const htmlEl = selectElement('html');

htmlEl.onmouseover = () => handleClass(htmlEl, 'showScrollbar', 'add');
htmlEl.onmouseleave = () => handleClass(htmlEl, 'showScrollbar', 'rem');

const images = selectElement('img', true);

images.forEach((img) =>
  img.addEventListener('contextmenu', (e) => e.preventDefault())
);

document.addEventListener('DOMContentLoaded', () => {
  const boxInfo = selectElement('.boxInfo');

  boxInfo.addEventListener('click', (e) => {
    if (e.target.matches('li img')) {
      const tabsId = e.target.parentNode.id;

      handleClass(e.target.parentNode, 'active', 'toggle');

      const siblings = [...boxInfo.querySelectorAll(`li[id=${tabsId}]`)].filter(
        (el) => el !== e.target.parentNode
      );

      siblings.forEach((sibling) => handleClass(sibling, 'activeTabs', 'rem'));

      const activeTabs = selectElement(`#${tabsId}-content-box`);
      handleClass(activeTabs, 'activeTabs', 'toggle');

      activeTabs
        .querySelectorAll('p, hr')
        .forEach((el) => handleClass(el, 'fadeInUp', 'toggle'));
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const favicon = selectElement('#favicon');
  const pageTitle = document.title;
  const attentionMessage = 'Volte para a página...';

  document.addEventListener('visibilitychange', () => {
    const isPageActive = !document.hidden;
    toggle(isPageActive);
  });

  toggle = (isPageActive) => {
    if (isPageActive) {
      document.title = pageTitle;
      return (favicon.href = '../../favicon.ico');
    }
    document.title = attentionMessage;
    favicon.href = '../../favicon-change.svg';
  };
});

const copy = selectElement('.copy');

copy.innerHTML = `Copyright &copy 2021 - ${new Date().getFullYear()} - Silas Rodrigues. Todos os direitos reservados`;

const progressBar = selectElement('.progress-bar');

document.addEventListener('scroll', () => {
  let width =
    ((document.body.scrollTop || document.documentElement.scrollTop) /
      (document.documentElement.scrollHeight -
        document.documentElement.clientHeight)) *
    100;
  progressBar.style.width = `${width}%`;
});

const currentDate = new Date();
const myBirthDate = new Date('1999-04-22');
const age = selectElement('.age', true);
let currentAge = currentDate.getFullYear() - myBirthDate.getFullYear();

if (currentDate.getMonth() < myBirthDate.getMonth()) {
  currentAge--;
} else if (
  currentDate.getMonth() === myBirthDate.getMonth() &&
  currentDate.getDate() < myBirthDate.getDate()
) {
  currentAge--;
}

age.forEach((item) => item.innerHTML = `${currentAge} anos`);


const cookie = selectElement('.cookies');
const acceptPolicy = selectElement('.accept-policy');
const hotjarContainer = selectElement(
  '._hj_feedback_container ._hj-G09L\\+__MinimizedWidgetMiddle__container._hj-v4Fsu__MinimizedWidgetMiddle__right'
);
const formElements = selectElement('#formContact input, #formContact textarea, #formContact button', true);

if(!localStorage.lgpd) {
  cookie.classList.remove('hide');

  if (document.body.contains(hotjarContainer)) hotjarContainer.style.display = 'none';
  

  formElements.forEach((el) => {
    setAttributesHelper(el, { disabled: true, title: 'Desabilitado enquanto os temos de política de privacidade não forem aceitos' });
  });

}

const acceptCookies = () => {
  const cookieOptions = [
    {
      name: 'analytics',
      accepted: 'true',
    },
    {
      name: 'hotjar-feedback',
      accepted: 'true',
    },
  ];

  localStorage.setItem('lgpd-concent', 'true');
  localStorage.setItem('lgpd', JSON.stringify(cookieOptions));

  cookie.classList.add('hideDown');
  
  setTimeout(() => {
    cookie.classList.add('hide');
  }, 2000);

  if (document.body.contains(hotjarContainer)) hotjarContainer.style.display = 'block';
  

  formElements.forEach((el) => {
    el.disabled = false;
    el.removeAttribute('title')
  });

};

document.addEventListener('DOMContentLoaded', () => {

  if (localStorage.lgpd && document.body.contains(hotjarContainer)) {
    hotjarContainer.style.display = 'none';
  }

  if (!localStorage.lgpd) {
    hotjarContainer.style.display = 'block';
  }

});

acceptPolicy.addEventListener('click', acceptCookies)