const mediaQuery = window.matchMedia('(max-width: 600px)');
const hamburger = document.getElementById('hambuger');
const navbar = document.getElementById('navbar');

function toggleNavbar (event) {
    if (event.matches) {
        // screen width < 600px
        hamburger.style.display = 'black';
        navbar.style.display = 'none';
    }
    else {
        // screen width > 600px
        hamburger.style.display = 'none';
        navbar.style.display = 'flex';
    }
}

toggleNavbar(mediaQuery);

mediaQuery.addListener(toggleNavbar);

hamburger.addEventListener('click', () => {
    if (navbar.style.display = 'flex') {
        navbar.style.display = 'none';
    }
    else {
        navbar.style.display = 'flex';
    }
});