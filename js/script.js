document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.carousel-slide');
    const nextBtn = document.querySelector('.nav-button.next');
    const prevBtn = document.querySelector('.nav-button.prev');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active-slide'));
        dots.forEach(dot => dot.classList.remove('active-dot'));

        slides[index].classList.add('active-slide');
        if(dots[index]) {
            dots[index].classList.add('active-dot');
        }
        currentSlide = index;
    }

    function nextSlide() {
        let newIndex = (currentSlide + 1) % slides.length;
        showSlide(newIndex);
    }

    function prevSlide() {
        let newIndex = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(newIndex);
    }

    if (slides.length > 0) {
        showSlide(0);

        let slideInterval = setInterval(nextSlide, 14000);
        function resetInterval() {
            if (slideInterval) clearInterval(slideInterval);
            slideInterval = setInterval(nextSlide, 14000);
        }

        if (nextBtn) nextBtn.addEventListener('click', () => {
            nextSlide();
            resetInterval();
        });
        if (prevBtn) prevBtn.addEventListener('click', () => {
            prevSlide();
            resetInterval();
        });

        // Add click events for dots
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                showSlide(index);
                resetInterval();
            });
        });
    }
});
