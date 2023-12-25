// SCROLL
window.addEventListener('load', function () {
    var path = window.location.pathname;
    function calculateScrollOffset() {
        if (window.innerWidth <= 767) {
            return window.innerHeight * 1.0; // 100vh
        } else {
            return window.innerHeight * 0.91; // 91vh para pantallas mayores a 767px
        }
    }
    if (path !== '/' && path.indexOf('/index.html') === -1) {
        window.scrollTo(0, calculateScrollOffset());
    }
});