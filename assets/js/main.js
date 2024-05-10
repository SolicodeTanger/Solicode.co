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
$(window).scroll(function () {

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

    $(document).ready(function () {

        $('#dropdownNavbarLink').click(function () {
            $('#dropdownNavbarLink').toggleClass('change');
        })

    });


});

