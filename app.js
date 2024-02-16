import { langArr } from './lang.js';

const btnLangs = document.querySelectorAll('.btn-language');
const allLang = ['pl', 'en', 'ua',];

btnLangs.forEach(btnLang => {
    btnLang.addEventListener('click', changeURLLanguage);
});

function changeURLLanguage(event) {
    let lang = event.target.value;
    console.log(lang);
    location.href = window.location.pathname + '#' + lang;
    location.reload();
}

function changeLanguage(){
    let hash = window.location.hash.substr(1);
    if (!allLang.includes(hash)) {
        location.href = window.location.pathname + '#pl'
        location.reload()
    }  
    btnLangs.forEach(btnLang => {
        if (btnLang.value === hash) {
            btnLang.checked = true;
        }
    });

    document.querySelector('title').innerHTML = langArr['titleLang'][hash]
    for (let key in langArr) {
        let elems = document.querySelectorAll('.lng-' + key);
        elems.forEach(elem => {
            elem.innerHTML = langArr[key][hash];
        });
    }
}

changeLanguage()