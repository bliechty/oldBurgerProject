function placeholder() {
    function mediaQuery(x) {
        if (x.matches) {
            document.getElementById('navigation').innerHTML =
                `<div class='logo'>
                    <a href='index.html'><img src='../images/rockeyburgers02-logo.png' alt='rockey-logo' class='rockey-logo' height='40'/></a>
                </div>
                <i class="fas fa-bars bars"></i>`;
        } else {
            document.getElementById('navigation').innerHTML =
                `<div class='logo'>
                    <a href='index.html'><img src='../images/rockeyburgers02-logo.png' alt='rockey-logo' class='rockey-logo' height='40'/></a>
                </div>
                <div class='nav'>
                    <a href='menu.html'>Menu</a>
                    <a href='locations.html'>Locations</a>
                    <a href='jobs.html'>Jobs</a>
                    <a href='about.html'>About</a>
                    <a href='subscribe.html'>Subscribe</a>
                    <a href='faq.html'>FAQ</a>
                </div>
                <div class='socials'>
                    <a href='http://www.facebook.com/keyburgers' target='_blank'><i class='fab fa-twitter-square twitter'></i></a>
                    <a href='http://www.twitter.com/keyburgers' target='_blank'><i class='fab fa-facebook-square facebook'></i></a>
                </div>`;
        }
    }

    let x = window.matchMedia('(max-width: 1200px)')
    mediaQuery(x);
    x.addListener(mediaQuery);
}