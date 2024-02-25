import { langArr } from './lang.js';

const btnLangs = document.querySelectorAll('.btn-language');
const allLang = ['pl', 'en', 'ua'];

btnLangs.forEach(btnLang => {
    btnLang.addEventListener('click', changeLanguage);
});

function changeLanguage(event) {
    let lang = event.target.value;
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

document.addEventListener("DOMContentLoaded", function(event) {
    let checkedBtn = document.querySelector('.btn-language:checked');
    let lang = checkedBtn ? checkedBtn.value : 'pl';
    updateTextContent(lang);
});