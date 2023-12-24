// SCROLL
window.addEventListener('load', function () {
    var path = window.location.pathname;
    if (path !== '/' && path.indexOf('/index.html') === -1) {
        window.scrollTo(0, window.innerHeight * 0.91); // 91vh
        }
    }
);
