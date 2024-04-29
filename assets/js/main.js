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



