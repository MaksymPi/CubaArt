import { langArr } from './lang.js';

const btnLangs = document.querySelectorAll('.btn-language');
const allLang = ['pl', 'en', 'ua'];

btnLangs.forEach(btnLang => {
    btnLang.addEventListener('click', changeLanguage);
});

function changeLanguage(event) {
    let lang = event.target.value;
    console.log(lang);
    updateTextContent(lang);
}

function updateTextContent(lang) {
    document.title = langArr['titleLang'][lang];
    for (let key in langArr) {
        let elems = document.querySelectorAll('.lng-' + key);
        elems.forEach(elem => {
            elem.innerHTML = langArr[key][lang];
        });
    }
}

// Инициализация при загрузке страницы
document.addEventListener("DOMContentLoaded", function(event) {
    let lang = window.location.hash.substr(1);
    if (!allLang.includes(lang)) {
        lang = 'pl';
    }
    updateTextContent(lang);
    btnLangs.forEach(btnLang => {
        if (btnLang.value === lang) {
            btnLang.checked = true;
        }
    });
});
