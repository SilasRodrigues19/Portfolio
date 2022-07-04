const typedTextSpan = document.querySelector(".typed-text"),
    cursorSpan = document.querySelector(".cursor"),
    home = document.querySelector(".home .container"),
    avatar = document.querySelector(".avatar");

const textArray = ["Programador", "Front End"],
    typingDelay = 50,
    erasingDelay = 50,
    newTextDelay = 2500;

let textArrayIndex = 0;
let charIndex = 0;

/* Data Words */
type = () => {
    if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains("typing"))
            cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
        return;
    }
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
};

erase = () => {
    if (charIndex > 0) {
        if (!cursorSpan.classList.contains("typing"))
            cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(
            0,
            charIndex - 1
        );
        charIndex--;
        setTimeout(erase, erasingDelay);
        return;
    }
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
};

setAttributesHelper = (el, attrs) => {
    for (let attr in attrs) {
        el.setAttribute(attr, attrs[attr]);
    }
};

// Fix  Lightbox Uncrawlable Links
displayContent = () => {
    const lightBoxCancel = document.querySelector(".lb-cancel"),
        lightBoxPrev = document.querySelector(".lb-prev"),
        lightBoxNext = document.querySelector(".lb-next"),
        lightBoxClose = document.querySelector(".lb-close");
    setAttributesHelper(lightBoxCancel, { rel: "nofollow", href: "#" });
    setAttributesHelper(lightBoxPrev, { rel: "nofollow", href: "#" });
    setAttributesHelper(lightBoxNext, { rel: "nofollow", href: "#" });
    setAttributesHelper(lightBoxClose, { rel: "nofollow", href: "#" });
};

window.onload = displayContent;

/* Add warning when the user tries to access mail.php by URL */
let buttonMailAlert = document.getElementById("warningMail_button"),
    mailAlert = document.getElementById("warningMail");

if (mailAlert != null) {
    /* Avoid null variable error when the user doesn't try to access by URL */
    buttonMailAlert.addEventListener("click", () => {
        mailAlert.style.display = "none";
    });
}

document.addEventListener("DOMContentLoaded", () => {
    loader = document.getElementById("loader");
    loader.style.display = "none";
    /* Tooltip Alert */
    $('[data-toggle="tooltip"]').tooltip();
    home.classList.add("infoAnimation");
    avatar.classList.add("infoAnimation");
    textArray.length && setTimeout(type, newTextDelay + 250);
});

const menu = document.querySelector(".header .nav-bar .nav-list .menu"),
    mobile_menu = document.querySelector(".header .nav-bar .nav-list ul"),
    menu_item = document.querySelectorAll(".header .nav-bar .nav-list ul li a"),
    hamburger = document.querySelector("#hamburger"),
    header = document.querySelector(".header.container");

const scrollToTop = document.querySelector("#smoothScroll"),
    social = document.querySelector(".social"),
    rightArrow = document.querySelector(".rightArrow"),
    themeIcon = document.querySelector('#theme-toggle');

menu.addEventListener("click", () => {
    menu.classList.toggle("active");
    mobile_menu.classList.toggle("active");

    // Improving accessibility for visually impaired people
    if (mobile_menu.classList.contains("active")) {
        setAttributesHelper(menu, {
            "aria-expanded": "true",
            "aria-label": "Fechar Menu",
        });
        return;
    }
    setAttributesHelper(menu, {
        "aria-expanded": "false",
        "aria-label": "Abrir Menu",
    });
});

document.addEventListener("scroll", () => {
    let scroll_position = window.scrollY;

    if (!navigator.userAgent.match(/Mobile/) && scroll_position < 100) {
        menu_item.forEach((item) => item.classList.add("underline"));
    } else if (navigator.userAgent.match(/Mobile/)) {
        menu_item.forEach((item) => item.classList.remove("underline"));
        iconLink.classList.remove("underline");
    } else {
        menu_item.forEach((item) => item.classList.remove("underline"));
    }

    const logo = document.querySelector('.logo');
    const menubar = document.querySelectorAll('.bar');

    if (scroll_position < 100) {
        header.classList.remove('menu-default');
        header.classList.add('menu-transparent');
        menu_item.forEach((item) => item.classList.remove('menuLinks-2', 'scale95'));
        themeIcon.classList.remove('menuLinks-2');
        logo.style.cssText = "filter: none";
        menubar.forEach((item) => item.style.cssText = 'filter: invert(1)');
        return;
    }
    header.classList.remove('menu-transparent');
    header.classList.add('menu-default');
    menu_item.forEach((item) => item.classList.add('menuLinks-2', 'scale95'));
    themeIcon.classList.add('menuLinks-2');
    logo.style.cssText = 'filter: invert(1)';
    menubar.forEach((item) => (item.style.cssText = 'filter: none'));

    if (navigator.userAgent.match(/Mobile/)) {
        menu_item.forEach((item) =>
            item.classList.remove('menuLinks-2', 'scale95')
        );
    }

    if (scroll_position < 600) {
        scrollToTop.style.cssText = "bottom: -150px";
        social.style.cssText =
            "visibility: hidden; opacity: 0; left: -50%; pointer-events: none";
        rightArrow.style.cssText = "opacity: 0; top: -100%";
        return;
    }
    scrollToTop.style.cssText = "bottom: 50px";
    social.style.cssText =
        "visibility: visible; opacity: 1; pointer-events: auto; transition: .7s ease-in-out";
    rightArrow.style.cssText = "opacity: 1";
});

// Close menu after link is clicked
menu_item.forEach((item) => {
    item.addEventListener("click", () => {
        menu.classList.toggle("active");
        setTimeout(() => {
            mobile_menu.classList.toggle("active");
            // Animate menu icon when link is clicked
            if (!mobile_menu.classList.contains("active")) {
                hamburger.checked = false;
                return;
            }
            hamburger.checked = true;
        }, 1500);
    });
});

const textArea = document.querySelector("#mensagem");
const count = document.querySelector(".count");

textArea.addEventListener("keyup", (e) => {
    textArea.style.height = "auto";

    let scrollHeight = e.target.scrollHeight;
    textArea.style.height = `${scrollHeight}px`;
});

countLetters = () => {
    const textLength = textArea.value.length;
    count.innerText = `${textLength}`;

    textLength >= 1500 ?
        count.classList.add("error") :
        count.classList.remove("error");
};

const certificate = document.querySelector(".certificate");

certificate.addEventListener("wheel", (e) => {
    e.preventDefault();
    certificate.scrollLeft += e.deltaY;
});

const certificateScroll = document.querySelector(".certificate-scroll");

navigator.userAgent.match(/Mobile/) ?
    (certificateScroll.innerHTML = "Pressione com o dedo e arraste para o lado") :
    (certificateScroll.innerHTML =
        "Utilize o scroll para rolagem lateral e clique na imagem para abrir");

navigator.userAgent.match(/Mobile/) ?
    menu_item.forEach((item) => item.classList.remove("underline")) :
    menu_item.forEach((item) => item.classList.add("underline"));



$(document).ready(function() {
    $(".boxInfo").on("click", "li", function() {

        let tabsId = $(this).attr("id");
        $(this).toggleClass("active").siblings().removeClass("active");
        $("#" + tabsId + "-content-box")
            .toggleClass("activeTabs")
            .siblings()
            .removeClass("activeTabs");
    });
});