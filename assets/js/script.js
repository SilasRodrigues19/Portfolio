const typedTextSpan = document.querySelector(".typed-text"),
    cursorSpan = document.querySelector(".cursor"),
    home = document.querySelector(".home .container");

const textArray = ["Web Developer", "Programador", "Front End"];
const typingDelay = 50;
const erasingDelay = 50;
const newTextDelay = 2500; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;


/* Data Words */
type = () => {
    if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
        return;
    }
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
}

erase = () => {
    if (charIndex > 0) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
        return;
    }
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
}


setAttributesHelper = (el, attrs) => {
    for (let attr in attrs) {
        el.setAttribute(attr, attrs[attr]);
    }
}


// Fix  Lightbox Uncrawlable Links
displayContent = () => {
    const lightBoxCancel = document.querySelector('.lb-cancel'),
        lightBoxPrev = document.querySelector('.lb-prev'),
        lightBoxNext = document.querySelector('.lb-next'),
        lightBoxClose = document.querySelector('.lb-close');
    setAttributesHelper(lightBoxCancel, { 'rel': 'nofollow', 'href': '#' });
    setAttributesHelper(lightBoxPrev, { 'rel': 'nofollow', 'href': '#' });
    setAttributesHelper(lightBoxNext, { 'rel': 'nofollow', 'href': '#' });
    setAttributesHelper(lightBoxClose, { 'rel': 'nofollow', 'href': '#' });
}

window.onload = displayContent;

/* Add warning when the user tries to access mail.php by URL */
let buttonMailAlert = document.getElementById('warningMail_button'),
    mailAlert = document.getElementById('warningMail');

if (mailAlert != null) { /* Avoid null variable error when the user doesn't try to access by URL */
    buttonMailAlert.addEventListener('click', () => {
        mailAlert.style.display = 'none';
    });
}

document.addEventListener("DOMContentLoaded", () => {
    loader = document.getElementById('loader');
    loader.style.display = 'none';
    /* Tooltip Alert */
    $('[data-toggle="tooltip"]').tooltip();
    home.classList.add('infoAnimation');
    if (textArray.length) setTimeout(type, newTextDelay + 250);
    return
});

const menu = document.querySelector('.header .nav-bar .nav-list .menu'),
    mobile_menu = document.querySelector('.header .nav-bar .nav-list ul'),
    menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a'),
    hamburger = document.querySelector('#hamburger'),
    header = document.querySelector('.header.container');

const scrollToTop = document.querySelector('#smoothScroll'),
    social = document.querySelector('.social'),
    rightButton = document.querySelector('.rightButton');


menu.addEventListener('click', () => {
    menu.classList.toggle('active');
    mobile_menu.classList.toggle('active');

    // Improving accessibility for visually impaired people
    if (mobile_menu.classList.contains('active')) {
        setAttributesHelper(menu, { 'aria-expanded': 'true', 'aria-label': 'Fechar Menu' });
        return;
    }
    setAttributesHelper(menu, { 'aria-expanded': 'false', 'aria-label': 'Abrir Menu' });
});


document.addEventListener('scroll', () => {
    let scroll_position = window.scrollY;

    scroll_position > 100 ? header.style.backgroundColor = '#111' : header.style.backgroundColor = 'transparent';

    if (scroll_position < 600) {
        scrollToTop.style.cssText = 'opacity: 0; display: none';
        social.style.cssText = 'visibility: hidden; opacity: 0; pointer-events: none';
        rightButton.style.cssText = 'opacity: 0';
        return;
    }
    scrollToTop.style.cssText = 'opacity: 1';
    social.style.cssText = 'visibility: visible; opacity: 1; pointer-events: auto';
    rightButton.style.cssText = 'opacity: 1';

});

// Close menu after link is clicked
menu_item.forEach((item) => {
    item.addEventListener('click', () => {
        menu.classList.toggle('active');
        mobile_menu.classList.toggle('active');
        // Animate menu icon when link is clicked
        if (!mobile_menu.classList.contains('active')) {
            hamburger.checked = false;
            return;
        }
        hamburger.checked = true;
    });
});

const textArea = document.querySelector('#mensagem');
const count = document.querySelector('.count');

textArea.addEventListener("keyup", e => {
    textArea.style.height = "auto";

    let scrollHeight = e.target.scrollHeight;
    textArea.style.height = `${scrollHeight}px`;
});


countLetters = () => {
    const textLength = textArea.value.length;
    count.innerText = `${textLength}`;

    textLength >= 1500 ? count.classList.add("error") : count.classList.remove("error");
}