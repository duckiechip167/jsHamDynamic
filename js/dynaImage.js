const mediaQuery = window.matchMedia('(max-width: 600px)');
const imageElement = document.getElementById('responsiveImage');

function loadResponsiveImage(event) {
    if (event.matches) {
        // screen width < 600px
        imageElement.src = 'img/small-imgage.jpg';
        imageElement.alt = 'Small resolution image';
    }
    else {
        // screen width > 600px
        imageElement.src = 'img/large-img.jpg';
        imageElement.alt = 'Large resolution image';
    }
}

loadResponsiveImage(mediaQuery);

mediaQuery.addEventListener(loadResponsiveImage);