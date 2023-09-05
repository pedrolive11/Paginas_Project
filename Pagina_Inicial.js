window.addEventListener('scroll', function () {
    const logoContainer = document.querySelector('.logo-container');
    if (window.scrollY > 100) {
        logoContainer.classList.add('logo-small');
    } else {
        logoContainer.classList.remove('logo-small');
    }
});


