let currentIndex = 0;

    function moveCarousel(direction) {
        const carouselImages = document.getElementById('carousel-images');
        const totalImages = carouselImages.children.length;
        currentIndex = (currentIndex + direction + totalImages) % totalImages;
        carouselImages.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
    function autoMoveCarousel() {
        moveCarousel(1);
    }

    setInterval(autoMoveCarousel, 3000); // Muda a imagem a cada 3 segundos