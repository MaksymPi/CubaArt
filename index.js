document.addEventListener('click', e => {
    console.log(e.target.tagName);
    if (e.target.tagName === 'A') {
      route(e);
    }
    e.preventDefault();
});

const route = (e) => {
    window.history.pushState({}, '', e.target.href);
    handleLocation();
}

const routes = {
    '.': ' ',
    '/components/AboutMe/AboutMe.html': 'about',
    '/components/Art/Art.html': 'art',
    '/components/MyProject/MyProject.html': 'project',
}

const handleLocation = async () => {
    const path = window.location.pathname;
    const routerKey = routes[path];
    if (routerKey) {
        const html = await fetch(path).then((data) => data.text());
        document.querySelector('.content-container').innerHTML = html;
    }
}
window.onpopstate = handleLocation;
window.route = route;
handleLocation();