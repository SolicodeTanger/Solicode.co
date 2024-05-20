document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll('.relative img');
    let currentIndex = 0;

    setInterval(() => {
        const previousIndex = currentIndex;
        currentIndex = (currentIndex + 1) % images.length;

        images[previousIndex].style.opacity = '0';
        images[currentIndex].style.opacity = '1';
    }, 5000);
});

// Counter



// ===== NAVBAR ===== //
document.addEventListener('DOMContentLoaded', function () {
    const lightLogo = document.getElementById('lightLogo');
    const darkLogo = document.getElementById('darkLogo');

    $(window).scroll(function () {
        if ($(window).width() > 800) {
            let position = $(this).scrollTop();
            if (position >= 500) {
                $('.nav-menu').addClass('costum-navbar');
                darkLogo.style.display = 'none';
                lightLogo.style.display = 'block';
            } else {
                $('.nav-menu').removeClass('costum-navbar');
                darkLogo.style.display = 'block';
                lightLogo.style.display = 'none';
            }
        }
    });
});


const scrollBtn = document.querySelector('.scroll-to-bottom');

scrollBtn.addEventListener('click', function () {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth',
    });
});