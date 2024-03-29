const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, '', event.target.href);
    handleLocation();
};


const routes = {
    404: '/pages/404.html',
    '/index.html': 'components/ArtPage/Art.html',
    '/': 'components/ArtPage/Art.html',
    '/about':'components/AboutMe/AboutMe.html',
    '/contact': '/components/Contact/Contact.html',
}

const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path] || routes[404];
    const html = await fetch(route).then((data) => data.text());
    document.querySelector('.content-container').innerHTML = html;
}


window.onpopstate = handleLocation;
window.route = route;

handleLocation();